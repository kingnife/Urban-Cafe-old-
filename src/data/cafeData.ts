import { MenuItem, ReviewItem, NewsItem, ServiceItem, GalleryPhoto, EventItem } from '../types';

export const TODAY_SPECIAL = {
  id: 'special-caramel-pecan',
  name: 'Caramel Pecan Crunch Mocha & Brioche Cinnamon Twist',
  description: 'Rich dark espresso folded with steamed local dairy, Madagascar vanilla bean syrup, topped with handcrafted burnt caramel drizzle and toasted Georgia pecans. Paired with a warm, flaky house-baked brioche cinnamon twist.',
  price: '$5.75',
  originalPrice: '$7.50',
  badge: "TODAY'S CHEF SPECIAL",
  imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
  availableUntil: 'While Daily Batches Last'
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & ESPRESSO
  {
    id: 'c1',
    name: 'House Roast Drip Coffee',
    category: 'COFFEE & ESPRESSO',
    price: '$2.15',
    description: 'Our signature signature Colombian & Guatemalan medium roast blend. Roasted weekly in small batches for notes of cocoa and toasted almond.',
    popular: true
  },
  {
    id: 'c2',
    name: 'Classic Espresso',
    category: 'COFFEE & ESPRESSO',
    price: '$2.35',
    description: 'Double shot of rich, concentrated espresso with a thick golden crema. Served with a twist of lemon peel upon request.'
  },
  {
    id: 'c3',
    name: 'Caffe Americano',
    category: 'COFFEE & ESPRESSO',
    price: '$2.75',
    description: 'Fresh pulled espresso shots layered gently over steaming filtered hot water for a smooth, full-bodied cup.'
  },
  {
    id: 'c4',
    name: 'Traditional Cappuccino',
    category: 'COFFEE & ESPRESSO',
    price: '$3.45',
    description: 'Equal parts espresso, velvety steamed milk, and a dense pillow of micro-foam. Finished with cocoa powder or ground cinnamon.',
    popular: true
  },
  {
    id: 'c5',
    name: 'Caffe Latte',
    category: 'COFFEE & ESPRESSO',
    price: '$3.75',
    description: 'Smooth espresso blended with generous steamed milk and a subtle layer of foam. Available with vanilla, hazelnut, or sugar-free caramel.'
  },
  {
    id: 'c6',
    name: 'Dark Chocolate Caffe Mocha',
    category: 'COFFEE & ESPRESSO',
    price: '$4.15',
    description: 'Espresso mixed with premium Dutch cocoa powder, steamed milk, and crowned with real whipped cream and chocolate curls.',
    badge: "Guest Favorite"
  },
  {
    id: 'c7',
    name: 'Caramel Macchiato',
    category: 'COFFEE & ESPRESSO',
    price: '$4.25',
    description: 'Vanilla-infused steamed milk marked with bold espresso and finished with a buttery crosshatch caramel drizzle.'
  },

  // TEA
  {
    id: 't1',
    name: 'Earl Grey Reserve',
    category: 'TEA',
    price: '$2.65',
    description: 'Finest Ceylon whole black tea leaves scented with cold-pressed Italian bergamot oil.'
  },
  {
    id: 't2',
    name: 'English Breakfast Supreme',
    category: 'TEA',
    price: '$2.65',
    description: 'A brisk, robust blend of Assam and Kenyan teas. Excellent enjoyed black or paired with milk and honey.'
  },
  {
    id: 't3',
    name: 'Jasmine Green Blossom',
    category: 'TEA',
    price: '$2.85',
    description: 'Delicate spring-harvested green tea scented with freshly picked jasmine petals for an enchanting floral aroma.'
  },
  {
    id: 't4',
    name: 'Spiced Chai Tea Latte',
    category: 'TEA',
    price: '$3.85',
    description: 'Black tea infused with crushed cardamom, cinnamon bark, ginger, and cloves, steamed with milk and organic honey.',
    popular: true
  },
  {
    id: 't5',
    name: 'Chamomile Mint Herbal (Decaf)',
    category: 'TEA',
    price: '$2.65',
    description: 'Whole Egyptian chamomile blossoms combined with Pacific Northwest peppermint for a soothing, caffeine-free brew.'
  },

  // BREAKFAST
  {
    id: 'b1',
    name: 'Classic Breakfast Bagel Melt',
    category: 'BREAKFAST',
    price: '$5.45',
    description: 'Farm-fresh scrambled egg patty, aged Vermont cheddar, and thick-cut Applewood smoked bacon on a toasted everything bagel.',
    badge: 'Popular',
    popular: true
  },
  {
    id: 'b2',
    name: 'Smoked Ham & Swiss Croissant',
    category: 'BREAKFAST',
    price: '$5.95',
    description: 'Thinly sliced honey ham, melted Swiss Gruyère, and honey mustard aioli baked inside our flaky all-butter croissant.'
  },
  {
    id: 'b3',
    name: 'Grove Steel-Cut Oatmeal Bowl',
    category: 'BREAKFAST',
    price: '$4.25',
    description: 'Slow-cooked Irish oats served piping hot with brown sugar, toasted walnut pieces, and choice of fresh cream or steamed soy milk.'
  },
  {
    id: 'b4',
    name: 'Florentine Breakfast Quiche',
    category: 'BREAKFAST',
    price: '$6.25',
    description: 'Individual deep-dish quiche with sautéed baby spinach, wild mushrooms, and feta in a hand-crimped buttery crust. Served with fruit cup.'
  },
  {
    id: 'b5',
    name: 'Toasted Artisanal Sourdough & Jam',
    category: 'BREAKFAST',
    price: '$3.15',
    description: 'Two thick slices of country sourdough toasted golden brown, served with creamy Wisconsin butter and local Oregon berry preserves.'
  },

  // SANDWICHES
  {
    id: 's1',
    name: 'Smoked Turkey & Cranberry Club',
    category: 'SANDWICHES',
    price: '$7.45',
    description: 'Carved roasted turkey breast, crisp romaine lettuce, Swiss cheese, and spiced cranberry chutney on toasted multi-grain bread. Includes kettle chips.',
    popular: true
  },
  {
    id: 's2',
    name: 'Tuscan Grilled Chicken Panini',
    category: 'SANDWICHES',
    price: '$7.85',
    description: 'Herb-marinated chicken breast, sun-dried tomatoes, fresh provolone, and basil pesto pressed crispy on Italian ciabatta.'
  },
  {
    id: 's3',
    name: 'Classic Albacore Tuna Salad Melt',
    category: 'SANDWICHES',
    price: '$6.95',
    description: 'White albacore tuna with diced celery and herb mayonnaise, topped with melted sharp cheddar and ripe tomato slices on rye.'
  },
  {
    id: 's4',
    name: 'Market Garden Veggie Stack',
    category: 'SANDWICHES',
    price: '$6.75',
    description: 'Roasted red bell peppers, English cucumber, shredded carrots, avocado spread, and sprouts with lemon garlic hummus on harvest wheat.'
  },
  {
    id: 's5',
    name: 'Daily Soup & Half Sandwich Combo',
    category: 'SANDWICHES',
    price: '$7.95',
    description: 'A steaming crock of our house soup of the day accompanied by your choice of half deli sandwich and a crisp pickle spear.',
    badge: 'Lunch Special'
  },

  // PASTRIES
  {
    id: 'p1',
    name: 'Jumbo Mountain Blueberry Muffin',
    category: 'PASTRIES',
    price: '$2.45',
    description: 'Bursting with plump fresh blueberries and finished with a crunchy coarse demerara sugar crown.',
    popular: true
  },
  {
    id: 'p2',
    name: 'Traditional French Butter Croissant',
    category: 'PASTRIES',
    price: '$2.35',
    description: 'Folded with 82% European butter, baked golden crisp on the outside with hundreds of tender, airy inner layers.'
  },
  {
    id: 'p3',
    name: 'Cinnamon Swirl Coffee Cake Slice',
    category: 'PASTRIES',
    price: '$2.95',
    description: 'Old-fashioned sour cream bundt cake with an aromatic brown sugar and cinnamon ribbon, topped with crunchy walnut streusel.'
  },
  {
    id: 'p4',
    name: 'Lemon Poppyseed Scone',
    category: 'PASTRIES',
    price: '$2.65',
    description: 'Tender English style cream scone with real Meyer lemon zest, dotted with poppy seeds and brushed with lemon glaze.'
  },
  {
    id: 'p5',
    name: 'Apple Cinnamon Danish',
    category: 'PASTRIES',
    price: '$2.75',
    description: 'Puff pastry cradle filled with spiced Granny Smith compote and sweet cream cheese drizzle.'
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'New York Style Cheesecake Slice',
    category: 'DESSERTS',
    price: '$4.50',
    description: 'Velvety dense cream cheese cake baked on a buttery graham cracker crust, topped with fresh strawberry sauce.'
  },
  {
    id: 'd2',
    name: 'Decadent Triple Chocolate Fudge Brownie',
    category: 'DESSERTS',
    price: '$3.25',
    description: 'Warm fudge brownie loaded with semi-sweet chocolate chunks. Add a scoop of vanilla bean ice cream for +$1.00.',
    popular: true
  },
  {
    id: 'd3',
    name: 'Classic Carrot Cake with Cream Cheese Frosting',
    category: 'DESSERTS',
    price: '$4.25',
    description: 'Moist spiced sponge studded with grated fresh carrots, crushed pineapple, and walnuts under rich cream cheese frosting.'
  },
  {
    id: 'd4',
    name: 'Freshly Baked Chocolate Chunk Cookie',
    category: 'DESSERTS',
    price: '$1.75',
    description: 'Soft-baked center with crispy edges, loaded with melted bittersweet Guittard chocolate medallions.'
  },

  // COLD DRINKS
  {
    id: 'cd1',
    name: 'Iced Vanilla Cream Caffe',
    category: 'COLD DRINKS',
    price: '$3.95',
    description: 'Double espresso poured over crystal ice, sweetened with pure vanilla syrup and topped with cold half-and-half.'
  },
  {
    id: 'cd2',
    name: 'Blended Grove Mocha Frappe',
    category: 'COLD DRINKS',
    price: '$4.50',
    description: 'Cold espresso, chocolate syrup, milk, and crushed ice blended silky smooth, finished with whipped cream and sprinkles.',
    popular: true
  },
  {
    id: 'cd3',
    name: 'Southern Sweet Iced Tea',
    category: 'COLD DRINKS',
    price: '$2.25',
    description: 'Slow-brewed Orange Pekoe black tea sweetened while warm with cane sugar, served with fresh lemon wedges.'
  },
  {
    id: 'cd4',
    name: 'San Pellegrino Sparkling Water (500ml)',
    category: 'COLD DRINKS',
    price: '$2.75',
    description: 'Crisp imported Italian mineral water. Available plain, Limonata, or Aranciata.'
  },
  {
    id: 'cd5',
    name: 'Fresh Squeezed Valencia Orange Juice',
    category: 'COLD DRINKS',
    price: '$3.25',
    description: '100% natural orange juice pressed fresh each morning in our kitchen. No concentrates or added sugar.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'serv-coffee',
    title: 'Coffee & Drinks',
    iconName: 'Coffee',
    shortDesc: 'Freshly brewed coffee and specialty espresso drinks handcrafted to perfection.',
    fullDesc: 'We take pride in our direct-trade relationships with sustainable coffee farms in Costa Rica, Ethiopia, and Colombia. Every shot of espresso is calibrated daily by our certified baristas.',
    bullets: [
      'Espresso bar with dairy, oat, soy, and almond milks',
      'Rotating seasonal flavor syrups crafted in-house',
      'Whole-bean retail bags ground to your home coffee maker specifications'
    ]
  },
  {
    id: 'serv-bakery',
    title: 'Bakery & Pastries',
    iconName: 'Croissant',
    shortDesc: 'Fresh pastries and artisan breads baked daily starting at 5:00 AM.',
    fullDesc: 'Our head baker arrives before dawn each morning to fold flaky puff pastry, mix wholesome fruit muffins, and prove our signature sourdough breads.',
    bullets: [
      'Over 14 daily pastry selections on display',
      'Gluten-conscious and vegan sweet options available',
      'Special orders and custom breakfast boxes for morning gatherings'
    ]
  },
  {
    id: 'serv-breakfast',
    title: 'Breakfast & Lunch',
    iconName: 'Utensils',
    shortDesc: 'Simple, satisfying café meals made with local seasonal produce.',
    fullDesc: 'From hearty toasted breakfast bagels and quiches to afternoon deli panini and garden-fresh salads, our kitchen serves wholesome comfort foods made from scratch.',
    bullets: [
      'Breakfast sandwiches prepared hot to order until 11:30 AM',
      'Daily homemade soups and crisp half-sandwich luncheon pairings',
      'Organic salad greens sourced from Valley Family Farms'
    ]
  },
  {
    id: 'serv-events',
    title: 'Events & Catering',
    iconName: 'PartyPopper',
    shortDesc: 'Office catering and private evening cafe rentals for celebrations and meetings.',
    fullDesc: 'Let Urban Grove handle the food and beverages for your corporate office seminars, club meetings, birthday brunches, or evening social mixers.',
    bullets: [
      'Insulated 96oz "Coffee-to-Go" boxes (serves 10-12 cups with cups & condiments)',
      'Assorted artisan sandwich and wrap platters with fresh kettle chips',
      'Private evening cafe hire available after 6:30 PM with full barista staff'
    ]
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'New Spring & Summer Seasonal Menu Announced',
    date: 'April 14, 2009',
    author: 'Martha Johnson, Head Baker',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80',
    excerpt: 'Try our new selection of seasonal drinks and pastries including Meyer Lemon Scones and Iced Vanilla Cream Caffe.',
    fullText: 'As warmer spring sunshine returns to downtown, our kitchen team has developed a refreshing lineup of handcrafted seasonal beverages and light morning treats. Stop by this week to sample our new house-made raspberry reduction syrup, or try our Meyer Lemon Poppyseed Scones baked with real Oregon fruit zest!'
  },
  {
    id: 'news-2',
    title: 'Live Acoustic Music This Friday Evening',
    date: 'April 10, 2009',
    author: 'Bob Johnson, Co-Founder',
    thumbnail: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=300&q=80',
    excerpt: 'Join us from 7:00 PM for acoustic folk and jazz standards with local guitarist Julian Vance. No cover charge.',
    fullText: 'We are thrilled to welcome back local favorite Julian Vance for an intimate two-hour acoustic performance this Friday evening from 7:00 to 9:00 PM. Seating is on a first-come basis, and our full espresso bar, dessert case, and specialty teas will remain open late!'
  },
  {
    id: 'news-3',
    title: 'High-Speed Wireless Internet Now Upgraded to 802.11g',
    date: 'March 28, 2009',
    author: 'Urban Grove Tech Desk',
    thumbnail: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=300&q=80',
    excerpt: 'Complimentary high-speed WiFi coverage extended to all patio tables and rear booths for our laptop patrons.',
    fullText: 'We have installed a high-gain Linksys wireless router, providing uninterrupted wireless broadband connection throughout the dining hall and outdoor cedar patio. Perfect for working professionals, students studying for exams, and casual web surfing while you sip your favorite roast.'
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David Miller',
    role: 'Financial Analyst, Downtown Tower',
    rating: 5,
    date: 'May 2009',
    comment: 'Urban Grove is my morning staple before heading up to the office. The drip coffee is always piping hot and never bitter. You can tell they roast their own beans fresh every single week.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-2',
    name: 'Sarah Jenkins',
    role: 'Freelance Graphic Designer',
    rating: 5,
    date: 'April 2009',
    comment: 'The atmosphere is warm, relaxed, and welcoming. Unlike giant impersonal chain stores, the baristas remember your name and your drink order. Plus, the blueberry muffins are legendary!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-3',
    name: 'Robert C. Edwards',
    role: 'Local Attorney',
    rating: 5,
    date: 'April 2009',
    comment: 'We ordered breakfast pastry platters and the 96oz coffee box for our quarterly partners conference. Everything arrived on time, hot, and beautifully arranged. Exceptional service.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'rev-4',
    name: 'Emily Thornton',
    role: 'High School Teacher',
    rating: 4,
    date: 'March 2009',
    comment: 'A wonderful neighborhood spot to grade papers or meet friends on Saturday morning. The caramel macchiato and Tuscan panini are delicious. Free WiFi is fast and reliable.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Main Dining Hall & Espresso Counter',
    category: 'Café Interior',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80',
    caption: 'Our main dining floor with handcrafted hardwood tables, exposed brick walls, and warm ambient lighting.'
  },
  {
    id: 'gal-2',
    title: 'Handcrafted Latte Art by Barista Kevin',
    category: 'Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    caption: 'Our baristas pour fresh steamed milk into rich espresso for silky rosettas and hearts on every cup.'
  },
  {
    id: 'gal-3',
    title: 'Morning Golden Butter Croissants',
    category: 'Pastries',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    caption: 'Freshly baked every morning in our kitchen using European butter and traditional folding methods.'
  },
  {
    id: 'gal-4',
    title: 'Tuscan Grilled Chicken Ciabatta Panini',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    caption: 'Grilled crispy on our heavy cast iron panini press with fresh melted provolone and garden basil pesto.'
  },
  {
    id: 'gal-5',
    title: 'Regulars Catching Up in our Cozy Armchair Nook',
    category: 'Customers',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80',
    caption: 'A friendly meeting place for downtown residents, remote workers, students, and book club members.'
  },
  {
    id: 'gal-6',
    title: 'Friday Night Acoustic Live Showcase',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80',
    caption: 'Our monthly live music acoustic session featuring local singers, songwriters, and jazz musicians.'
  },
  {
    id: 'gal-7',
    title: 'Freshly Roasted Single-Origin Beans in Sacks',
    category: 'Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=80',
    caption: 'Fair-trade green beans sourced from micro-lot estates, ready for weekly batch roasting on-site.'
  },
  {
    id: 'gal-8',
    title: 'Afternoon Bakery Display Case',
    category: 'Pastries',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    caption: 'Blueberry muffins, apple danishes, and lemon poppyseed scones freshly restocked before noon.'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Friday Night Acoustic Folk & Jazz',
    day: 'Every Friday',
    time: '7:00 PM – 9:00 PM',
    dateStr: 'Weekly Recurring',
    description: 'Relax after the workweek with mellow acoustic guitar and vocal performances from talented regional musicians. Full coffee, tea, and dessert bar open late.',
    admission: 'Free Admission'
  },
  {
    id: 'ev-2',
    title: 'Weekend Home Coffee Cupping & Tasting Class',
    day: 'First Saturday of Month',
    time: '10:30 AM – 11:45 AM',
    dateStr: 'Saturday, May 2, 2009',
    description: 'Learn how professional roasters evaluate aroma, acidity, body, and tasting notes across three distinct global origins. Includes a complimentary 8oz bean sample bag.',
    admission: '$12.00 / person (RSVP at counter)'
  },
  {
    id: 'ev-3',
    title: 'Community Chess & Board Games Wednesday',
    day: 'Every Wednesday',
    time: '5:30 PM – 8:00 PM',
    dateStr: 'Weekly Recurring',
    description: 'Casual open play for all ages and skill levels. Wooden chess boards and backgammon sets provided, or bring your favorite tabletop game to share.',
    admission: 'Free to all patrons'
  },
  {
    id: 'ev-4',
    title: 'Downtown Book & Writers Discussion Circle',
    day: 'Third Thursday',
    time: '6:30 PM – 8:00 PM',
    dateStr: 'Thursday, May 21, 2009',
    description: 'May reading selection: "The Shadow of the Wind" by Carlos Ruiz Zafón. New members warmly welcome. Half-price espresso drinks for attendees.',
    admission: 'Free'
  }
];
