(() => {
  'use strict';

  /* ---------- Data ---------- */
  const img = (id, w = 800) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

  const FOODS = [
    /* ---- Nigerian favourites ---- */
    { id: 13, name: 'Party Jollof Rice', category: 'Nigerian', price: 4500, rating: 4.9,
      desc: 'Smoky party-style jollof with grilled fish, skewers and fresh vegetables.', img: img('photo-1665332195309-9d75071138f0') },
    { id: 14, name: 'Egusi Soup', category: 'Nigerian', price: 5500, rating: 4.8,
      desc: 'Rich melon-seed soup with assorted meats, stockfish and palm oil.', img: img('photo-1763048443535-1243379234e2') },
    { id: 15, name: 'Efo Riro', category: 'Nigerian', price: 5000, rating: 4.7,
      desc: 'Leafy spinach stew simmered with peppers, locust beans and smoked fish.', img: img('photo-1604329760661-e71dc83f8f26') },
    { id: 16, name: 'Goat Meat Pepper Soup', category: 'Nigerian', price: 4500, rating: 4.8,
      desc: 'Spicy, aromatic broth with tender goat meat and native spices.', img: img('photo-1708782344071-35ed44b849a9') },
    { id: 17, name: 'Fried Rice & Chicken', category: 'Nigerian', price: 5000, rating: 4.6,
      desc: 'Veggie-packed Nigerian fried rice served with crispy fried chicken.', img: img('photo-1603496987674-79600a000f55') },
    { id: 18, name: 'Ofada Rice & Ayamase', category: 'Nigerian', price: 4800, rating: 4.7,
      desc: 'Local ofada rice with fiery green pepper ayamase stew.', img: img('photo-1708782344137-21c48d98dfcc') },
    { id: 19, name: 'Grilled Fish & Dodo', category: 'Nigerian', price: 7500, rating: 4.8,
      desc: 'Charcoal-grilled fish with fried ripe plantain, onions and lime.', img: img('photo-1783408356251-f4953f943bb2') },
    { id: 20, name: 'Beef Suya', category: 'Nigerian', price: 3500, rating: 4.9,
      desc: 'Thinly sliced beef skewers rubbed in spicy yaji, served with onions.', img: img('photo-1555939594-58d7cb561ad1') },
    { id: 21, name: 'Dodo (Fried Plantain)', category: 'Nigerian', price: 1800, rating: 4.6,
      desc: 'Sweet ripe plantain, fried golden and caramelised at the edges.', img: img('photo-1540714605746-4f474eefc6d4') },
    { id: 22, name: 'Puff Puff', category: 'Nigerian', price: 1500, rating: 4.7,
      desc: 'Soft, golden fried dough balls dusted lightly with sugar.', img: img('photo-1767324672458-7dec3a2acffa') },

    /* ---- Continental ---- */
    { id: 1, name: 'Truffle Mushroom Pasta', category: 'Mains', price: 12500, rating: 4.8,
      desc: 'Hand-cut tagliatelle, wild mushrooms and shaved black truffle.', img: img('photo-1473093295043-cdd812d0e601') },
    { id: 2, name: 'Seared Atlantic Salmon', category: 'Mains', price: 15000, rating: 4.9,
      desc: 'Crisp-skin salmon, lemon beurre blanc and charred asparagus.', img: img('photo-1467003909585-2f8a72700288') },
    { id: 3, name: 'Grilled Ribeye Steak', category: 'Mains', price: 22000, rating: 4.9,
      desc: '10 oz ribeye, garlic butter, rosemary fries and peppercorn jus.', img: img('photo-1544025162-d76694265947') },
    { id: 4, name: 'Maison Burger', category: 'Mains', price: 9500, rating: 4.7,
      desc: 'Dry-aged beef, aged cheddar, pickles and house brioche bun.', img: img('photo-1568901346375-23c9450c58cd') },
    { id: 5, name: 'Wood-Fired Margherita', category: 'Pizza', price: 8500, rating: 4.6,
      desc: 'San Marzano tomato, fior di latte and fresh basil.', img: img('photo-1565299624946-b28f40a0ae38') },
    { id: 6, name: 'Garden Harvest Salad', category: 'Starters', price: 6500, rating: 4.5,
      desc: 'Seasonal greens, heirloom tomato, goat cheese and citrus vinaigrette.', img: img('photo-1540189549336-e6e99c3679fe') },
    { id: 7, name: 'Charred Skewer Platter', category: 'Starters', price: 7500, rating: 4.6,
      desc: 'Herb-marinated skewers with smoked yogurt and flatbread.', img: img('photo-1555939594-58d7cb561ad1') },
    { id: 8, name: 'Avocado Egg Toast', category: 'Starters', price: 5500, rating: 4.4,
      desc: 'Sourdough, smashed avocado, soft egg and chili flakes.', img: img('photo-1482049016688-2d3e1b311543') },
    { id: 9, name: 'Dark Chocolate Cake', category: 'Desserts', price: 5000, rating: 4.9,
      desc: 'Molten center, vanilla cream and cocoa nib crumble.', img: img('photo-1578985545062-69928b1d9587') },
    { id: 10, name: 'Berry Cream Dessert', category: 'Desserts', price: 4500, rating: 4.7,
      desc: 'Whipped mascarpone with macerated seasonal berries.', img: img('photo-1488477181946-6428a0291777') },
    { id: 11, name: 'Glazed Brioche Donuts', category: 'Desserts', price: 4000, rating: 4.5,
      desc: 'Warm brioche donuts with vanilla glaze, served in threes.', img: img('photo-1551024601-bec78aea704b') },
    { id: 12, name: 'Fluffy Pancake Stack', category: 'Brunch', price: 6000, rating: 4.6,
      desc: 'Buttermilk pancakes, maple butter and fresh berries.', img: img('photo-1567620905732-2d1ec7ab7445') }
  ];

  const CATEGORIES = ['All', ...new Set(FOODS.map(f => f.category))];
  const SERVICE_RATE = 0.08;
  const DELIVERY_FEE = 1500;
  const FREE_DELIVERY_OVER = 30000;
  const STORE_KEY = 'maison-table-v1';

  /* ---------- State ---------- */
  const defaults = {
    cart: {},          // { [foodId]: qty }
    favorites: [],     // [foodId]
    settings: { contactless: false, updates: true, darkMode: false },
    profile: { name: 'Jordan Davis', phone: '+1 555 0187', address: '84 Market Street, Suite 7' }
  };

  const state = load();
  let activeCategory = 'All';
  let searchTerm = '';

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && typeof saved === 'object') {
        return {
          cart: saved.cart || {},
          favorites: saved.favorites || [],
          settings: { ...defaults.settings, ...saved.settings },
          profile: { ...defaults.profile, ...saved.profile }
        };
      }
    } catch (_) { /* storage unavailable or corrupt */ }
    return structuredClone(defaults);
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) { /* ignore */ }
  }

  /* ---------- Helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const money = n => `₦${Math.round(n).toLocaleString('en-NG')}`;
  const findFood = id => FOODS.find(f => f.id === Number(id));
  const isFav = id => state.favorites.includes(Number(id));
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#ddd1c2"/>' +
    '<text x="200" y="158" font-family="sans-serif" font-size="20" text-anchor="middle" fill="#786e62">Maison Table</text></svg>');

  let toastTimer;
  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  /* ---------- Navigation ---------- */
  function showPage(name) {
    if (!$(`#${name}.page`)) name = 'home';
    $$('.page').forEach(p => p.classList.toggle('active', p.id === name));
    $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === name));
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ---------- Rendering ---------- */
  function renderCategories() {
    $('#categoryList').innerHTML = CATEGORIES.map(c =>
      `<button class="category-btn${c === activeCategory ? ' active' : ''}" data-category="${esc(c)}">${esc(c)}</button>`
    ).join('');
  }

  function cardHTML(food) {
    const fav = isFav(food.id);
    return `
      <article class="food-card" data-id="${food.id}">
        <div class="food-media">
          <img src="${food.img}" alt="${esc(food.name)}" loading="lazy">
          <button class="favorite-btn${fav ? ' active' : ''}" data-action="fav" aria-pressed="${fav}"
                  aria-label="${fav ? 'Remove from' : 'Add to'} favorites">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.8-8-11a4.7 4.7 0 0 1 8-3.3A4.7 4.7 0 0 1 20 10c0 6.2-8 11-8 11Z"/></svg>
          </button>
        </div>
        <div class="food-body">
          <div class="food-meta">
            <h3 class="food-title">${esc(food.name)}</h3>
            <span class="rating">★ ${food.rating.toFixed(1)}</span>
          </div>
          <p class="food-description">${esc(food.desc)}</p>
          <div class="card-footer"><span class="price">${money(food.price)}</span></div>
          <div class="card-actions">
            <button class="btn primary" data-action="add">Add to Cart</button>
            <button class="btn subtle" data-action="buy">Checkout</button>
          </div>
        </div>
      </article>`;
  }

  function emptyHTML(title, text) {
    return `<div class="empty-state"><h2>${esc(title)}</h2><p>${esc(text)}</p></div>`;
  }

  function renderFoods() {
    const term = searchTerm.trim().toLowerCase();
    const list = FOODS.filter(f =>
      (activeCategory === 'All' || f.category === activeCategory) &&
      (!term || `${f.name} ${f.desc} ${f.category}`.toLowerCase().includes(term)));
    $('#foodGrid').innerHTML = list.length
      ? list.map(cardHTML).join('')
      : emptyHTML('No dishes found', 'Try a different search or category.');
  }

  function renderFavorites() {
    const list = state.favorites.map(findFood).filter(Boolean);
    $('#favoritesGrid').innerHTML = list.length
      ? list.map(cardHTML).join('')
      : emptyHTML('No favorites yet', 'Tap the heart on any dish to save it here.');
  }

  function cartEntries() {
    return Object.entries(state.cart)
      .map(([id, qty]) => ({ food: findFood(id), qty }))
      .filter(e => e.food && e.qty > 0);
  }

  function calcTotals(subtotal) {
    const service = Math.round(subtotal * SERVICE_RATE);
    const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
    return { subtotal, service, delivery, total: subtotal + service + delivery };
  }

  function totals() {
    return calcTotals(cartEntries().reduce((s, e) => s + e.food.price * e.qty, 0));
  }

  function renderCart() {
    const entries = cartEntries();
    $('#cartItems').innerHTML = entries.length
      ? entries.map(({ food, qty }) => `
          <div class="cart-row" data-id="${food.id}">
            <img src="${food.img}" alt="${esc(food.name)}">
            <div>
              <h3>${esc(food.name)}</h3>
              <p>${money(food.price)} each</p>
              <div class="qty-controls">
                <button data-action="dec" aria-label="Decrease quantity">−</button>
                <span aria-live="polite">${qty}</span>
                <button data-action="inc" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <div class="cart-price">
              <span>${money(food.price * qty)}</span>
              <button class="remove-btn" data-action="remove">Remove</button>
            </div>
          </div>`).join('')
      : emptyHTML('Your cart is empty', 'Add a few dishes from the menu to get started.');

    const t = totals();
    $('#subtotal').textContent = money(t.subtotal);
    $('#serviceFee').textContent = money(t.service);
    $('#deliveryFee').textContent = t.delivery === 0 && t.subtotal > 0 ? 'Free' : money(t.delivery);
    $('#totalCost').textContent = money(t.total);
    $('#checkoutBtn').disabled = entries.length === 0;
    $('#checkoutBtn').style.opacity = entries.length ? '' : '0.55';
  }

  function updateBadges() {
    const count = cartEntries().reduce((s, e) => s + e.qty, 0);
    const favs = state.favorites.length;
    $('#cartCount').textContent = count;
    $('#cartCount').hidden = count === 0;
    $('#favCount').textContent = favs;
    $('#favCount').hidden = favs === 0;
    $('#profileFavCount').textContent = state.favorites.length;
  }

  function renderAll() {
    renderFoods();
    renderFavorites();
    renderCart();
    updateBadges();
  }

  /* ---------- Actions ---------- */
  function addToCart(id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    save(); renderCart(); updateBadges();
    toast(`${findFood(id).name} added to cart`);
  }

  function changeQty(id, delta) {
    const next = (state.cart[id] || 0) + delta;
    if (next <= 0) delete state.cart[id]; else state.cart[id] = next;
    save(); renderCart(); updateBadges();
  }

  function removeFromCart(id) {
    delete state.cart[id];
    save(); renderCart(); updateBadges();
  }

  function toggleFav(id) {
    id = Number(id);
    const food = findFood(id);
    if (isFav(id)) {
      state.favorites = state.favorites.filter(f => f !== id);
      toast(`${food.name} removed from favorites`);
    } else {
      state.favorites.push(id);
      toast(`${food.name} saved to favorites`);
    }
    save(); renderFoods(); renderFavorites(); updateBadges();
  }

  // Order a single dish right away, without touching the cart or opening it
  function quickOrder(id) {
    const food = findFood(id);
    if (!food) return;
    const { total } = calcTotals(food.price);
    toast(`Order placed! ${food.name} · ${money(total)}`);
  }

  function checkout() {
    const entries = cartEntries();
    if (!entries.length) return toast('Your cart is empty');
    const { total } = totals();
    state.cart = {};
    save(); renderCart(); updateBadges();
    toast(`Order placed! Total ${money(total)}`);
    showPage('home');
  }

  function applySettings() {
    document.body.classList.toggle('dark', !!state.settings.darkMode);
    $$('[data-setting]').forEach(input => { input.checked = !!state.settings[input.dataset.setting]; });
    $$('[data-profile]').forEach(input => { input.value = state.profile[input.dataset.profile] || ''; });
    const initials = state.profile.name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    $('.avatar').textContent = initials || 'MT';
    $('.profile-card h2').textContent = state.profile.name || 'Guest';
  }

  /* ---------- Events ---------- */
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-page]');
    if (nav) return showPage(nav.dataset.page);

    const link = e.target.closest('[data-page-link]');
    if (link) return showPage(link.dataset.pageLink);

    if (e.target.closest('[data-scroll-menu]')) {
      showPage('home');
      return $('#menu').scrollIntoView({ behavior: 'smooth' });
    }

    if (e.target.closest('.brand')) {
      e.preventDefault();
      return showPage('home');
    }

    const cat = e.target.closest('[data-category]');
    if (cat) {
      activeCategory = cat.dataset.category;
      renderCategories();
      return renderFoods();
    }

    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
      const holder = actionBtn.closest('[data-id]');
      const id = holder && holder.dataset.id;
      switch (actionBtn.dataset.action) {
        case 'add': return addToCart(id);
        case 'buy': return quickOrder(id);
        case 'fav': return toggleFav(id);
        case 'inc': return changeQty(id, 1);
        case 'dec': return changeQty(id, -1);
        case 'remove': return removeFromCart(id);
      }
    }
  });

  $('#searchInput').addEventListener('input', e => {
    searchTerm = e.target.value;
    renderFoods();
  });

  $('#checkoutBtn').addEventListener('click', checkout);

  $$('[data-setting]').forEach(input => {
    input.addEventListener('change', () => {
      state.settings[input.dataset.setting] = input.checked;
      save();
      if (input.dataset.setting === 'darkMode') applySettings();
      toast('Setting updated');
    });
  });

  $('#saveProfileBtn').addEventListener('click', () => {
    $$('[data-profile]').forEach(input => { state.profile[input.dataset.profile] = input.value.trim(); });
    save(); applySettings();
    toast('Profile saved');
  });

  // Fallback for any image that fails to load (error events don't bubble, so use capture)
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && e.target.src !== FALLBACK_IMG) e.target.src = FALLBACK_IMG;
  }, true);

  /* ---------- Init ---------- */
  renderCategories();
  renderAll();
  applySettings();
})();
