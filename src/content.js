const siteContent = {
  name: "Ember & Bloom",
  nameAccent: "Bloom",
  tagline: "Craft coffee & scratch-baked pastries in the heart of Roseville.",
  cuisine: "Specialty Coffee & Bakery",
  location: "Roseville, CA",
  established: "2024",

  address: {
    street: "1240 Galleria Blvd",
    suite: "Suite 120",
    city: "Roseville, CA 95678",
  },
  phone: "(916) 555-0142",
  email: "hello@emberandbloom.com",

  hours: [
    "Monday – Friday: 6am – 6pm",
    "Saturday: 7am – 5pm",
    "Sunday: 7am – 3pm",
  ],

  aboutHeading: "Roasted with care,",
  aboutAccent: "baked from scratch",
  aboutText: [
    "We source single-origin beans from small farms in Colombia, Ethiopia, and Guatemala — roasted in small batches right here in Roseville. Every shot is dialed in fresh each morning.",
    "Our pastry case is filled before sunrise: butter croissants, fruit danishes, and our famous cardamom morning bun. Everything made by hand, nothing from a mix.",
  ],

  images: {
    hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
    about1: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    about2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    about3: "https://images.unsplash.com/photo-1486427944544-d2c246c4df4e?w=800&q=80",
    interior: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
  },

  featuredDrinks: [
    { name: "Lavender Oat Latte", price: "6.50", desc: "House-pulled espresso, oat milk, French lavender syrup", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80" },
    { name: "Honey Cinnamon Cortado", price: "5.50", desc: "Double shot, steamed whole milk, raw honey, Ceylon cinnamon", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80" },
    { name: "Rose Cold Brew", price: "6.00", desc: "24-hour cold brew, rose water, cardamom, cream float", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
    { name: "Matcha & Vanilla", price: "6.50", desc: "Ceremonial-grade matcha, vanilla bean, oat milk", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80" },
    { name: "Espresso Tonic", price: "5.50", desc: "Double espresso over tonic water, fresh citrus peel", image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80" },
    { name: "Maple Butter Latte", price: "6.50", desc: "Espresso, brown butter syrup, Vermont maple, whole milk", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80" },
  ],

  menuCategories: [
    { id: "espresso", label: "Espresso" },
    { id: "brewed", label: "Brewed & Specialty" },
    { id: "pastries", label: "Pastries" },
    { id: "food", label: "Kitchen" },
  ],

  menuItems: {
    espresso: [
      { name: "Espresso", desc: "Single or double shot, house blend", price: "3.50 / 4.50", popular: false },
      { name: "Cortado", desc: "Double shot, equal parts steamed milk", price: "5.00", popular: true },
      { name: "Flat White", desc: "Double ristretto, velvety microfoam", price: "5.50", popular: false },
      { name: "Cappuccino", desc: "Classic — espresso, steamed milk, thick foam", price: "5.50", popular: false },
      { name: "Latte", desc: "Espresso, steamed milk. Add flavor +$0.75", price: "5.50", popular: true },
      { name: "Americano", desc: "Double espresso, hot water", price: "4.50", popular: false },
      { name: "Mocha", desc: "Espresso, house chocolate, steamed milk, whip", price: "6.00", popular: false },
    ],
    brewed: [
      { name: "Drip Coffee", desc: "Rotating single-origin, brewed fresh hourly", price: "3.50", popular: false },
      { name: "Pour Over", desc: "Hand-poured V60, ask about today's beans", price: "5.50", popular: true },
      { name: "Cold Brew", desc: "24-hour steeped, smooth & strong", price: "5.50", popular: true },
      { name: "Chai Latte", desc: "House-spiced chai concentrate, steamed milk", price: "5.50", popular: false },
      { name: "Matcha Latte", desc: "Ceremonial-grade matcha, your choice of milk", price: "6.00", popular: false },
      { name: "Hot Chocolate", desc: "Belgian chocolate, steamed milk, marshmallow", price: "5.00", popular: false },
    ],
    pastries: [
      { name: "Butter Croissant", desc: "Laminated by hand, 72-hour ferment", price: "4.50", popular: true },
      { name: "Cardamom Morning Bun", desc: "Our signature — cardamom sugar, orange zest", price: "5.00", popular: true },
      { name: "Almond Croissant", desc: "Filled with frangipane, toasted almond flakes", price: "5.50", popular: false },
      { name: "Blueberry Scone", desc: "Buttermilk scone, fresh blueberries, lemon glaze", price: "4.50", popular: false },
      { name: "Pain au Chocolat", desc: "Dark chocolate batons, flaky pastry", price: "5.00", popular: false },
      { name: "Seasonal Danish", desc: "Ask about today's fruit danish", price: "5.00", popular: false },
    ],
    food: [
      { name: "Avocado Toast", desc: "Sourdough, smashed avo, chili flake, pickled onion, egg", price: "12.00", popular: true },
      { name: "Breakfast Sandwich", desc: "Fried egg, cheddar, bacon, herb aioli, brioche bun", price: "11.00", popular: true },
      { name: "Granola Bowl", desc: "House granola, Greek yogurt, seasonal fruit, honey", price: "9.00", popular: false },
      { name: "Caprese Panini", desc: "Fresh mozzarella, tomato, basil pesto, ciabatta", price: "12.00", popular: false },
      { name: "Quiche of the Day", desc: "Rotating — ask your barista", price: "8.00", popular: false },
    ],
  },

  atmosphereHeading: "Pull up a chair.",
  atmosphereAccent: "Stay a while.",
  atmosphereTags: "Free WiFi · Dog-friendly patio · Rotating local art",

  orderPickupUrl: "#",
  orderDeliveryUrl: "#",
};

export default siteContent;
