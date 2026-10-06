/* ============================================================
   Loyal Way Traders — shared site logic
   Runs on every page. Each render function checks whether its
   target element exists, so it's safe to include on pages that
   don't have that section (e.g. the carousel only renders if
   #carouselTrack is present on the page).

   Cart is stored in localStorage (key "loyalway_cart") so it
   survives navigating between pages, since each page is now a
   separate, real HTML file rather than a hidden div.
   ============================================================ */

/* ---------- Cart state ---------- */
function loadCart(){
  try{
    const raw = localStorage.getItem('loyalway_cart');
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}
function saveCart(){
  try{
    localStorage.setItem('loyalway_cart', JSON.stringify(cart));
  }catch(e){ /* storage unavailable — cart still works for this page view */ }
}
let cart = loadCart();

function updateCartCount(){
  const el = document.getElementById('cartCount');
  if(el) el.textContent = cart.length;
}

function addToCart(id, btn){
  const product = products.find(p=>p.id===id);
  cart.push(product);
  saveCart();
  updateCartCount();
  if(btn){
    btn.textContent = "Added ✓";
    btn.classList.add('added');
    setTimeout(()=>{btn.textContent="Add to Cart"; btn.classList.remove('added');}, 1200);
  }
}

function removeFromCart(index){
  cart.splice(index,1);
  saveCart();
  renderCart();
  updateCartCount();
}

function renderCart(){
  const wrap = document.getElementById('cartItems');
  if(!wrap) return;
  if(cart.length===0){
    wrap.innerHTML = '<div class="empty-cart">Your cart is empty. Browse our products and add something you like.</div>';
    return;
  }
  wrap.innerHTML = cart.map((item,i)=>{
    return `<div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${i})">&#10005;</button>
    </div>`;
  }).join('') + `<button class="enquire-btn" onclick="sendEnquiry()">
      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.71 4.605 1.93 6.463L4 29l7.73-1.905A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.98 0-3.83-.55-5.41-1.5l-.388-.23-4.59 1.13 1.16-4.47-.253-.4A9.71 9.71 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.76 9.07 26.76 15 21.94 24.75 16.004 24.75zm5.9-8.06c-.32-.16-1.9-.94-2.2-1.05-.295-.11-.51-.16-.725.16-.213.32-.83 1.05-1.02 1.27-.187.213-.375.24-.695.08-.32-.16-1.35-.497-2.57-1.583-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.494.14-.653.144-.144.32-.375.48-.563.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.724-1.75-.993-2.396-.262-.628-.528-.543-.724-.553l-.617-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.257 3.446 5.467 4.834.764.33 1.36.526 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.9-.777 2.167-1.527.267-.75.267-1.393.187-1.527-.08-.133-.293-.213-.613-.373z"/>
      </svg>
      Enquire Now
    </button>`;
}

/* ---------- WhatsApp Enquiry ---------- */
const whatsappNumber = "971547671531"; // TODO: replace with your WhatsApp Business number (digits only, with country code, no + or spaces)

function sendEnquiry(){
  if(cart.length === 0) return;
  let message = "Hello, I want to purchase:\n";
  cart.forEach((item)=>{
    message += `\n*${item.name}*\n${item.desc}\n`;
  });
  message += "\nThank you!";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ---------- Render producers (by category — producers page) ---------- */
function renderProducers(){
  const container = document.getElementById('producersByCategory');
  if(!container) return;
  container.innerHTML = producerCategories.map(cat => `
    <div class="producers-category">
      <h3>${cat.category}</h3>
      <div class="producers-tile-grid">
        ${cat.items.map(item => `
          <div class="producer-tile">
            ${item.img
              ? `<img src="${item.img}" alt="${item.name || cat.category + ' component manufacturer'}" loading="lazy">`
              : `<span>${item.name}</span>`}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------- Render products (home page — popular only) ---------- */
function renderProducts(){
  const popularProducts = products.filter(p => p.popular);
  const cardsHTML = popularProducts.map(p=>`
    <div class="product-card">
      <div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price-row">
          <button class="add-btn" onclick="addToCart(${p.id}, this)">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
  const grid = document.getElementById('productsGridHome');
  if(grid) grid.innerHTML = cardsHTML;
}

/* ---------- Render products (products page — filterable, full catalog) ---------- */
let activeProductCategory = 'all';

function renderProductsPage(){
  const grid = document.getElementById('productsGridPage');
  if(!grid) return;
  const filtered = activeProductCategory === 'all'
    ? products
    : products.filter(p => p.category === activeProductCategory);

  if(filtered.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--ink-dim);">No products in this category yet — check back soon.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p=>`
    <div class="product-card">
      <div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price-row">
          <button class="add-btn" onclick="addToCart(${p.id}, this)">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProductsPage(category, btn){
  activeProductCategory = category;
  document.querySelectorAll('.products-nav-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderProductsPage();
}

/* ---------- Carousel (home page) ---------- */
let currentSlide = 0;
function renderCarousel(){
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');
  if(!track || !dots) return;
  track.innerHTML = slides.map(s=>`
    <div class="slide">
      <img src="${s.img}" alt="${s.title} — Loyal Way Traders" loading="lazy">
      <div class="slide-text">
        <span class="eyebrow">${s.eyebrow}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    </div>
  `).join('');
  dots.innerHTML = slides.map((_,i)=>`<span data-i="${i}" onclick="setSlide(${i})"></span>`).join('');
  updateCarousel();
}
function updateCarousel(){
  const track = document.getElementById('carouselTrack');
  if(!track) return;
  track.style.transform = `translateX(-${currentSlide*100}%)`;
  document.querySelectorAll('.carousel-dots span').forEach((d,i)=>d.classList.toggle('active', i===currentSlide));
}
function moveSlide(dir){
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  updateCarousel();
}
function setSlide(i){ currentSlide = i; updateCarousel(); }
if(document.getElementById('carouselTrack')){
  setInterval(()=>moveSlide(1), 5000);
}

/* ---------- Popular Producers: horizontal scroll (home page) ---------- */
function scrollProducers(dir){
  const el = document.getElementById('producersScroll');
  if(el) el.scrollBy({left: dir * 220, behavior: 'smooth'});
}

/* ---------- Nav: hamburger menu ---------- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(hamburgerBtn && mobileMenu){
  hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  document.querySelectorAll('.yearClone').forEach(el=>el.textContent = new Date().getFullYear());

  renderProducts();
  renderCarousel();
  renderProducers();
  renderProductsPage();
  renderCart();
  updateCartCount();
});
