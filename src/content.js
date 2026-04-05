/* ═══════════════════════════════════════════════════════════
   SITE CONTENT — ✏️ EDIT THIS FILE FOR EACH CLIENT
   
   All restaurant-specific info lives here.
   Change this file + swap images in /public/images/ and
   the entire site updates. No need to touch components.
   ═══════════════════════════════════════════════════════════ */

const siteContent = {

  // ─── RESTAURANT INFO ───
  name: "Saigon Kitchen",          // Used in nav, footer, title
  nameAccent: "Kitchen",           // The word that gets the gold italic treatment
  tagline: "12-hour simmered broths. Fresh herbs. Handmade noodles. A taste of Vietnam in every bowl.",
  cuisine: "Authentic Vietnamese",
  location: "Roseville, CA",
  established: "2026",

  // ─── CONTACT ───
  address: {
    street: "1234 Roseville Rd.",
    suite: "",
    city: "Roseville, CA 95747",
  },
  phone: "(916) 832-0195",
  email: "hello@saigonkitchen.com",

  // ─── HOURS ───
  hours: [
    "Monday – Thursday: 10am – 9pm",
    "Friday – Saturday: 10am – 10pm",
    "Sunday: 10am – 8pm",
  ],

  // ─── ABOUT ───
  aboutHeading: "Slow-simmered with",
  aboutAccent: "love & tradition",
  aboutText: [
    "Our phở starts before sunrise — beef bones, charred ginger, and whole spices go into the pot at 4 a.m. By the time you sit down, each bowl holds 12 hours of patient craft.",
    "Every herb is hand-picked. Every chili is fresh-cut. This is how our family has cooked for three generations — and how we cook for yours.",
  ],

  // ─── IMAGES ───
  // For production: put images in /public/images/ and reference as "/images/hero.jpg"
  // For now using external URLs as placeholders
  images: {
    hero: "https://as2.ftcdn.net/jpg/04/39/56/23/1000_F_439562347_8UsuF9ByzTbCBabsrUCahbVzqm9GPHDN.jpg",
    about1: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
    about2: "ttps://as2.ftcdn.net/jpg/04/39/56/23/1000_F_439562347_8UsuF9ByzTbCBabsrUCahbVzqm9GPHDN.jpg",
    about3: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    dish1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pho-Beef-Noodles-2008.jpg/1280px-Pho-Beef-Noodles-2008.jpg",
    dish2: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    dish3: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
  },

  // ─── SIGNATURE DISHES (shown as photo cards) ───
  signatureDishes: [
    { image: "dish1", name: "Phở Đặc Biệt", desc: "Our signature combination pho — the full experience" },
    { image: "dish2", name: "12-Hour Bone Broth", desc: "Simmered low and slow with charred ginger, star anise & cinnamon" },
    { image: "dish3", name: "Bún Bò Huế", desc: "Spicy, bold, aromatic — the beloved noodle soup of central Vietnam" },
  ],

  // ─── MENU ───
  menuCategories: [
    { id: "pho", label: "Phở" },
    { id: "appetizers", label: "Appetizers" },
    { id: "bowls", label: "Noodles & Rice" },
    { id: "drinks", label: "Drinks" },
  ],

  menuItems: {
    pho: [
      { name: "Phở Tái", desc: "Rare sliced beef, rice noodles, 12-hour bone broth", price: "16", popular: true },
      { name: "Phở Tái Nạm", desc: "Rare beef & well-done flank in aromatic broth", price: "17" },
      { name: "Phở Gà", desc: "Free-range chicken, fresh herbs, bean sprouts", price: "15" },
      { name: "Phở Bò Viên", desc: "House-made beef meatballs, star anise broth", price: "15" },
      { name: "Phở Đặc Biệt", desc: "The works — rare beef, flank, tendon, tripe, meatball", price: "19", popular: true },
      { name: "Phở Chay", desc: "Vegetable broth, tofu, mushrooms, bok choy", price: "14" },
    ],
    appetizers: [
      { name: "Gỏi Cuốn", desc: "Fresh spring rolls — shrimp, pork, vermicelli, herbs (2 pcs)", price: "8", popular: true },
      { name: "Chả Giò", desc: "Crispy imperial rolls, nuoc cham dipping sauce (4 pcs)", price: "9" },
      { name: "Bánh Mì Thịt", desc: "Grilled pork, pâté, pickled daikon, cilantro, jalapeño", price: "12" },
      { name: "Cánh Gà Chiên", desc: "Crispy fish-sauce wings, lime, chili garlic", price: "13" },
    ],
    bowls: [
      { name: "Bún Bò Huế", desc: "Spicy lemongrass beef noodle soup, pork knuckle", price: "17", popular: true },
      { name: "Bún Thịt Nướng", desc: "Grilled pork over vermicelli, egg roll, herbs, nuoc cham", price: "16" },
      { name: "Cơm Tấm", desc: "Broken rice, grilled pork chop, egg cake, pickled vegetables", price: "15" },
      { name: "Bún Chả", desc: "Hanoi-style grilled pork patties, vermicelli, fresh herbs", price: "16" },
    ],
    drinks: [
      { name: "Cà Phê Sữa Đá", desc: "Vietnamese iced coffee, condensed milk", price: "6", popular: true },
      { name: "Trà Đá Chanh", desc: "Iced lime tea, fresh mint", price: "4" },
      { name: "Sinh Tố Bơ", desc: "Avocado smoothie, condensed milk", price: "7" },
      { name: "Nước Chanh Muối", desc: "Salted preserved lime soda", price: "5" },
    ],
  },

  // ─── ATMOSPHERE SECTION ───
  atmosphereHeading: "Come as you are.",
  atmosphereAccent: "Stay for the broth.",
  atmosphereTags: "Casual dining · Family friendly · Takeout available",

  // ─── ORDER BUTTONS (set to null to hide) ───
  orderPickupUrl: "#",   // Replace with Toast/Square/DoorDash link
  orderDeliveryUrl: "#", // Replace with delivery link
};

export default siteContent;
