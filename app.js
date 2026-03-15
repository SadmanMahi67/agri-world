const divisions = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh'];

const getRegionalPrice = (base, div) => {
    const variations = { 'Dhaka': 1.1, 'Chattogram': 1.05, 'Rajshahi': 0.9, 'Khulna': 0.95, 'Barishal': 0.92, 'Sylhet': 1.08, 'Rangpur': 0.88, 'Mymensingh': 0.94 };
    return Math.round(base * (variations[div] || 1));
};

// Product Data Structure
const products = [
    { 
        id: 'v1', 
        name: 'Cabbage', name_bn: 'বাধাকপি', 
        category: 'Vegetables', 
        description: 'Fresh crisp green cabbage.', desc_bn: 'তাজা এবং কচকচে সবুজ বাধাকপি।',
        rating: 4.8, 
        image: 'https://images.unsplash.com/photo-1548694054-ca792f6b83f3?w=500', 
        unit: 'kg', marketPrice: 70, 
        suppliers: divisions.map((div, i) => ({ id: `s1-${i}`, region: div, price: getRegionalPrice(70, div) })) 
    },
    { 
        id: 'v2', 
        name: 'Potatoes', name_bn: 'আলু',
        category: 'Vegetables', 
        description: 'Premium quality diamond potatoes.', desc_bn: 'সেরা মানের ডায়মন্ড আলু।',
        rating: 4.5, 
        image: 'https://images.unsplash.com/photo-1518977676601-b53f02bad177?w=500', 
        unit: 'kg', marketPrice: 25, 
        suppliers: divisions.map((div, i) => ({ id: `s2-${i}`, region: div, price: getRegionalPrice(25, div) })) 
    },
    { 
        id: 'v3', 
        name: 'Carrots', name_bn: 'গাজর',
        category: 'Vegetables', 
        description: 'Sweet orange organic carrots.', desc_bn: 'মিষ্টি এবং পুষ্টিকর অর্গানিক গাজর।',
        rating: 4.7, 
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500', 
        unit: 'kg', marketPrice: 150, 
        suppliers: divisions.map((div, i) => ({ id: `s3-${i}`, region: div, price: getRegionalPrice(150, div) })) 
    },
    { 
        id: 'v4', 
        name: 'Tomatoes', name_bn: 'টমেটো',
        category: 'Vegetables', 
        description: 'Vine-ripened red tomatoes.', desc_bn: 'গাছেই পাকা তাজা লাল টমেটো।',
        rating: 4.6, 
        image: 'https://images.unsplash.com/photo-1561131245-c3577d33d969?w=500', 
        unit: 'kg', marketPrice: 130, 
        suppliers: divisions.map((div, i) => ({ id: `s4-${i}`, region: div, price: getRegionalPrice(130, div) })) 
    },
    { 
        id: 'v5', 
        name: 'Spinach', name_bn: 'পালং শাক',
        category: 'Vegetables', 
        description: 'Fresh nutritional spinach leaves.', desc_bn: 'পুষ্টিগুণে ভরপুর টাটকা পালং শাক।',
        rating: 4.9, 
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500', 
        unit: 'kg', marketPrice: 40, 
        suppliers: divisions.map((div, i) => ({ id: `s5-${i}`, region: div, price: getRegionalPrice(40, div) })) 
    },
    { 
        id: 'v6', 
        name: 'Brinjal', name_bn: 'বেগুন',
        category: 'Vegetables', 
        description: 'Large purple eggplants.', desc_bn: 'বড় এবং তাজা লম্বু বেগুন।',
        rating: 4.5, 
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500', 
        unit: 'kg', marketPrice: 120, 
        suppliers: divisions.map((div, i) => ({ id: `s6-${i}`, region: div, price: getRegionalPrice(120, div) })) 
    },
    
    { 
        id: 'f1', 
        name: 'Apples', name_bn: 'আপেল',
        category: 'Fruit', 
        description: 'Crisp and sweet gala apples.', desc_bn: 'মিষ্টি এবং মচমচে গালা আপেল।',
        rating: 4.8, 
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=500', 
        unit: 'kg', marketPrice: 280, 
        suppliers: divisions.map((div, i) => ({ id: `s7-${i}`, region: div, price: getRegionalPrice(280, div) })) 
    },
    { 
        id: 'f2', 
        name: 'Banana', name_bn: 'কলা',
        category: 'Fruit', 
        description: 'Sweet tropical organic bananas.', desc_bn: 'মিষ্টি ও পুষ্টিকর খাস কলা।',
        rating: 4.4, 
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500', 
        unit: 'hali', marketPrice: 40, 
        suppliers: divisions.map((div, i) => ({ id: `s8-${i}`, region: div, price: getRegionalPrice(40, div) })) 
    },
    { 
        id: 'f3', 
        name: 'Mango', name_bn: 'আম',
        category: 'Fruit', 
        description: 'Famous Rajshahi langra mangoes.', desc_bn: 'রাজশাহীর বিখ্যাত সুমিষ্ট লেংড়া আম।',
        rating: 5.0, 
        image: 'https://images.unsplash.com/photo-1553181230-c020d586d98c?w=500', 
        unit: 'kg', marketPrice: 125, 
        suppliers: divisions.map((div, i) => ({ id: `s9-${i}`, region: div, price: getRegionalPrice(125, div) })) 
    },
    
    { 
        id: 'm1', 
        name: 'Cow Milk', name_bn: 'গরুর দুধ',
        category: 'Dairy', noGrade: true, 
        description: 'Pure farm-fresh cow milk.', desc_bn: 'খামারের খাঁটি গরুর দুধ।',
        rating: 4.9, 
        image: 'https://images.unsplash.com/photo-1550583724-125581f77833?w=500', 
        unit: 'liters', marketPrice: 90, 
        suppliers: divisions.map((div, i) => ({ id: `s10-${i}`, region: div, price: getRegionalPrice(90, div) })) 
    },
    { 
        id: 'm2', 
        name: 'Goat Milk', name_bn: 'ছাগলের দুধ',
        category: 'Dairy', noGrade: true, 
        description: 'Nutritious goat milk, easy to digest.', desc_bn: 'পুষ্টিকর এবং সহজে হজমযোগ্য ছাগলের দুধ।',
        rating: 4.7, 
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500', 
        unit: 'liters', marketPrice: 140, 
        suppliers: divisions.map((div, i) => ({ id: `s10b-${i}`, region: div, price: getRegionalPrice(140, div) })) 
    },
    { 
        id: 'm3', 
        name: 'Sheep Milk', name_bn: 'ভেড়ার দুধ',
        category: 'Dairy', noGrade: true, 
        description: 'Rare and creamy sheep milk.', desc_bn: 'বিরল এবং অত্যন্ত ননীযুক্ত ভেড়ার দুধ।',
        rating: 4.6, 
        image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bcd6?w=500', 
        unit: 'liters', marketPrice: 220, 
        suppliers: divisions.map((div, i) => ({ id: `s10c-${i}`, region: div, price: getRegionalPrice(220, div) })) 
    },
    
    { 
        id: 'p1', 
        name: 'Chicken Eggs', name_bn: 'মুরগির ডিম',
        category: 'Poultry', noGrade: true, 
        description: 'Farm fresh organic chicken eggs.', desc_bn: 'খামারের অর্গানিক টাটকা মুরগির ডিম।',
        rating: 4.8, 
        image: 'https://images.unsplash.com/photo-1516746157575-bb1848324ee7?w=500', 
        unit: 'hali', marketPrice: 55, 
        suppliers: divisions.map((div, i) => ({ id: `s11-${i}`, region: div, price: getRegionalPrice(55, div) })) 
    },
    { 
        id: 'p2', 
        name: 'Duck Eggs', name_bn: 'হাঁসের ডিম',
        category: 'Poultry', noGrade: true, 
        description: 'Rich and tasty native duck eggs.', desc_bn: 'দেশি হাঁসের বড় ও সুস্বাদু ডিম।',
        rating: 4.7, 
        image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=500', 
        unit: 'hali', marketPrice: 75, 
        suppliers: divisions.map((div, i) => ({ id: `s11b-${i}`, region: div, price: getRegionalPrice(75, div) })) 
    },
    { 
        id: 'p3', 
        name: 'Quail Eggs', name_bn: 'কোয়েলের ডিম',
        category: 'Poultry', noGrade: true, 
        description: 'Tiny but nutrient-packed quail eggs.', desc_bn: 'ছোট কিন্তু পুষ্টিগুণে অত্যন্ত সমৃদ্ধ কোয়েলের ডিম।',
        rating: 4.9, 
        image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7295?w=500', 
        unit: 'hali', marketPrice: 35, 
        suppliers: divisions.map((div, i) => ({ id: `s11c-${i}`, region: div, price: getRegionalPrice(35, div) })) 
    },
    
    { 
        id: 'c1', 
        name: 'Rice', name_bn: 'চাল',
        category: 'Crops', 
        description: 'Aromatic long-grain miniket rice.', desc_bn: 'মিনিকেট লম্বা দানার সুগন্ধি চাল।',
        rating: 4.7, 
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500', 
        unit: 'kg', marketPrice: 70, 
        suppliers: divisions.map((div, i) => ({ id: `s12-${i}`, region: div, price: getRegionalPrice(70, div) })) 
    },
    { 
        id: 'c2', 
        name: 'Lentils', name_bn: 'মসুর ডাল',
        category: 'Crops', 
        description: 'High protein red lentils (Dal).', desc_bn: 'উচ্চ প্রোটিন সমৃদ্ধ দেশি মসুর ডাল।',
        rating: 4.6, 
        image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=500', 
        unit: 'kg', marketPrice: 155, 
        suppliers: divisions.map((div, i) => ({ id: `s13-${i}`, region: div, price: getRegionalPrice(155, div) })) 
    },
    
    { 
        id: 'fi1', 
        name: 'Hilsa Fish', name_bn: 'ইলিশ মাছ',
        category: 'Fish', 
        description: 'Padma Hilsa - The King of Fish.', desc_bn: 'পদ্মার তাজা ইলিশ - মাছের রাজা।',
        rating: 5.0, 
        image: 'https://images.unsplash.com/photo-1604543519952-12e848f57991?w=500', 
        unit: 'kg', marketPrice: 1800, 
        suppliers: divisions.map((div, i) => ({ id: `s14-${i}`, region: div, price: getRegionalPrice(1800, div) })) 
    },
    { 
        id: 'fi2', 
        name: 'Prawns', name_bn: 'চিংড়ি',
        category: 'Fish', 
        description: 'Freshwater giant prawns.', desc_bn: 'মিষ্টি জলের বড় গলদা চিংড়ি।',
        rating: 4.8, 
        image: 'https://images.unsplash.com/photo-1559742811-824289541bad?w=500', 
        unit: 'kg', marketPrice: 950, 
        suppliers: divisions.map((div, i) => ({ id: `s15-${i}`, region: div, price: getRegionalPrice(950, div) })) 
    }
];

const categoryData = [
    { name: 'Vegetables', icon: '🥦', count: 120, image: 'https://images.unsplash.com/photo-1597362868479-35a62e7db485?w=400' },
    { name: 'Fruit', icon: '🍎', count: 85, image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400' },
    { name: 'Dairy', icon: '🥛', count: 40, image: 'https://images.unsplash.com/photo-1550583724-125581f77833?w=400' },
    { name: 'Poultry', icon: '🥚', count: 35, image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400' },
    { name: 'Crops', icon: '🌾', count: 60, image: 'https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?w=400' },
    { name: 'Fish', icon: '🐟', count: 25, image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400' }
];

// Localization
const translations = {
    en: {
        brand: 'Agri<span>BD</span>',
        navHome: 'Home',
        navProducts: 'Products',
        navAbout: 'About Us',
        navCheckout: 'Checkout',
        heroTitle: 'Freshly Harvested <span>AgriBD</span>',
        heroSubtitle: 'Experience the finest agricultural products delivered directly from our network of verified regional farmers across Bangladesh.',
        shopNow: 'Shop now',
        exploreFarmers: 'Explore Farmers',
        farmers: 'Farmers',
        categories: 'Categories',
        delivery: 'Express Delivery',
        customers: 'Customers',
        exploreCategories: 'Explore Categories',
        handPicked: 'Hand-picked selections from local farms',
        topSelections: 'TOP SELECTIONS',
        premiumQuality: 'Premium quality products curated for you',
        filters: 'Filters',
        searchPlaceholder: 'Search for items...',
        priceRange: 'Price Range',
        upTo: 'Up to',
        clearFilters: 'Clear All Filters',
        sortBy: 'Sort by',
        newest: 'Newest Arrivals',
        priceLow: 'Price: Low to High',
        priceHigh: 'Price: High to Low',
        backToProducts: 'Back to products',
        suppliersFor: 'Suppliers for',
        addToCart: 'Add to Cart',
        yourBasket: 'Your Basket',
        subtotal: 'Subtotal',
        bulkDiscount: 'Bulk Discount',
        total: 'Total',
        proceedToCheckout: 'Proceed to Checkout',
        shippingDetails: 'Shipping Details',
        fullName: 'Full Name',
        phone: 'Phone Number',
        address: 'Delivery Address',
        confirmOrder: 'Confirm & Place Order',
        orderSummary: 'Order Summary',
        orderConfirmed: 'Order Confirmed!',
        thankYou: 'Thank you',
        estimatedDelivery: 'Estimated delivery: 2-4 hours',
        gradeA: 'Grade A (Premium)',
        gradeB: 'Grade B (Market Price)',
        location: 'Location',
        collectionHub: 'Collect from Hub',
        homeDelivery: 'Home Delivery',
        chooseDivision: 'Choose Division',
        chooseHub: 'Choose Hub',
        payment: 'Payment Method',
        aboutHeadline: 'Rooted in Bangladesh',
        aboutLead: 'AgriBD is dedicated to bridging the gap between local farmers across Bangladesh and consumers who value quality, transparency, and freshness.',
        aboutBody: 'Our mission is to empower farmers by providing direct access to the market while ensuring our customers receive the best produce from all 8 divisions. Grade A products are premium, carefully selected for size and quality. Grade B products are unshaped but equally fresh market-price goods.',
        divisionContacts: 'Division Hub Contacts',
        noProductsFound: 'No Products Found',
        catVegetables: 'Vegetables', catFruit: 'Fruit', catDairy: 'Dairy', catPoultry: 'Poultry', catCrops: 'Crops', catFish: 'Fish',
        divDhaka: 'Dhaka', divChattogram: 'Chattogram', divRajshahi: 'Rajshahi', divKhulna: 'Khulna', divBarishal: 'Barishal', divSylhet: 'Sylhet', divRangpur: 'Rangpur', divMymensingh: 'Mymensingh',
        unit_kg: 'kg', unit_liters: 'liters', unit_hali: 'hali',
        expressDeliveryText: 'Express Delivery',
        support: 'Support',
        faq: 'FAQ',
        shippingPolicy: 'Shipping Policy',
        refundPolicy: 'Refund Policy',
        contactUsBtn: 'Contact Us',
        newsletter: 'Newsletter',
        newsletterDesc: 'Get updates on fresh arrivals and farm stories.',
        emailPlaceholder: 'Email Address'
    },
    bn: {
        brand: 'এগ্রি<span>বিডি</span>',
        navHome: 'হোম',
        navProducts: 'পণ্যসমূহ',
        navAbout: 'আমাদের সম্পর্কে',
        navCheckout: 'চেকআউট',
        heroTitle: 'সদ্য আহরিত <span>এগ্রিবিডি</span>',
        heroSubtitle: 'বাংলাদেশের সকল বিভাগীয় কৃষকদের থেকে সরাসরি তাজা পণ্য আপনার কাছে পৌঁছে দিচ্ছি।',
        shopNow: 'এখনই কিনুন',
        exploreFarmers: 'কৃষকদের দেখুন',
        farmers: 'কৃষক',
        categories: 'ক্যাটাগরি',
        delivery: 'দ্রুত ডেলিভারি',
        customers: 'ক্রেতা',
        exploreCategories: 'ক্যাটাগরিগুলো দেখুন',
        handPicked: 'স্থানীয় খামার থেকে সরাসরি বাছাইকৃত',
        topSelections: 'সেরা পছন্দগুলো',
        premiumQuality: 'আপনার জন্য সেরা মানের পণ্য',
        filters: 'ফিল্টার',
        searchPlaceholder: 'খুঁজুন...',
        priceRange: 'দামের পরিসীমা',
        upTo: 'সর্বোচ্চ',
        clearFilters: 'সব ফিল্টার মুছুন',
        sortBy: 'ক্রমানুসার:',
        newest: 'নতুন পণ্য',
        priceLow: 'দাম: কম থেকে বেশি',
        priceHigh: 'দাম: বেশি থেকে কম',
        backToProducts: 'পণ্যতালিকায় ফিরুন',
        suppliersFor: 'এর সরবরাহকারী',
        addToCart: 'কার্টে যোগ করুন',
        yourBasket: 'আপনার ঝুড়ি',
        subtotal: 'সাবটোটাল',
        bulkDiscount: 'পাইকারি ছাড়',
        total: 'মোট',
        proceedToCheckout: 'চেকআউট করুন',
        shippingDetails: 'শিপিং তথ্য',
        fullName: 'পুরো নাম',
        phone: 'ফোন নম্বর',
        address: 'ডেলিভারি ঠিকানা',
        confirmOrder: 'অর্ডার নিশ্চিত করুন',
        orderSummary: 'অর্ডার সামারি',
        orderConfirmed: 'অর্ডার সফল হয়েছে!',
        thankYou: 'ধন্যবাদ',
        estimatedDelivery: 'সম্ভাব্য ডেলিভারি: ২-৪ ঘণ্টা',
        gradeA: 'গ্রেড এ (প্রিমিয়াম)',
        gradeB: 'গ্রেড বি (বাজার দর)',
        location: 'অবস্থান',
        collectionHub: 'হাব থেকে সংগ্রহ',
        homeDelivery: 'হোম ডেলিভারি',
        chooseDivision: 'বিভাগ নির্বাচন করুন',
        chooseHub: 'হাব নির্বাচন করুন',
        payment: 'পেমেন্ট পদ্ধতি',
        aboutHeadline: 'বাংলাদেশের মাটির সাথে',
        aboutLead: 'এগ্রিবিডি বাংলাদেশের স্থানীয় কৃষক এবং মানসম্পন্ন পণ্যের সন্ধানকারী ক্রেতাদের মধ্যে সেতুবন্ধন তৈরিতে কাজ করে।',
        aboutBody: 'আমাদের লক্ষ্য হলো কৃষকদের সরাসরি বাজারে প্রবেশের সুযোগ করে দেওয়া এবং ক্রেতাদের ৮টি বিভাগ থেকে সেরা পণ্য নিশ্চিত করা। গ্রেড এ পণ্যগুলো প্রিমিয়াম মানের। গ্রেড বি পণ্যগুলো দেখতে কিছুটা ভিন্ন হলেও তাজা এবং বাজার মূল্যে পাওয়া যায়।',
        divisionContacts: 'বিভাগীয় হাব যোগাযোগ',
        noProductsFound: 'কোন পণ্য পাওয়া যায়নি',
        catVegetables: 'সবজি', catFruit: 'ফল', catDairy: 'দুগ্ধজাত', catPoultry: 'পোল্ট্রি', catCrops: 'শস্য', catFish: 'মাছ',
        divDhaka: 'ঢাকা', divChattogram: 'চট্টগ্রাম', divRajshahi: 'রাজশাহী', divKhulna: 'খুলনা', divBarishal: 'বরিশাল', divSylhet: 'সিলেট', divRangpur: 'রংপুর', divMymensingh: 'ময়মনসিংহ',
        unit_kg: 'কেজি', unit_liters: 'লিটার', unit_hali: 'হালি',
        expressDeliveryText: 'এক্সপ্রেস ডেলিভারি',
        support: 'সহায়তা',
        faq: 'সাধারণ জিজ্ঞাসা',
        shippingPolicy: 'শিপিং পলিসি',
        refundPolicy: 'রিফান্ড পলিসি',
        contactUsBtn: 'যোগাযোগ করুন',
        newsletter: 'নিউজলেটার',
        newsletterDesc: 'নতুন পণ্যের আপডেট এবং খামারের খবর পেতে যোগ দিন।',
        emailPlaceholder: 'ইমেইল ঠিকানা'
    }
};

let currentLang = 'bn';

// Hub Data
const hubData = {
    'Dhaka': ['Dhaka Central Hub', 'Mirpur Hub'],
    'Chattogram': ['Chattogram Port Hub', 'Agrabad Hub'],
    'Rajshahi': ['Rajshahi Town Hub', 'Chapainawabganj Hub'],
    'Khulna': ['Khulna City Hub', 'Jessore Hub'],
    'Barishal': ['Barishal Sadar Hub', 'Bhola Hub'],
    'Sylhet': ['Sylhet City Hub', 'Moulvibazar Hub'],
    'Rangpur': ['Rangpur Town Hub', 'Dinajpur Hub'],
    'Mymensingh': ['Mymensingh Hub', 'Netrokona Hub']
};

// UI State
let cart = [];
let currentSection = 'home';
let filters = { search: '', categories: [], regions: [], maxPrice: 2500, sort: 'newest' };
let currentGrade = 'A';
let currentProduct = null;
let revealObserver;

// Initialize
function init() {
    setupScrollEffects();
    updateLanguage();
    renderHome();
    setupFilters();
    showSection('home');
    setupEventListeners();
    updateCartUI();
    populateDivisions();
}

function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    document.getElementById('langDisplay').innerText = currentLang === 'en' ? 'BN' : 'EN';
    updateLanguage();
    renderHome();
    setupFilters();
    applyFilters();
}

function updateLanguage() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-p]').forEach(el => {
        const key = el.getAttribute('data-p');
        if (t[key]) el.placeholder = t[key];
    });
    
    // Update document title
    document.title = `AgriBD | ${t.brand.replace('<span>', '').replace('</span>', '')}`;
}

function showSection(sectionId) {
    currentSection = sectionId;
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    const view = document.getElementById(`${sectionId}View`);
    if (view) {
        view.classList.remove('hidden');
        view.classList.add('fade-in');
    }
    window.scrollTo(0, 0);

    if (sectionId === 'listing') {
        applyFilters();
        closeSupplierView();
    } else if (sectionId === 'checkout') {
        renderCheckout();
    } else if (sectionId === 'about') {
        renderAbout();
    }
    updateLanguage();
}

function renderAbout() {
    const list = document.getElementById('divisionContactsList');
    if (list) {
        list.innerHTML = Object.keys(hubData).map(div => {
            const translatedDiv = translations[currentLang][`div${div}`] || div;
            const phone = `+880 17${Math.floor(10000000 + Math.random() * 90000000)}`;
            const tel = `+880 2 ${Math.floor(1000000 + Math.random() * 9000000)}`;
            const email = `hub.${div.toLowerCase()}@agribd.com`;
            
            return `
                <div class="checkout-card reveal" style="text-align:left; margin-bottom: 0;">
                    <h3 style="color:var(--accent); margin-bottom:10px;">${translatedDiv} Hub</h3>
                    <p style="margin-bottom:5px;"><strong>📞 Mobile:</strong> ${phone} <span style="background:#25D366; color:white; padding:2px 6px; border-radius:4px; font-size:0.7rem; vertical-align:middle;">WhatsApp</span></p>
                    <p style="margin-bottom:5px;"><strong>☎️ Tel:</strong> ${tel}</p>
                    <p style="margin-bottom:5px;"><strong>📧 Email:</strong> ${email}</p>
                </div>
            `;
        }).join('');
    }
}

function renderHome() {
    const homeCats = document.getElementById('homeCategories');
    if (homeCats) {
        homeCats.innerHTML = categoryData.map(c => `
            <div class="cat-card reveal" onclick="window.renderProductsByCat('${c.name}'); window.showSection('listing')">
                <img src="${c.image}" alt="${c.name}">
                <div class="cat-info">
                    <h3>${c.icon} ${translations[currentLang]['cat' + c.name]}</h3>
                    <span>${c.count}+ ${translations[currentLang].navProducts}</span>
                </div>
            </div>
        `).join('');
    }

    const topSelectionsGrid = document.getElementById('topSelectionsGrid');
    if (topSelectionsGrid) {
        topSelectionsGrid.innerHTML = '';
        products.slice(0, 4).forEach(p => {
            topSelectionsGrid.appendChild(createProductCard(p));
        });
    }

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function createProductCard(p) {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    
    const name = currentLang === 'bn' ? p.name_bn : p.name;
    const desc = currentLang === 'bn' ? p.desc_bn : p.description;
    const catDisplay = translations[currentLang]['cat' + p.category] || p.category;
    
    card.innerHTML = `
        <div class="product-img-container">
            <img src="${p.image}" class="product-img" alt="${name}">
            <div class="card-badge">${catDisplay}</div>
            <div class="wishlist-btn"><i class="fa-regular fa-heart"></i></div>
            <div class="quick-add" onclick="event.stopPropagation(); window.showSuppliersFromCard('${p.id}')">${translations[currentLang].addToCart}</div>
        </div>
        <div class="product-info">
            <h3>${name}</h3>
            <div class="rating">
                ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(p.rating))} ${p.rating} ★
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">${desc}</p>
        </div>
    `;
    
    card.onclick = () => {
        showSection('listing');
        showSuppliers(p);
    };
    
    if (revealObserver) revealObserver.observe(card);
    return card;
}

function showSuppliersFromCard(productId) {
    const p = products.find(prod => prod.id === productId);
    showSection('listing');
    showSuppliers(p);
}

function setupFilters() {
    const categories = [...new Set(products.map(p => p.category))];
    const regions = divisions;

    const catContainer = document.getElementById('categoryFilters');
    if (catContainer) {
        catContainer.innerHTML = categoryData.filter(cd => categories.includes(cd.name)).map(c => `
            <div class="pill-item ${filters.categories.includes(c.name) ? 'active' : ''}" 
                 onclick="window.toggleFilter('categories', '${c.name}', this)">
                <span>${c.icon}</span> ${translations[currentLang]['cat' + c.name]}
            </div>
        `).join('');
    }

    const regContainer = document.getElementById('regionFilters');
    if (regContainer) {
        regContainer.innerHTML = regions.map(r => `
            <div class="pill-item ${filters.regions.includes(r) ? 'active' : ''}" 
                 onclick="window.toggleFilter('regions', '${r}', this)">
                ${r}
            </div>
        `).join('');
    }
}

function toggleFilter(type, value, element) {
    const idx = filters[type].indexOf(value);
    if (idx > -1) {
        filters[type].splice(idx, 1);
        element.classList.remove('active');
    } else {
        filters[type].push(value);
        element.classList.add('active');
    }
    applyFilters();
}

function renderProductsByCat(cat) {
    filters.categories = [cat];
    setupFilters();
    applyFilters();
}

function updatePriceLabel(val) {
    document.getElementById('priceLabel').innerText = `${translations[currentLang].upTo} ৳ ${val}`;
    filters.maxPrice = val;
    applyFilters();
}

function clearFilters() {
    filters = { search: '', categories: [], regions: [], maxPrice: 2500, sort: 'newest' };
    document.getElementById('searchInput').value = '';
    document.getElementById('priceRange').value = 2500;
    updatePriceLabel(2500);
    setupFilters();
    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const sortSelect = document.getElementById('sortSelect');
    const sort = sortSelect ? sortSelect.value : 'newest';
    
    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
        const matchesCat = filters.categories.length === 0 || filters.categories.includes(p.category);
        const matchesReg = filters.regions.length === 0 || p.suppliers.some(s => filters.regions.includes(s.region));
        const minPrice = Math.min(...p.suppliers.map(s => s.price));
        const matchesPrice = minPrice <= filters.maxPrice;
        
        return matchesSearch && matchesCat && matchesReg && matchesPrice;
    });

    if (sort === 'price-low') filtered.sort((a, b) => Math.min(...a.suppliers.map(s => s.price)) - Math.min(...b.suppliers.map(s => s.price)));
    if (sort === 'price-high') filtered.sort((a, b) => Math.max(...b.suppliers.map(s => s.price)) - Math.max(...a.suppliers.map(s => s.price)));

    const grid = document.getElementById('productGrid');
    if (grid) {
        grid.innerHTML = '';
        filtered.forEach(p => grid.appendChild(createProductCard(p)));
    }
    
    const title = document.getElementById('viewTitle');
    if (title) title.innerText = filtered.length > 0 ? `${filtered.length} ${translations[currentLang].navProducts}` : translations[currentLang].noProductsFound || "No Products Found";
}

function setGrade(grade) {
    currentGrade = grade;
    document.getElementById('btnGradeA').classList.toggle('active', grade === 'A');
    document.getElementById('btnGradeB').classList.toggle('active', grade === 'B');
    if (currentProduct) showSuppliers(currentProduct);
}

function calculatePrice(basePrice, grade) {
    return grade === 'A' ? Math.round(basePrice * 1.1) : basePrice;
}

function showSuppliers(product) {
    currentProduct = product;
    const grid = document.getElementById('productGrid');
    const view = document.getElementById('supplierView');
    const gradeToggle = document.querySelector('.grade-toggle');
    
    if (grid && view) {
        grid.classList.add('hidden');
        view.classList.remove('hidden');
    }
    
    if (gradeToggle) {
        gradeToggle.style.display = product.noGrade ? 'none' : 'flex';
    }

    const detailTitle = document.getElementById('productDetailTitle');
    const name = currentLang === 'bn' ? product.name_bn : product.name;
    if (detailTitle) detailTitle.innerText = `${translations[currentLang].suppliersFor} ${name}`;
    
    const list = document.getElementById('supplierList');
    if (list) {
        list.innerHTML = product.suppliers.map(s => {
            const price = product.noGrade ? s.price : calculatePrice(s.price, currentGrade);
            const regionName = translations[currentLang][`div${s.region}`] || s.region;
            return `
                <div class="checkout-card fade-in" style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <p style="color:var(--text); font-weight:700; font-size: 1.1rem;">📍 ${regionName}</p>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">৳ ${price}<span style="font-size: 0.8rem; font-weight: 400;">/${product.unit}</span></div>
                        <button class="cta-primary" style="padding: 10px 20px; margin-top: 10px;" onclick="window.addToCart('${encodeURIComponent(JSON.stringify(product))}', '${encodeURIComponent(JSON.stringify(s))}', ${price})">
                            <i class="fa-solid fa-plus"></i> ${translations[currentLang].addToCart}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function closeSupplierView() {
    const grid = document.getElementById('productGrid');
    const view = document.getElementById('supplierView');
    if (grid && view) {
        grid.classList.remove('hidden');
        view.classList.add('hidden');
    }
}

function addToCart(pStr, sStr, price) {
    const p = JSON.parse(decodeURIComponent(pStr));
    const s = JSON.parse(decodeURIComponent(sStr));
    const increment = p.unit === 'hali' ? 1 : 0.5;
    
    const name = currentLang === 'bn' ? p.name_bn : p.name;
    const region = translations[currentLang][`div${s.region}`] || s.region;

    const existing = cart.find(item => item.productId === p.id && item.regionInternal === s.region && (p.noGrade ? true : item.grade === currentGrade));
    if (existing) {
        existing.qty += increment;
    } else {
        cart.push({ 
            productId: p.id, 
            productName: name, 
            image: p.image,
            price: price, 
            qty: increment, 
            region: region,
            regionInternal: s.region,
            grade: p.noGrade ? '' : currentGrade,
            unit: p.unit
        });
    }
    updateCartUI();
    
    const cartBtn = document.getElementById('openCart');
    cartBtn.classList.add('cart-badge-anim');
    setTimeout(() => cartBtn.classList.remove('cart-badge-anim'), 500);
    
    document.getElementById('cartDrawer').classList.add('open');
}

function updateQty(index, delta) {
    const item = cart[index];
    const increment = item.unit === 'hali' ? 1 : 0.5;
    item.qty += (delta > 0 ? increment : -increment);
    if (item.qty <= 0) cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    container.innerHTML = '';
    let subtotal = 0;
    let totalQty = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        totalQty += item.qty;
        
        const p = products.find(prod => prod.id === item.productId);
        const name = currentLang === 'bn' ? p.name_bn : p.name;
        const region = translations[currentLang][`div${item.regionInternal}`] || item.regionInternal;
        const unitDisplay = translations[currentLang][`unit_${p.unit}`] || p.unit;

        const div = document.createElement('div');
        div.style.marginBottom = '25px';
        div.style.display = 'flex';
        div.style.gap = '15px';
        div.innerHTML = `
            <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                    <div>
                        <strong style="display:block;">${name} ${item.grade ? '('+item.grade+')' : ''}</strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">📍 ${region}</span>
                    </div>
                    <span style="font-weight: 700;">৳ ${Math.round(item.price * item.qty)}</span>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="window.updateQty(${index}, -1)">-</button>
                    <span style="font-weight:700;">${item.qty}${unitDisplay}</span>
                    <button class="qty-btn" onclick="window.updateQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });

    let discountPercent = 0;
    if (totalQty >= 50) discountPercent = 15;
    else if (totalQty >= 20) discountPercent = 10;
    else if (totalQty >= 10) discountPercent = 5;

    let discount = subtotal * (discountPercent / 100);
    const total = Math.round(subtotal - discount);
    
    document.getElementById('cartSubtotal').innerText = `৳ ${Math.round(subtotal)}`;
    document.getElementById('cartDiscount').innerText = `- ৳ ${Math.round(discount)} (${discountPercent}%)`;
    document.getElementById('cartTotal').innerText = `৳ ${total}`;
    document.getElementById('openCart').innerHTML = `<i class="fa-solid fa-shopping-basket"></i> ${translations[currentLang].navCheckout} (${cart.length})`;

    if (currentSection === 'checkout') renderCheckout();
}

function renderCheckout() {
    const summaryItems = document.getElementById('checkoutSummaryItems');
    if (!summaryItems) return;
    summaryItems.innerHTML = cart.map(item => {
        const p = products.find(prod => prod.id === item.productId);
        const name = currentLang === 'bn' ? p.name_bn : p.name;
        const region = translations[currentLang][`div${item.regionInternal}`] || item.regionInternal;
        const unitDisplay = translations[currentLang][`unit_${p.unit}`] || p.unit;

        return `
            <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between;">
                        <strong>${name} ${item.grade ? '('+item.grade+')' : ''}</strong>
                        <span>৳ ${Math.round(item.price * item.qty)}</span>
                    </div>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">${item.qty}${unitDisplay} from ${region}</p>
                </div>
            </div>
        `;
    }).join('');
    
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    
    let discountPercent = 0;
    if (totalQty >= 50) discountPercent = 15;
    else if (totalQty >= 20) discountPercent = 10;
    else if (totalQty >= 10) discountPercent = 5;

    let discount = subtotal * (discountPercent / 100);

    document.getElementById('summarySubtotal').innerText = `৳ ${Math.round(subtotal)}`;
    document.getElementById('discountLabel').innerText = `${translations[currentLang].bulkDiscount} (${discountPercent}%)`;
    document.getElementById('summaryDiscount').innerText = `- ৳ ${Math.round(discount)}`;
    document.getElementById('checkoutFinalTotal').innerText = `৳ ${Math.round(subtotal - discount)}`;
}

function toggleDeliveryMethod() {
    const method = document.getElementById('deliveryMethod').value;
    document.getElementById('addressGroup').classList.toggle('hidden', method === 'hub');
    document.getElementById('hubGroup').classList.toggle('hidden', method === 'delivery');
    document.getElementById('deliveryEstimate').style.display = method === 'delivery' ? 'block' : 'none';
}

function populateDivisions() {
    const selector = document.getElementById('hubDivision');
    if (selector) {
        selector.innerHTML = `<option value="">${translations[currentLang].chooseDivision}</option>` + 
            divisions.map(div => {
                const translatedDiv = translations[currentLang][`div${div}`] || div;
                return `<option value="${div}">${translatedDiv}</option>`;
            }).join('');
    }
}

function updateHubs() {
    const div = document.getElementById('hubDivision').value;
    const selector = document.getElementById('hubLocation');
    if (selector) {
        if (!div) {
            selector.innerHTML = `<option value="">${translations[currentLang].chooseDivision}</option>`;
            return;
        }
        // Hub names are kept in English as they are local brands/spots
        selector.innerHTML = hubData[div].map(hub => `<option value="${hub}">${hub}</option>`).join('');
    }
}

function setPayment(method, el) {
    document.querySelectorAll('.payment-item').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('paymentMethod').value = method;
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    document.getElementById('langDisplay').innerText = currentLang === 'en' ? 'BN' : 'EN';
    updateLanguage();
    renderHome();
    setupFilters();
    applyFilters();
    populateDivisions();
}

function setupEventListeners() {
    const openCart = document.getElementById('openCart');
    const closeCart = document.getElementById('closeCart');
    const checkoutForm = document.getElementById('checkoutForm');

    if (openCart) openCart.onclick = () => document.getElementById('cartDrawer').classList.add('open');
    if (closeCart) closeCart.onclick = () => document.getElementById('cartDrawer').classList.remove('open');
    
    if (checkoutForm) {
        checkoutForm.onsubmit = (e) => {
            e.preventDefault();
            const container = document.querySelector('.checkout-container');
            container.innerHTML = `
                <div class="checkout-card" style="text-align: center; padding: 100px 40px;">
                    <div style="font-size: 4rem; color: var(--accent); margin-bottom: 30px;"><i class="fa-solid fa-circle-check"></i></div>
                    <h1 class="section-title">${translations[currentLang].orderConfirmed}</h1>
                    <p style="font-size: 1.2rem; margin-bottom: 40px;">${translations[currentLang].thankYou} ${document.getElementById('custName').value}.</p>
                    <button class="cta-primary" onclick="window.location.reload()">${translations[currentLang].navHome}</button>
                </div>
            `;
            cart = [];
            updateCartUI();
        };
    }
}

// Global Exports
window.showSection = showSection;
window.applyFilters = applyFilters;
window.toggleFilter = toggleFilter;
window.updatePriceLabel = updatePriceLabel;
window.addToCart = addToCart;
window.updateQty = updateQty;
window.closeSupplierView = closeSupplierView;
window.renderProductsByCat = renderProductsByCat;
window.clearFilters = clearFilters;
window.showSuppliersFromCard = showSuppliersFromCard;
window.toggleLanguage = toggleLanguage;
window.setGrade = setGrade;
window.toggleDeliveryMethod = toggleDeliveryMethod;
window.updateHubs = updateHubs;
window.setPayment = setPayment;

init();
