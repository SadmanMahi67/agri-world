// Product Data Structure
const products = [
    { id: 'v1', name: 'Cabbage', category: 'Vegetables', description: 'Fresh crisp green cabbage.', rating: 4.8, image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400', suppliers: [
        {id: 's1', name: 'Sylhet Valley', region: 'Sylhet', price: 45}, 
        {id: 's2', name: 'Rajshahi Green', region: 'Rajshahi', price: 40},
        {id: 's3', name: 'Dhaka Agro', region: 'Dhaka', price: 48}
    ] },
    { id: 'v2', name: 'Potatoes', category: 'Vegetables', description: 'Premium quality diamond potatoes.', rating: 4.5, image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?w=400', suppliers: [
        {id: 's4', name: 'Bogura Red', region: 'Bogura', price: 35},
        {id: 's5', name: 'Munshiganj Farms', region: 'Dhaka', price: 38}
    ] },
    { id: 'v3', name: 'Carrots', category: 'Vegetables', description: 'Sweet orange organic carrots.', rating: 4.7, image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400', suppliers: [
        {id: 's9', name: 'Dhaka Fresh', region: 'Dhaka', price: 60},
        {id: 's10', name: 'Cumilla Green', region: 'Comilla', price: 55}
    ] },
    { id: 'v4', name: 'Tomatoes', category: 'Vegetables', description: 'Vine-ripened red tomatoes.', rating: 4.6, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400', suppliers: [
        {id: 's11', name: 'Comilla Farms', region: 'Comilla', price: 80},
        {id: 's12', name: 'Rajshahi Red', region: 'Rajshahi', price: 75}
    ] },
    { id: 'v5', name: 'Spinach', category: 'Vegetables', description: 'Fresh nutritional spinach leaves.', rating: 4.9, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', suppliers: [
        {id: 's13', name: 'Sylhet Valley', region: 'Sylhet', price: 30},
        {id: 's14', name: 'Barishal Greens', region: 'Barishal', price: 32}
    ] },
    { id: 'v6', name: 'Brinjal', category: 'Vegetables', description: 'Large purple eggplants.', rating: 4.5, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400', suppliers: [
        {id: 's30', name: 'Jashore Farms', region: 'Jashore', price: 65},
        {id: 's31', name: 'Dhaka Veggies', region: 'Dhaka', price: 70}
    ] },
    
    { id: 'f1', name: 'Apples', category: 'Fruit', description: 'Crisp and sweet gala apples.', rating: 4.8, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400', suppliers: [
        {id: 's15', name: 'Sylhet Valley', region: 'Sylhet', price: 180},
        {id: 's16', name: 'Chittagong Orchards', region: 'Chittagong', price: 195}
    ] },
    { id: 'f2', name: 'Banana', category: 'Fruit', description: 'Sweet tropical organic bananas.', rating: 4.4, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', suppliers: [
        {id: 's17', name: 'Barishal Tropicals', region: 'Barishal', price: 60},
        {id: 's18', name: 'Narsingdi Golden', region: 'Narsingdi', price: 55}
    ] },
    { id: 'f3', name: 'Mango', category: 'Fruit', description: 'Famous Rajshahi langra mangoes.', rating: 5.0, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400', suppliers: [
        {id: 's19', name: 'Chapainawabganj', region: 'Rajshahi', price: 120},
        {id: 's20', name: 'Satkhira Premium', region: 'Satkhira', price: 130}
    ] },
    { id: 'f4', name: 'Guava', category: 'Fruit', description: 'Crispy green sweet guavas.', rating: 4.7, image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?w=400', suppliers: [
        {id: 's32', name: 'Barishal Fruits', region: 'Barishal', price: 50},
        {id: 's33', name: 'Rajshahi Orchard', region: 'Rajshahi', price: 55}
    ] },
    
    { id: 'm1', name: 'Milk', category: 'Milk', description: 'Pure farm-fresh cow milk.', rating: 4.9, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', suppliers: [
        {id: 's21', name: 'Pabna Dairy', region: 'Pabna', price: 90},
        {id: 's22', name: 'Sirajganj Fresh', region: 'Sirajganj', price: 85}
    ] },
    { id: 'd1', name: 'Yogurt', category: 'Dairy Products', description: 'Traditional Bogura sweet curd.', rating: 4.9, image: 'https://images.unsplash.com/photo-1485962391044-f93878b1732e?auto=format&fit=crop&q=80&w=800', suppliers: [
        {id: 's23', name: 'Bogura Palace', region: 'Bogura', price: 150},
        {id: 's24', name: 'Sherpur Curds', region: 'Bogura', price: 140}
    ] },
    { id: 'd2', name: 'Ghee', category: 'Dairy Products', description: 'Pure desi cow ghee.', rating: 4.9, image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400', suppliers: [
        {id: 's34', name: 'Pabna Gold', region: 'Pabna', price: 1200},
        {id: 's35', name: 'Village Pure', region: 'Dhaka', price: 1350}
    ] },
    
    { id: 'c1', name: 'Rice', category: 'Crops', description: 'Aromatic long-grain miniket rice.', rating: 4.7, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', suppliers: [
        {id: 's25', name: 'Naogaon Mill', region: 'Naogaon', price: 70},
        {id: 's26', name: 'Dinajpur Grains', region: 'Dinajpur', price: 75}
    ] },
    { id: 'c2', name: 'Lentils', category: 'Crops', description: 'High protein red lentils (Dal).', rating: 4.6, image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400', suppliers: [
        {id: 's27', name: 'Kushtia Grains', region: 'Kushtia', price: 110},
        {id: 's28', name: 'Magura Pulse', region: 'Kushtia', price: 105}
    ] },
    
    { id: 'fi1', name: 'Hilsa Fish', category: 'Fish', description: 'Padma Hilsa - The King of Fish.', rating: 5.0, image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400', suppliers: [
        {id: 's29', name: 'Chandpur Fresh', region: 'Chandpur', price: 1800},
        {id: 's30', name: 'Bhola Fishery', region: 'Bhola', price: 1750}
    ] },
    { id: 'fi2', name: 'Prawns', category: 'Fish', description: 'Freshwater giant prawns.', rating: 4.8, image: 'https://images.unsplash.com/photo-1553659971-f01207815844?w=400', suppliers: [
        {id: 's36', name: 'Satkhira Export', region: 'Satkhira', price: 950},
        {id: 's37', name: 'Khulna Aqua', region: 'Khulna', price: 900}
    ] },

    { id: 'sp1', name: 'Honey', category: 'Spices', description: 'Pure Sundarbans honey.', rating: 4.9, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400', suppliers: [
        {id: 's38', name: 'Sundarbans Wild', region: 'Khulna', price: 850},
        {id: 's39', name: 'Natural Bee', region: 'Dhaka', price: 900}
    ] }
];

const categoryData = [
    { name: 'Vegetables', icon: '🥦', count: 120, image: 'https://images.unsplash.com/photo-1597362868479-35a62e7db485?w=400' },
    { name: 'Fruit', icon: '🍎', count: 85, image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400' },
    { name: 'Milk', icon: '🥛', count: 40, image: 'https://images.unsplash.com/photo-1550583724-125581f77833?w=400' },
    { name: 'Dairy Products', icon: '🧀', count: 35, image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400' },
    { name: 'Crops', icon: '🌾', count: 60, image: 'https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?w=400' },
    { name: 'Fish', icon: '🐟', count: 25, image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=400' }
];

// UI State
let cart = [];
let currentSection = 'home';
let filters = { search: '', categories: [], regions: [], maxPrice: 2500, sort: 'newest' };
let revealObserver;

// Initialize
function init() {
    setupScrollEffects();
    renderHome();
    setupFilters();
    showSection('home');
    setupEventListeners();
    updateCartUI();
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
                // Once it's active, we can stop observing
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Initial observation
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
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
    }
}

function renderHome() {
    // Categories
    const homeCats = document.getElementById('homeCategories');
    if (homeCats) {
        homeCats.innerHTML = categoryData.map(c => `
            <div class="cat-card reveal" onclick="window.renderProductsByCat('${c.name}'); window.showSection('listing')">
                <img src="${c.image}" alt="${c.name}">
                <div class="cat-info">
                    <h3>${c.icon} ${c.name}</h3>
                    <span>${c.count}+ Products Available</span>
                </div>
            </div>
        `).join('');
    }

    // Top Selections
    const topSelectionsGrid = document.getElementById('topSelectionsGrid');
    if (topSelectionsGrid) {
        topSelectionsGrid.innerHTML = '';
        products.slice(0, 4).forEach(p => {
            topSelectionsGrid.appendChild(createProductCard(p));
        });
    }

    // Observe all new reveal elements
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function createProductCard(p) {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    
    const minPrice = Math.min(...p.suppliers.map(s => s.price));
    
    card.innerHTML = `
        <div class="product-img-container">
            <img src="${p.image}" class="product-img" alt="${p.name}">
            <div class="card-badge">${p.category === 'Vegetables' || p.category === 'Fruit' ? 'Organic' : 'Premium'}</div>
            <div class="wishlist-btn"><i class="fa-regular fa-heart"></i></div>
            <div class="quick-add" onclick="event.stopPropagation(); window.showSuppliersFromCard('${p.id}')">Add to Cart</div>
        </div>
        <div class="product-info">
            <h3>${p.name}</h3>
            <div class="rating">
                ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(p.rating))} ${p.rating} ★
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">${p.description}</p>
            <div class="price">৳ ${minPrice} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ kg</span></div>
        </div>
    `;
    
    card.onclick = () => {
        showSection('listing');
        showSuppliers(p);
    };
    
    // We observe the specific card immediately
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
    const regions = [...new Set(products.flatMap(p => p.suppliers.map(s => s.region)))];

    const catContainer = document.getElementById('categoryFilters');
    if (catContainer) {
        catContainer.innerHTML = categoryData.filter(cd => categories.includes(cd.name)).map(c => `
            <div class="pill-item ${filters.categories.includes(c.name) ? 'active' : ''}" 
                 onclick="window.toggleFilter('categories', '${c.name}', this)">
                <span>${c.icon}</span> ${c.name}
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
    document.getElementById('priceLabel').innerText = `Up to ৳ ${val}`;
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
        const matchesPrice = p.suppliers.some(s => s.price <= filters.maxPrice);
        
        return matchesSearch && matchesCat && matchesReg && matchesPrice;
    });

    if (sort === 'price-low') filtered.sort((a, b) => Math.min(...a.suppliers.map(s => s.price)) - Math.min(...b.suppliers.map(s => s.price)));
    if (sort === 'price-high') filtered.sort((a, b) => Math.min(...b.suppliers.map(s => s.price)) - Math.min(...a.suppliers.map(s => s.price)));

    const grid = document.getElementById('productGrid');
    if (grid) {
        grid.innerHTML = '';
        filtered.forEach(p => grid.appendChild(createProductCard(p)));
    }
    
    const title = document.getElementById('viewTitle');
    if (title) title.innerText = filtered.length > 0 ? `Showing ${filtered.length} Results` : "No Products Found";
}

function showSuppliers(product) {
    const grid = document.getElementById('productGrid');
    const view = document.getElementById('supplierView');
    if (grid && view) {
        grid.classList.add('hidden');
        view.classList.remove('hidden');
    }
    const detailTitle = document.getElementById('productDetailTitle');
    if (detailTitle) detailTitle.innerText = `Suppliers for ${product.name}`;
    
    const list = document.getElementById('supplierList');
    if (list) {
        list.innerHTML = product.suppliers.map(s => `
            <div class="checkout-card fade-in" style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4>${s.name}</h4>
                    <p style="color:var(--text-muted); font-size: 0.85rem;">📍 ${s.region}</p>
                </div>
                <div style="text-align:right;">
                    <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">৳ ${s.price}<span style="font-size: 0.8rem; font-weight: 400;">/kg</span></div>
                    <button class="cta-primary" style="padding: 10px 20px; margin-top: 10px;" onclick="window.addToCart('${encodeURIComponent(JSON.stringify(product))}', '${encodeURIComponent(JSON.stringify(s))}')">
                        <i class="fa-solid fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
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

function addToCart(pStr, sStr) {
    const p = JSON.parse(decodeURIComponent(pStr));
    const s = JSON.parse(decodeURIComponent(sStr));
    
    const existing = cart.find(item => item.productId === p.id && item.supplierId === s.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ 
            productId: p.id, 
            productName: p.name, 
            image: p.image,
            supplierId: s.id, 
            supplierName: s.name, 
            price: s.price, 
            qty: 1, 
            region: s.region 
        });
    }
    updateCartUI();
    
    const cartBtn = document.getElementById('openCart');
    cartBtn.classList.add('cart-badge-anim');
    setTimeout(() => cartBtn.classList.remove('cart-badge-anim'), 500);
    
    document.getElementById('cartDrawer').classList.add('open');
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
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
        const div = document.createElement('div');
        div.style.marginBottom = '25px';
        div.style.display = 'flex';
        div.style.gap = '15px';
        div.innerHTML = `
            <img src="${item.image}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
                    <div>
                        <strong style="display:block;">${item.productName}</strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${item.supplierName}</span>
                    </div>
                    <span style="font-weight: 700;">৳ ${item.price * item.qty}</span>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="window.updateQty(${index}, -1)">-</button>
                    <span style="font-weight:700;">${item.qty}kg</span>
                    <button class="qty-btn" onclick="window.updateQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });

    let discount = 0;
    if (totalQty >= 50) discount = subtotal * 0.15;
    else if (totalQty >= 20) discount = subtotal * 0.10;
    else if (totalQty >= 10) discount = subtotal * 0.05;

    const total = Math.round(subtotal - discount);
    
    document.getElementById('cartSubtotal').innerText = `৳ ${subtotal}`;
    document.getElementById('cartDiscount').innerText = `- ৳ ${Math.round(discount)}`;
    document.getElementById('cartTotal').innerText = `৳ ${total}`;
    document.getElementById('openCart').innerHTML = `<i class="fa-solid fa-shopping-basket"></i> Cart (${cart.length})`;

    // Update Summary in Checkout if open
    if (currentSection === 'checkout') renderCheckout();
}

function renderCheckout() {
    const summaryItems = document.getElementById('checkoutSummaryItems');
    if (!summaryItems) return;
    summaryItems.innerHTML = cart.map(item => `
        <div style="display: flex; gap: 15px; margin-bottom: 20px;">
            <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between;">
                    <strong>${item.productName}</strong>
                    <span>৳ ${item.price * item.qty}</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${item.qty}kg from ${item.supplierName}</p>
            </div>
        </div>
    `).join('');
    
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    let discount = 0;
    if (totalQty >= 50) discount = subtotal * 0.15;
    else if (totalQty >= 20) discount = subtotal * 0.10;
    else if (totalQty >= 10) discount = subtotal * 0.05;

    document.getElementById('summarySubtotal').innerText = `৳ ${subtotal}`;
    document.getElementById('summaryDiscount').innerText = `- ৳ ${Math.round(discount)}`;
    document.getElementById('checkoutFinalTotal').innerText = `৳ ${Math.round(subtotal - discount)}`;
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
            // Success State
            const container = document.querySelector('.checkout-container');
            container.innerHTML = `
                <div class="checkout-card" style="text-align: center; padding: 100px 40px;">
                    <div style="font-size: 4rem; color: var(--accent); margin-bottom: 30px;"><i class="fa-solid fa-circle-check"></i></div>
                    <h1 class="section-title">Order Confirmed!</h1>
                    <p style="font-size: 1.2rem; margin-bottom: 40px;">Thank you ${document.getElementById('custName').value}. Your order is being processed and will reach you within 2-4 hours.</p>
                    <button class="cta-primary" onclick="window.location.reload()">Back to Home</button>
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

init();
