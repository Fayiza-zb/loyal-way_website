/* ============================================================
   Loyal Way Traders — shared product & brand data
   Used by every page. Edit here once, it updates everywhere.
   ============================================================ */
const products = [
  {
    id:1,
    name:"Semiconductor ICs",
    desc:"High-performance integrated circuits and microcontrollers for industrial and consumer designs.",
    img:"images_pro/semiconductor.jpg",
    category:"semiconductors",
    popular:true
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
  {
    id:2,
    name:"Power Diode Module",
    desc:"An Insulated Gate Bipolar Transistor (IGBT) module is an integrated power assembly that packages multiple IGBT chips and fast-recovery diodes into a single housing to switch exceptionally large electrical currents at high voltages.",
    img:"images_pro_sc/sc_1.jpg",
    category:"semiconductors",
    popular:"true"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
  {
    id:3,
    name:"Power Diode Module",
    desc:"High-current power diode module designed for efficient rectification and reliable performance in industrial power electronics.",
    img:"images_pro_sc/sc_2.webp",
    category:"semiconductors"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
  {
    id:4,
    name:"Thyristor or Silicon Controlled Rectifier (SCR).",
    desc:"High-performance TRIAC for AC load switching and dimming applications, offering reliable bidirectional current control.",
    img:"images_pro_sc/sc_3.jpeg",
    category:"semiconductors"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },


  {
    id:5,
    name:"IGBT Power Transistor",
    desc:"High-efficiency Insulated Gate Bipolar Transistor (IGBT) designed for motor drives, inverters, UPS systems, and industrial automation",
    img:"images_pro_sc/sc_5.jpg",
    category:"semiconductors"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
  {
    id:6,
    name:"bridge rectifiers",
    desc:"A rectifier is an electrical circuit or device that converts alternating current (AC), which periodically reverses direction, into direct current (DC), which flows continuously in a single direction.",
    img:"images_pro_sc/sc_6.jpeg",
    category:"semiconductors"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
 
  

  {
    id:7,
    name:"Stud Mounting Rectifier Diodes",
    desc:"High current rectifier / power diodes in standard stud-mounting cases. Due to the excellent thermal coupling between the device and heatsink stud mounting offers high reliability at high operating currents.",
    img:"images_pro_sc/sc_10.jpg",
    category:"semiconductors"
    // ↑ Change this URL to swap the image for Semiconductor ICs
  },
  
  {
    id:8,
    name:"Circular Multi-Pin Aviation Connector (Panel Mount & Cable Plug)",
    desc:"Durable multi-pin connector for industrial power, signal, and communication applications.",
    img:"images_pro/circular_multipin.jpg",
    category:"connectors",
    popular:true
    // ↑ Change this URL to swap the image for Embedded & IoT Modules
  },
  {
    id:9,
    name:"Deutsch DT Series Automotive Electrical Connector Kit",
    desc:"Sealed automotive connector kit for reliable power and signal connections in harsh environments.",
    img:"images_pro/deutsch.jpg",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for Cartridge Fuses
  },
  {
    id:10,
    name:"Waterproof Circular Cable Connector (2/3 Pin)",
    desc:"Waterproof cable connector providing secure electrical connections in demanding environments.",
    img:"images_pro/black_waterproof.avif",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for Hookup Wire Set
  },
  {
    id:11,
    name:"Waterproof Circular Electrical Connector (IP67/IP68)",
    desc:"IP67/IP68 waterproof connector for outdoor electrical and industrial automation systems.",
    img:"images_pro/blue_waterproof_connector.jpg",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for Industrial Power Cable
  },
  {
    id:12,
    name:"Heavy Duty Industrial Rectangular Connector (Han Type Connector)",
    desc:"Rugged rectangular connector for heavy-duty industrial power and control applications.",
    img:"images_pro/heavyduty.webp",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for PCB Assembly Board
  },
  {
    id:13,
    name:"WAGO Lever Wire Connector",
    desc:"Tool-free wire connector for fast, secure, and reliable electrical wiring connections",
    img:"images_pro/WAGO_221.jpg",
    category:"connectors",
    popular:"true"

    // ↑ Change this URL to swap the image for Circuit Breaker Module
  },
  {
    id:14,
    name:"Military Grade Circular Connector (MIL Spec Connector)",
    desc:"High-performance circular connector built for military, aerospace, and industrial environments.",
    img:"images_pro/military_grade.avif",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:15,
    name:"Raspberry Pi Zero Wraspberry Pi",
    desc:"Compact single-board computer with built-in Wi-Fi and Bluetooth for IoT projects.",
    img:"images_pro/raspberry_pi_zero.jpg",
    category:"connectors",
    popular:"true"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },

  //-----capacitors
  {
    id:16,
    name:"Power Electronic Capacitors (PEC)",
    desc:"Power Electronic Capacitors (PEC) are specialized, high-performance components designed for heavy-duty DC-link and AC filtering applications in modern power systems.",
    img:"images_pro_cap/cap_1.jpg",
    category:"capacitors",
    popular:true
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:17,
    name:"High Voltage Power Capacitor Bank",
    desc:"Heavy-duty high-voltage capacitor bank for power distribution and industrial electrical systems. Provides reliable power factor correction and energy efficiency.",
    img:"images_pro_cap/cap_2.webp",
    category:"capacitors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:18,
    name:"SMD Aluminum Electrolytic Capacitor",
    desc:"Compact surface-mount aluminum electrolytic capacitor with low ESR and high reliability. Ideal for power supplies, automotive electronics, and industrial applications.",
    img:"images_pro_cap/cap_3.jpg",
    category:"capacitors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:19,
    name:"EPCOS Motor Run Capacitor",
    desc:"Premium polypropylene motor run capacitor designed for AC motors, pumps, fans, and compressors. Delivers stable performance and excellent insulation.",
    img:"images_pro_cap/cap_4.jpg",
    category:"s"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:20,
    name:"Cylindrical Aluminum Electrolytic Capacitor",
    desc:"Large-capacity aluminum electrolytic capacitor suitable for industrial power electronics, UPS systems, and inverter applications.",
    img:"images_pro_cap/cap_5.jpg",
    category:"capacitors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:21,
    name:"Box Type Film Capacitor",
    desc:"High-quality metallized film capacitor featuring low power loss, self-healing properties, and excellent long-term reliability for industrial circuits.",
    img:"images_pro_cap/cap_6.png",
    category:"capacitors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  


  //-----fuses
 
  {
    id:22,
    name:"Bottle Fuse",
    desc:"A bottle fuse is a type of screw-in electrical safety device designed to protect circuits and equipment from overcurrents and short circuits",
    img:"images_pro_fuses/fu_2.jpg", 
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:23,
    name:"Ultra Rapid semiconductor protection fuse.",
    desc:"These industrial fuses are highly specialized and engineered to provide exceptionally fast response times to short circuits.",
    img:"images_pro_fuses/fu_3.jpg",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:2436,
    name:"Cylindrical Midget Fuses",
    desc:"These fuses are a robust solution for protecting electrical systems in demanding industrial and commercial applications.",
    img:"images_pro_fuses/fu_4.webp",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
 
  {
    id:25,
    name:"High-speed (or semiconductor) Fuses",
    desc:"S circuit protection devices designed to respond extremely fast to overcurrents, often in less than 10 ms.",
    img:"images_pro_fuses/fu_6.jpeg",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:26,
    name:"Automotive Strip Fuse",
    desc:"An automotive strip fuse (sometimes called a fusible link or strip-type fuse) is a high-amperage protective device.Automotive blade fuse engineered to protect vehicle electrical systems from overloads and short circuits.",
    img:"images_pro_fuses/fu_7.webp",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:27,
    name:"HIGH VOLTAGE FUSES -EXPULSION FUSES-SHIP FUSES",
    desc:"High-voltage fuses are used in power systems up to 115 kV AC to protect instrument transformers and small power transformers. They are a cost-effective alternative to circuit breakers, which are much more expensive at high voltages.",
    img:"images_pro_fuses/fu_8.webp",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:28,
    name:"Miniature fuses",
    desc:"Miniature fuses are compact electrical safety components designed to protect low-voltage, sensitive electronic circuits and automotive systems from overcurrent and short circuits.",
    img:"images_pro_fuses/fu_9.png",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:29,
    name:"NH  fuses - ceramic, industrial fuses",
    desc:"Heavy-duty NH blade fuse for industrial power distribution, ensuring safe and dependable circuit protection.",
    img:"images_pro_fuses/fu_12.jpeg",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:30,
    name:"Fuse Holders",
    desc:"Fuse Holders are devices that securely hold fuses, provide electrical connections, and allow easy fuse replacement. They protect electrical circuits and are available in different types for various mounting methods and applications.",
    img:"images_pro_fuses/fu_14.jpeg",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:31,
    name:"Electronic Fast Blow Fuse",
    desc:"Fast-blow electronic fuse designed to quickly interrupt excessive current, protecting sensitive electronic components from damage.",
    img:"images_pro_fuses/fu_15.avif",
    category:"fuses"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },


  //-----power
  
  {
    id:32,
    name:"Variable Power Supplies ",
    desc:"Variable power supplies allow users to manually adjust the output voltage and current to match the specific needs of different electronic circuits, making them essential tools for testing, prototyping, and repairs.",
    img:"images_pro_power/po_1.jpg",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:33,
    name:"Portable Site Transformers",
    desc:"A portable site transformer is a rugged piece of electrical safety equipment primarily used on construction sites, workshops, and outdoor environments.",
    img:"images_pro_power/po_2.webp",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:34,
    name:"Open Frame Industrial Switching Mode Power Supplies (SMPS)",
    desc:"SMPS are compact, high-efficiency power supplies that convert AC to stable DC power. They are designed for industrial equipment and are ideal for applications requiring reliable and space-saving power solutions.",
    img:"images_pro_power/po_3.jpg",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:35,
    name:"IP-rated Industrial Switched-Mode Power Supplies (SMPS)",
    desc:" These SMPS are specialized LED drivers designed to safely convert AC mains power into stable low-voltage DC power (typically 12V, 24V, or 48V) within harsh, dusty, or wet environments.",
    img:"images_pro_power/po_5.webp",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:36,
    name:"DIN Rail Power Supply",
    desc:"A DIN rail power supply takes incoming electrical power and converts it into a stable, lower-voltage DC output. They are designed to easily snap onto a standard metal DIN rail inside electrical enclosures, saving space and making insatallation very easy.",
    img:"images_pro_power/po_6.webp",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:37,
    name:"PCB-mounted power supplies",
    desc:"PCB-mounted power supplies are compact, self-contained electronic modules that solder directly onto a printed circuit board.",
    img:"images_pro_power/po_7.webp",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:38,
    name:"Toroidal Transformers",
    desc:"A toroidal transformer is a special type of electrical transformer characterized by its donut-like shape.",
    img:"images_pro_power/po_8.webp",
    category:"power-supply"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  


//-----relays

  {
    id:39,
    name:"Automotive relay ",
    desc:"An automotive relay is an electronically operated switch used in vehicles to control a high-current circuit with a low-current signal.",
    img:"images_pro_relay/re_1.jpg",
    category:"relays",
    popular:true
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:40,
    name:"Electromagnetic Power Relay",
    desc:"High-performance electromagnetic relay designed for reliable switching in industrial control and automation systems.",
    img:"images_pro_relay/re_3.webp",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:41,
    name:"Relay module",
    desc:"Allows a low-power microcontroller (like an Arduino, Raspberry Pi, or ESP32) to safely control high-power electrical appliances.",
    img:"images_pro_relay/re_4.png",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:42,
    name:"Industrial Relay Module",
    desc:"An industrial relay module is a pre-assembled, electronically operated switch used in automation to control high-power electrical loads with low-power signals.",
    img:"images_pro_relay/re_5.jpg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  
  {
    id:43,
    name:"DIN Rail Interface Relay",
    desc:"Compact DIN rail interface relay ideal for PLC systems, industrial automation, and electrical control cabinets.",
    img:"images_pro_relay/re_7.jpg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:44,
    name:"Latching Relay",
    desc:"Energy-efficient latching relay that maintains its switching position without continuous power consumption.",
    img:"images_pro_relay/re_8.png",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:45,
    name:"High Current Power Relay",
    desc:"Heavy-duty relay designed for switching high-current electrical loads in industrial and commercial applications.",
    img:"images_pro_relay/re_9.jpg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
 
  {
    id:46,
    name:"Overload Protection Relay",
    desc:"Protective relay designed to safeguard motors and electrical equipment against overload and abnormal operating conditions.",
    img:"images_pro_relay/re_11.jpg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:47,
    name:"Thermal Overload Relay",
    desc:"Thermal overload relay engineered to protect electric motors from overheating and excessive current.",
    img:"images_pro_relay/re_12.jpeg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:48,
    name:"Phase Monitoring Relay",
    desc:"Phase monitoring relay that detects phase failure, sequence errors, and voltage imbalance in three-phase systems.",
    img:"images_pro_relay/re_13.jpeg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:49,
    name:"Voltage Monitoring Relay",
    desc:"Intelligent voltage monitoring relay providing overvoltage and undervoltage protection for electrical installations.",
    img:"images_pro_relay/re_14.jpeg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:50,
    name:"Solid-State Relay",
    desc:"An electronic switching device that switches on or off when an external voltage is applied across its control terminals.",
    img:"images_pro_relay/re_16.jpg",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  
  {
    id:51,
    name:"Solid State Photo-Coupled Relay",
    desc:"A Solid-State Photo-Coupled Relay (commonly called an optocoupled SSR or photorelay) is an electronic switching device that uses light rather than mechanical movement to open or close an electrical circuit.",
    img:"images_pro_relay/re_18.webp",
    category:"relays"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },


  //-----sensors


  {
    id:52,
    name:"Photoelectric, Through-beam Pair Sensor",
    desc:"Photoelectric Through-Beam Pair Sensor is a sensor consisting of a separate transmitter and receiver. It detects objects by sensing when the light beam between them is interrupted, providing long-range and highly accurate detection.",
    img:"images_pro_sensors/sen_6.png",
    category:"sensors",
    popular:true
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:53,
    name:"Multifunctional Solid-state Analog Timer Relay",
    desc:"Multifunctional Solid-State Analog Timer Relay is an electronic timing device that provides multiple timing functions with high accuracy and reliability. It is used for controlling delays and automation processes without moving mechanical parts.",
    img:"images_pro_sensors/sen_2.jpg",
    category:"sensors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  {
    id:54,
    name:"Inductive Proximity Sensor",
    desc:"Non-contact inductive proximity sensor designed for accurate detection of metallic objects in industrial automation and machinery.",
    img:"images_pro_sensors/sen_3.jpg",
    category:"sensors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
 
  {
    id:55,
    name:"Multifunction Digital Timer",
    desc:"Programmable digital timer with multiple timing modes for industrial automation, control panels, and machinery.",
    img:"images_pro_sensors/sen_7.jpeg",
    category:"sensors"
    // ↑ Change this URL to swap the image for Connector & Terminal Kit
  },
  

];

const slides = [
  {img:"semiconductor_carousel.jpg", eyebrow:"Semiconductors", title:"Built On Precision Silicon", text:"ICs and microcontrollers sourced from trusted manufacturers for demanding designs."},
  {img:"embedded and iot.jpg", eyebrow:"Embedded & IoT", title:"Connected Systems, Done Right", text:"Embedded boards and IoT modules built for reliable, always-on performance."},
  {img:"wres_cables_fuses.jpg", eyebrow:"Wires, Cables & Fuses", title:"The Backbone Of Every Circuit", text:"Quality wiring, cabling and protection components, stocked and ready to ship."}
];

const producerCategories = [
  {
    category:"Semiconductors",
    items:[
      { name:"Semikron", img:"images_logo/sc_advantech.png" },
      { name:"Fuji Electric", img:"images_logo/sc_fuji-electric.png" },
      { name:"Infineon", img:"images_logo/sc_infineon.png" },
      { name:"IXYS", img:"images_logo/sc_ixys.webp" },
      { name:"Microchip", img:"images_logo/sc_microchip.png" },
      { name:"onsemi", img:"images_logo/sc_onsemi.png" },
    ]
  },
  {
    category:"Fuses",
    items:[
      { name:"Eaton-Bussmann", img:"images_logo/fuses_bussmann.png" },
      { name:"Siba", img:"images_logo/fuses_siba.jpeg" },
      { name:"Eska", img:"images_logo/fuses_eska.png" },
      { name:"Schurter", img:"images_logo/fuses_schurter.png" },
      { name:"Eska", img:"images_logo/fuses_df-electric.webp" },
      { name:"df-electric", img:"images_logo/fuses_df-electric.webp" },
      { name:"Eaton-Electric", img:"images_logo/fuses_eaton_electric.png" },
      { name:"Eti", img:"images_logo/fuses_Eti.png" },
      { name:"Italweber", img:"images_logo/fuses_italweber.jpg" },
      { name:"Lawson", img:"images_logo/fuses_lawson.jpeg" },
      { name:"Legrand", img:"images_logo/fuses_legrand.jpeg" },
      { name:"Littel", img:"images_logo/fuses_littel.png" },
      { name:"Logilink", img:"images_logo/fuses_logilink.png" },
      { name:"Lovato", img:"images_logo/fuses_lovato_rel.jpeg" },
      { name:"Mersen", img:"images_logo/fuses_mersen.png" },
      { name:"Mta", img:"images_logo/fuses_mta.png" },      
    ]
  },

  {
    category:"Sensors",
    items:[
      { name:"BEI", img:"images_logo/sensor_autonics.png" },
      { name:"Baumer", img:"images_logo/sensor_baumer.png" },
      { name:"Autonics", img:"images_logo/sensor_autonics.png" },
      { name:"Beckhoff", img:"images_logo/sensor_beckhoff.jpg" },
      { name:"Balluff", img:"images_logo/sensor_Balluff.png" },
      { name:"Lumel", img:"images_logo/sensor_lumel.png" },
      { name:"Carlo Gavazzi", img:"images_logo/carlo_power.png" },
      { name:"Danfoss", img:"images_logo/danfoss.jpeg" },
      { name:"Omron", img:"images_logo/omron.png" },
      { name:"ifm", img:"images_logo/sensor_ifm.png" },
      { name:"Honeywell", img:"images_logo/honeywell.jpeg" },
      { name:"Panasonic", img:"images_logo/sensor_panasonic.png" },
      { name:"Pepperl", img:"images_logo/sensor_pepperl.png" }
    ]
  },
  {
    category:"Power Supplies",
    items:[
      { name:"Mean Well", img:"images_logo/Mean-Well_power.jpg" },
      { name:"TDK-Lambda", img:"images_logo/tdk-lambda_power.png" },
      { name:"carlo", img:"images_logo/carlo_power.png" },
      { name:"XP Power", img:"images_logo/XP+Power_power.jpg" },
      { name:"Weidmuller", img:"images_logo/weidmuller_power.png" }
    ]
  },
  {
    category:"Relays",
    items:[
      { name:"Omron", img:"images_logo/omron.png" },
      { name:"Finder", img:"images_logo/finder_rel.png" },
      { name:"idec", img:"images_logo/idec_rel.png" },
      { name:"murr", img:"images_logo/murr_rel.png" },
      { name:"Bosch", img:"images_logo/bosch_rel.png" },
      { name:"sensata", img:"images_logo/sensata_rel.png" },
      { name:"schrak", img:"images_logo/schrak_rel.png" },
      { name:"Lovato", img:"images_logo/fuses_lovato_rel.jpeg" },
      { name:"Panasonic", img:"images_logo/Color-Panasonic-Logo.jpg" },
      { name:"TE Connectivity", img:"images_logo/TE-logo-2.webp" },
      { name:"Crydom (SSR)", img:"images_logo/crydom.png" }
    ]
  },
  {
    category:"Power Capacitors",
    items:[
      { name:"Vishay", img:"images_logo/Vishay_Logo.png" },
      { name:"Nichicon", img:"images_logo/nichicon.png" },
      { name:"SR", img:"images_logo/srpassives_cap.jpg" },
       { name:"Okaya", img:"images_logo/okaya_cap.png" },
      { name:"Kendil", img:"images_logo/kendeil.png" },
      { name:"Ducati Energia", img:"images_logo/ducati.png" },
      { name:"Kemet", img:"images_logo/Kemet-New.jpg" },
      { name:"TDK", img:"images_logo/tdk.jpeg" }
    ]
  },

];

