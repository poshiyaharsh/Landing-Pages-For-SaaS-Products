import { CoffeeItem } from '../types/coffee';

export const COFFEE_CATALOG: CoffeeItem[] = [
  // 1. Featured Selections
  {
    id: 'sig-latte',
    name: 'Signature Latte',
    category: 'milk',
    price: 6.50,
    badge: 'Signature',
    temp: 'hot',
    image: '/assets/images/signature-latte.jpg',
    desc: 'Velvety microfoam over freshly pulled single-origin espresso with delicate floral and caramel undertones.',
    ingredients: 'Double shot espresso, organic steamed milk, light microfoam',
    dietary: ['Signature', 'Organic'],
    roast: 'Ethiopia Aramo'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'milk',
    price: 7.00,
    badge: 'Popular',
    temp: 'iced',
    image: '/assets/images/caramel-macchiato.jpg',
    desc: 'Layers of chilled whole milk, Madagascar vanilla, float of espresso and house-crafted salted amber caramel.',
    ingredients: 'Espresso, whole milk, Madagascar bourbon vanilla, artisanal caramel drizzle',
    dietary: ['House Favorite'],
    roast: 'House Blend'
  },
  {
    id: 'spanish-latte',
    name: 'Spanish Latte',
    category: 'milk',
    price: 6.75,
    badge: 'House Special',
    temp: 'hot',
    image: '/assets/images/spanish-latte.jpg',
    desc: 'Bold espresso folded with velvety textured milk over sweet condensed milk, finished with Ceylon cinnamon dust.',
    ingredients: 'Espresso, sweetened condensed milk, textured milk, cinnamon bark',
    dietary: ['Vegetarian'],
    roast: 'Colombia Huila'
  },
  {
    id: 'cold-brew',
    name: 'Single-Origin Cold Brew',
    category: 'cold',
    price: 6.00,
    badge: '18h Steep',
    temp: 'iced',
    image: '/assets/images/cold-brew.jpg',
    desc: 'Slow-steeped for 18 hours in cold filtered water. Ultra-smooth with notes of ripe stone fruit and dark chocolate.',
    ingredients: 'Ethiopian Yirgacheffe, crystal clear sphere ice',
    dietary: ['Vegan', 'Gluten-Free', 'Zero Sugar'],
    roast: 'Light Roast'
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    category: 'milk',
    price: 5.75,
    badge: 'Traditional',
    temp: 'hot',
    image: '/assets/images/cappuccino.jpg',
    desc: 'The timeless classic. Equal thirds of intense espresso, silky steamed milk, and a cloud of glossy foam dusted with Valrhona cocoa.',
    ingredients: 'Double espresso, thick microfoam, Valrhona 70% cocoa',
    dietary: ['Organic'],
    roast: 'Brazil Cerrado'
  },
  {
    id: 'matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'tea',
    price: 7.25,
    badge: 'Uji First-Harvest',
    temp: 'hot',
    image: '/assets/images/matcha-latte.jpg',
    desc: 'Single-estate ceremonial green tea stone-ground in Kyoto, whisked by hand and paired with creamy oat milk.',
    ingredients: 'Organic Uji Matcha, Oatly Barista oat milk, blossom agave',
    dietary: ['Vegan', 'Antioxidant-Rich'],
    roast: 'Kyoto First-Harvest'
  },

  // 2. Pure Espresso
  {
    id: 'double-espresso',
    name: 'Reserve Double Espresso',
    category: 'espresso',
    price: 4.50,
    badge: 'Single Origin',
    temp: 'hot',
    image: '/assets/images/gallery-espresso.jpg',
    desc: 'Extracted with 9-bar precision. Thick golden crema with bright bergamot aroma and long cocoa finish.',
    ingredients: 'Pure 18g dose single-origin espresso',
    dietary: ['Vegan', 'Zero Sugar'],
    roast: 'Guatemala Huehuetenango'
  },
  {
    id: 'cortado',
    name: 'Aurelia Cortado',
    category: 'espresso',
    price: 5.25,
    badge: '1:1 Ratio',
    temp: 'hot',
    image: '/assets/images/gallery-espresso.jpg',
    desc: 'Double shot of our seasonal espresso cut with an equal volume of silky steamed milk in a Spanish duralex glass.',
    ingredients: 'Equal parts espresso and warm microfoam',
    dietary: ['Minimalist'],
    roast: 'Ethiopian Aramo'
  },
  {
    id: 'americano',
    name: 'Long Black Americano',
    category: 'espresso',
    price: 4.75,
    temp: 'hot',
    image: '/assets/images/gallery-espresso.jpg',
    desc: 'Double espresso pulled gently over hot calibrated mineral water, preserving the dense golden crema ring.',
    ingredients: 'Double shot espresso, 93°C calibrated water',
    dietary: ['Vegan'],
    roast: 'Medium Roast'
  },

  // 3. Cold Drinks
  {
    id: 'yuzu-tonic',
    name: 'Yuzu Espresso Tonic',
    category: 'cold',
    price: 6.85,
    badge: 'Refreshing',
    temp: 'iced',
    image: '/assets/images/cold-brew.jpg',
    desc: 'Fever-Tree Mediterranean botanical tonic over hand-cut ice, espresso float and freshly pressed Japanese yuzu oil.',
    ingredients: 'Botanical tonic, chilled espresso, yuzu peel, fresh rosemary',
    dietary: ['Vegan', 'Sparkling'],
    roast: 'Light Roast'
  },
  {
    id: 'iced-flat-white',
    name: 'Iced Velvet Flat White',
    category: 'cold',
    price: 6.25,
    badge: 'Smooth',
    temp: 'iced',
    image: '/assets/images/signature-latte.jpg',
    desc: 'Ristretto espresso poured slowly over cold organic whole milk and compact ice, keeping body dense and sweet.',
    ingredients: 'Double ristretto shot, cold textured milk',
    dietary: ['Organic'],
    roast: 'Medium Roast'
  },

  // 4. Botanical Teas
  {
    id: 'hojicha-latte',
    name: 'Kyoto Hojicha Latte',
    category: 'tea',
    price: 7.00,
    badge: 'Low Caffeine',
    temp: 'hot',
    image: '/assets/images/matcha-latte.jpg',
    desc: 'Roasted Japanese green tea with comforting nutty, smoky wood notes and natural sweet caramel nuance.',
    ingredients: 'Roasted green tea powder, oat milk, touch of raw demerara',
    dietary: ['Vegan', 'Low Caffeine'],
    roast: 'Kyoto Roasted'
  },
  {
    id: 'london-fog',
    name: 'Lavender London Fog',
    category: 'tea',
    price: 6.50,
    badge: 'Floral',
    temp: 'hot',
    image: '/assets/images/matcha-latte.jpg',
    desc: 'Bergamot-scented organic black tea steeped in steamed vanilla oat milk with subtle Provençal lavender blossom aroma.',
    ingredients: 'Earl Grey tea, French lavender, vanilla syrup, oat foam',
    dietary: ['Vegan', 'Aromatic'],
    roast: 'Nilgiri Single Estate'
  },

  // 5. Bakery
  {
    id: 'almond-croissant',
    name: 'Artisan Almond Croissant',
    category: 'bakery',
    price: 5.50,
    badge: 'Fresh Daily',
    temp: 'hot',
    image: '/assets/images/moment-morning.jpg',
    desc: 'Twice-baked butter croissant filled with fragrant frangipane almond cream and crowned with toasted flaked almonds.',
    ingredients: 'Normandy butter, French flour, frangipane cream, sliced almonds',
    dietary: ['Vegetarian'],
    roast: 'Baked at 7:00 AM'
  },
  {
    id: 'cardamom-bun',
    name: 'Nordic Cardamom Bun',
    category: 'bakery',
    price: 5.25,
    badge: 'House Baked',
    temp: 'hot',
    image: '/assets/images/moment-morning.jpg',
    desc: 'Traditional Scandinavian braided brioche enriched with crushed cardamom seeds and pearl sugar crunch.',
    ingredients: 'Organic unbleached flour, crushed cardamom, butter, pearl sugar',
    dietary: ['Vegetarian'],
    roast: 'Fresh Batch'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Valrhona Pain au Chocolat',
    category: 'bakery',
    price: 5.40,
    badge: 'French Butter',
    temp: 'hot',
    image: '/assets/images/moment-morning.jpg',
    desc: 'Flaky 72-layer laminated pastry wrapped around two batons of intense 64% Valrhona dark chocolate.',
    ingredients: 'Laminated dough, pure butter, Valrhona dark chocolate',
    dietary: ['Vegetarian'],
    roast: 'Baked Daily'
  },

  // 6. Desserts
  {
    id: 'espresso-tiramisu',
    name: 'Aurelia Classic Tiramisu',
    category: 'dessert',
    price: 8.50,
    badge: 'House Favorite',
    temp: 'iced',
    image: '/assets/images/moment-evening.jpg',
    desc: 'Handmade ladyfingers soaked in our Ethiopian Aramo espresso, layered with whipped Italian mascarpone and dark cocoa.',
    ingredients: 'Mascarpone, savoiardi ladyfingers, espresso, Marsala, cocoa',
    dietary: ['Vegetarian'],
    roast: 'Espresso Soaked'
  },
  {
    id: 'burnt-cheesecake',
    name: 'Basque Burnt Cheesecake',
    category: 'dessert',
    price: 7.75,
    badge: 'Creamy Center',
    temp: 'iced',
    image: '/assets/images/moment-evening.jpg',
    desc: 'Caramelized deeply on the exterior while remaining lush, molten and silky at the center. Served with flaky Maldon salt.',
    ingredients: 'Cream cheese, heavy cream, organic vanilla, sea salt',
    dietary: ['Gluten-Free', 'Vegetarian'],
    roast: 'House Recipe'
  },
  {
    id: 'affogato',
    name: 'Bourbon Vanilla Affogato',
    category: 'dessert',
    price: 6.95,
    badge: 'Signature',
    temp: 'both',
    image: '/assets/images/moment-evening.jpg',
    desc: 'Two scoops of handcrafted Madagascar vanilla bean gelato drenched with a hot freshly pulled espresso double shot.',
    ingredients: 'Vanilla bean gelato, double espresso, chocolate crisp',
    dietary: ['Vegetarian'],
    roast: 'Dark Roast'
  }
];

export const SIGNATURE_MOMENTS = [
  {
    id: 'morning',
    time: '08:00 — 12:00',
    title: 'THE MORNING',
    desc: 'Fresh coffee and warm pastries. Bathed in soft morning sun, start your day with unhurried calm and restorative clarity.',
    image: '/assets/images/moment-morning.jpg'
  },
  {
    id: 'afternoon',
    time: '12:00 — 17:00',
    title: 'THE AFTERNOON',
    desc: 'Slow conversations and handcrafted drinks. An unhurried sanctuary to read, journal, connect, and pause between thoughts.',
    image: '/assets/images/moment-afternoon.jpg'
  },
  {
    id: 'evening',
    time: '17:00 — CLOSE',
    title: 'THE EVENING',
    desc: 'Soft lighting, desserts and relaxed moments. Unwind with affogatos, espresso tonics, candlelight, and quiet reflections.',
    image: '/assets/images/moment-evening.jpg'
  }
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'SOURCING',
    desc: 'We source only high-altitude Arabica cherries from smallholders who harvest exclusively by hand at peak ripeness in volcanic soils.'
  },
  {
    step: '02',
    title: 'ROASTING',
    desc: 'Gentle convective roasting that caramelizes natural sugars without scorching delicate organic origin notes in our 12kg Probat drum.'
  },
  {
    step: '03',
    title: 'BREWING',
    desc: 'Tailored recipes for each origin: exact brew ratios, TDS calibration, and remineralized water heated to the precise degree.'
  },
  {
    step: '04',
    title: 'SERVING',
    desc: 'Poured in handmade speckled ceramics crafted by local potters to bring tactile warmth, tactile weight, and beauty to every sip.'
  }
];

export const GALLERY_IMAGES = [
  { image: '/assets/images/gallery-espresso.jpg', likes: '1,842', alt: 'Golden espresso extraction from bottomless portafilter' },
  { image: '/assets/images/moment-morning.jpg', likes: '2,410', alt: 'Artisan flaky croissants and coffee in morning sunshine' },
  { image: '/assets/images/experience-ritual.jpg', likes: '1,289', alt: 'Barista pouring hot water into Chemex with steam' },
  { image: '/assets/images/moment-afternoon.jpg', likes: '3,120', alt: 'People laughing and enjoying iced coffee in cafe' },
  { image: '/assets/images/signature-latte.jpg', likes: '1,995', alt: 'Swan latte art in speckled ceramic cup on walnut coaster' },
  { image: '/assets/images/moment-evening.jpg', likes: '2,780', alt: 'Affogato and candle lighting in relaxed evening cafe atmosphere' }
];
