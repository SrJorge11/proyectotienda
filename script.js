const products = [
    { 
        id: 1,
        name: "Camiseta Casual", 
        price: 500,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", 
        category: "playeras",
        colors: [
            { name: "rojo", hex: "#e74c3c" },
            { name: "azul", hex: "#3498db" },
            { name: "negro", hex: "#2c3e50" },
            { name: "amarillo", hex: "#f1c40f" },
            { name: "verde", hex: "#008f39" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1583744946564-b52ac1c389c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1562157873-8182c3e0d945?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nEsta camiseta casual es ideal para cualquier ocasión. Confeccionada en algodón 100% orgánico, ofrece suavidad y transpirabilidad para un estilo fresco y cómodo.",
        details: {
            material: "Mezcla de algodón y bambú",
            care: "Lavar a mano con agua tibia, secar al aire libre",
            origin: "Fabricado en Colombia",
            shipping: "Envío en 5-7 días hábiles"
        }
    },
    { 
        id: 2,
        name: "Jeans Modernos", 
        price: 1000,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", 
        category: "pantalones",
        colors: [
            { name: "azul", hex: "#3498db" },
            { name: "negro", hex: "#2c3e50" },
            { name: "gris", hex: "#7f8c8d" }
        ],
        sizes: ["28", "30", "32", "34", "36"],
        extraImages: [
            "https://images.unsplash.com/photo-1602293589930-45aad59ba4ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1594058573833-dbf0160c2f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nJeans modernos con un corte slim que combina estilo y versatilidad. Fabricados con denim de alta calidad, garantizan durabilidad y un ajuste perfecto.",
        details: {
            material: "Denim elástico premium",
            care: "Lavar a máquina a baja temperatura, no planchar",
            origin: "Hecho en Italia",
            shipping: "Entrega en 2-4 días hábiles"
        }
    },
    { 
        id: 3,
        name: "Chaqueta Urbana", 
        price: 1600,
        image: "https://makeyourowncode.com/wp-content/uploads/2023/03/chaqueta-urbana-para-hombre-Aelfric-Eden.jpg", 
        category: "chaquetas",
        colors: [
            { name: "negro", hex: "#2c3e50" },
            { name: "caqui", hex: "#8e7c5a" },
            { name: "azul marino", hex: "#1b263b" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1604644401890-925ff4e6e5e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1574258495970-6b4dedaf8c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1544027995-7d7e7e807e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nEleva tu look con esta chaqueta urbana. Diseñada con materiales resistentes al agua y un forro acolchado, es perfecta para días frescos con estilo.",
        details: {
            material: "Poliéster reciclado y forro polar",
            care: "Limpieza en seco recomendada",
            origin: "Producido en Portugal",
            shipping: "Envío express en 1-3 días"
        }
    },
    { 
        id: 4,
        name: "Sudadera Cómoda", 
        price: 800,
        image: "https://rintin.mx/wp-content/uploads/2024/10/14.jpeg", 
        category: "playeras",
        colors: [
            { name: "gris", hex: "#7f8c8d" },
            { name: "negro", hex: "#2c3e50" },
            { name: "azul", hex: "#3498db" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1605405748313-a416f8c03554?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nEsta sudadera es sinónimo de comodidad. Hecha de una mezcla de algodón y poliéster, es ideal para relajarte o salir con un estilo desenfadado.",
        details: {
            material: "Algodón reciclado y poliéster",
            care: "Lavar a máquina con colores similares, secar a baja temperatura",
            origin: "Fabricado en Turquía",
            shipping: "Entrega en 4-6 días hábiles"
        }
    },
    { 
        id: 5,
        name: "Calcetines Deportivos", 
        price: 200,
        image: "https://i5.walmartimages.com/asr/913d0715-75d6-40e2-88ce-d59e43112476.a889983f5e39eda07b676174214a7aba.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", 
        category: "calcetines",
        colors: [
            { name: "blanco", hex: "#ecf0f1" },
            { name: "negro", hex: "#2c3e50" },
            { name: "gris", hex: "#7f8c8d" },
            { name: "azul", hex: "#3498db" }
        ],
        sizes: ["Única"],
        extraImages: [
            "https://images.unsplash.com/photo-1600262764749-5b8721e9e7b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1621432940997-0a4b42d42e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1599744253777-fea2d01c7e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nCalcetines deportivos diseñados para el rendimiento. Con tecnología de absorción de humedad, mantienen tus pies frescos durante cualquier actividad.",
        details: {
            material: "Nailon y elastano",
            care: "Lavar a máquina, no usar secadora",
            origin: "Hecho en Corea del Sur",
            shipping: "Envío en 5-8 días hábiles"
        }
    },
    { 
        id: 6,
        name: "Pantalón Cargo", 
        price: 1200,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", 
        category: "pantalones",
        colors: [
            { name: "verde", hex: "#2ecc71" },
            { name: "caqui", hex: "#8e7c5a" },
            { name: "negro", hex: "#2c3e50" }
        ],
        sizes: ["28", "30", "32", "34", "36"],
        extraImages: [
            "https://images.unsplash.com/photo-1624378434875-9187a7a1f61a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1622470953794-2b1eb5087676?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1594058573833-dbf0160c2f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nPantalones cargo con un diseño funcional y moderno. Sus múltiples bolsillos y tejido resistente los hacen ideales para aventuras urbanas.",
        details: {
            material: "Lona resistente al desgaste",
            care: "Lavar a máquina en ciclo delicado, planchar a baja temperatura",
            origin: "Producido en Vietnam",
            shipping: "Entrega en 3-6 días hábiles"
        }
    },
    { 
        id: 7,
        name: "Camiseta Estampada", 
        price: 600,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", 
        category: "playeras",
        colors: [
            { name: "blanco", hex: "#ecf0f1" },
            { name: "negro", hex: "#2c3e50" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nCamiseta estampada con diseños únicos que destacan tu personalidad. Fabricada en algodón suave para un ajuste cómodo todo el día.",
        details: {
            material: "Algodón peinado",
            care: "Lavar a mano, no usar lejía",
            origin: "Hecho en India",
            shipping: "Envío en 4-7 días hábiles"
        }
    },
    { 
        id: 8,
        name: "Calcetines Casuales", 
        price: 160,
        image: "https://i.etsystatic.com/25690613/r/il/a67804/2792875573/il_570xN.2792875573_lb4v.jpg", 
        category: "calcetines",
        colors: [
            { name: "gris", hex: "#7f8c8d" },
            { name: "azul", hex: "#3498db" },
            { name: "rojo", hex: "#e74c3c" },
            { name: "verde", hex: "#2ecc71" }
        ],
        sizes: ["Única"],
        extraImages: [
            "https://images.unsplash.com/photo-1611601322175-ef8ec8c25f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1621432940997-0a4b42d42e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1599744253777-fea2d01c7e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nCalcetines casuales perfectos para el uso diario. Confeccionados con una mezcla de algodón transpirable para mantener tus pies cómodos.",
        details: {
            material: "Algodón y poliéster reciclado",
            care: "Lavar a máquina, secar al aire",
            origin: "Fabricado en China",
            shipping: "Entrega en 6-9 días hábiles"
        }
    },
    { 
        id: 9,
        name: "Pantalón Deportivo", 
        price: 900,
        image: "https://images.unsplash.com/photo-1552066892-6f75e4f36a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", 
        category: "pantalones",
        colors: [
            { name: "negro", hex: "#2c3e50" },
            { name: "gris", hex: "#7f8c8d" },
            { name: "azul marino", hex: "#1b263b" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1591047139687-1c706b6b3e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1605514449459-5b6d08ca8e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nPantalón deportivo diseñado para máxima comodidad y movilidad. Perfecto para entrenamientos o uso casual, con tejido elástico y transpirable.",
        details: {
            material: "Poliéster y elastano",
            care: "Lavar a máquina en ciclo suave, no usar secadora",
            origin: "Fabricado en Vietnam",
            shipping: "Envío en 4-6 días hábiles"
        }
    },
    { 
        id: 10,
        name: "Reloj Casual", 
        price: 1450,
        image: "https://resources.sears.com.mx/medios-plazavip/mkt/63162277175c9_img_20220905_112021_-1080_x_1080_p-xel-jpg.jpg?scale=500&qlty=75", 
        category: "accesorios",
        colors: [
            { name: "negro", hex: "#2c3e50" },
            { name: "gris", hex: "#7f8c8d" },
            { name: "azul marino", hex: "#1b263b" }
        ],
        sizes: ["S", "M", "L", "XL"],
        extraImages: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1591047139687-1c706b6b3e25?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60",
            "https://images.unsplash.com/photo-1605514449459-5b6d08ca8e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=60"
        ],
        description: "¡Solo quedan 5 unidades!\n\nReloj casual con un diseño elegante y moderno. Perfecto para cualquier ocasión, con materiales duraderos y un acabado sofisticado.",
        details: {
            material: "Acero inoxidable y cuero",
            care: "Limpiar con un paño suave, evitar contacto con agua",
            origin: "Fabricado en Japón",
            shipping: "Envío en 4-6 días hábiles"
        }
    }
];

let maxPrice = Math.max(...products.map(p => p.price));

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    if (productGrid) {
        displayProducts("all");
        setupEventListeners();
        updatePriceFilter();
        animateTitle("hero-title");
        animateTitle("products-title");
        setupCarousel();
    }
    if (document.getElementById("cartGrid")) {
        displayCart();
    }
});

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function displayProducts(category, searchTerm = "", maxPriceFilter = maxPrice) {
    if (!productGrid) return;

    productGrid.innerHTML = "";
    loader.style.display = "block";

    setTimeout(() => {
        const filteredProducts = Array.from(
            new Map(
                products
                    .filter(product => {
                        const matchesCategory = category === "all" || product.category === category;
                        const matchesSearch = searchTerm === "" || 
                            product.name.toLowerCase().includes(searchTerm.toLowerCase());
                        const matchesPrice = product.price <= parseFloat(maxPriceFilter);
                        
                        return matchesCategory && matchesSearch && matchesPrice;
                    })
                    .map(product => [product.id, product])
            ).values()
        );

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = `<p class="no-products">No se encontraron productos que coincidan con tu búsqueda.</p>`;
            loader.style.display = "none";
            return;
        }

        filteredProducts.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.dataset.id = product.id;
            productCard.style.animationDelay = `${index * 0.1}s`;
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <div class="product-actions">
                        <a href="product.html?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}&category=${product.category}" class="btn">Ver Detalles</a>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });

        loader.style.display = "none";
    }, 500);
}

function setupEventListeners() {
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            displayProducts(category, searchInput.value, priceRange.value);
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener("input", debounce(() => {
            const activeCategory = document.querySelector(".filter-btn.active").getAttribute("data-category");
            displayProducts(activeCategory, searchInput.value, priceRange.value);
        }, 300));
    }
    
    if (priceRange) {
        const debouncedPriceFilter = debounce(() => {
            updatePriceFilter();
            const activeCategory = document.querySelector(".filter-btn.active").getAttribute("data-category");
            displayProducts(activeCategory, searchInput.value, priceRange.value);
        }, 300);
        priceRange.addEventListener("input", debouncedPriceFilter);
    }

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }
}

function updatePriceFilter() {
    if (priceRange && priceValue) {
        priceRange.max = maxPrice;
        priceValue.textContent = `Hasta $${parseFloat(priceRange.value).toFixed(2)}`;
    }
}

function animateTitle(elementId) {
    const title = document.getElementById(elementId);
    if (!title) return;
    const text = title.textContent;
    title.textContent = "";
    
    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i * 0.05}s`;
        title.appendChild(span);
    });
}

function setupCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (!carouselItems.length) return;
    let currentItem = 0;
    setInterval(() => {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }, 5000);
}

function displayCart() {
    const cartGrid = document.getElementById("cartGrid");
    const cart = loadCart();
    
    if (!cartGrid) return;
    
    cartGrid.innerHTML = '';
    
    if (cart.length === 0) {
        cartGrid.innerHTML = '<p class="no-products">Tu carrito está vacío.</p>';
        updateBuyButton(cart);
        return;
    }

    cart.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <p>Talla: ${product.size || 'No especificada'}</p>
                <p>Color: ${product.color || 'No especificado'}</p>
                <div class="quantity-selector">
                    <button class="quantity-btn decrease-qty" data-index="${index}" ${product.quantity === 1 ? 'disabled' : ''}>-</button>
                    <span class="quantity-value">${product.quantity}</span>
                    <button class="quantity-btn increase-qty" data-index="${index}">+</button>
                </div>
                <button class="btn remove-item" data-index="${index}">Eliminar</button>
            </div>
        `;
        cartGrid.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const totalElement = document.createElement("h3");
    totalElement.classList.add("cart-total");
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)} MXN`;
    cartGrid.appendChild(totalElement);

    document.querySelectorAll(".decrease-qty").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("data-index"));
            updateQuantity(index, -1);
        });
    });

    document.querySelectorAll(".increase-qty").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("data-index"));
            updateQuantity(index, 1);
        });
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", handleRemove);
    });

    updateBuyButton(cart);

    const clearCartBtn = document.getElementById("clearCart");
    if (clearCartBtn) {
        clearCartBtn.removeEventListener("click", clearCart);
        clearCartBtn.addEventListener("click", clearCart);
    }
}

function updateQuantity(index, change) {
    let cart = loadCart();
    const newQuantity = cart[index].quantity + change;
    if (newQuantity < 1) {
        showNotification('La cantidad mínima es 1. Usa "Eliminar" para quitar el producto.', 'error');
        return;
    }
    cart[index].quantity = newQuantity;
    saveCart(cart);
    displayCart();
    updateCartCount();
    showNotification(`Cantidad actualizada a ${newQuantity}`, 'success');
}

function handleRemove(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    removeFromCart(index);
}

function removeFromCart(index) {
    let cart = loadCart();
    const productName = cart[index].name;
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
    updateCartCount();
    showNotification(`${productName} eliminado del carrito`, 'success');
}

function clearCart() {
    saveCart([]);
    displayCart();
    updateCartCount();
    showNotification('Carrito vaciado', 'success');
}

function addToCart(product) {
    let cart = loadCart();
    
    const existingProduct = cart.find(item => 
        item.id === product.id && 
        item.size === product.size && 
        item.color === product.color
    );
    
    if (existingProduct) {
        existingProduct.quantity += product.quantity || 1;
    } else {
        cart.push({
            ...product,
            quantity: product.quantity || 1
        });
    }
    
    saveCart(cart);
    updateCartCount();
    showNotification(`${product.name} añadido al carrito`, 'success');
}

function updateCartCount() {
    const cartCounts = document.querySelectorAll(".cart-count");
    const cart = loadCart();
    
    cartCounts.forEach(count => {
        count.textContent = cart.length;
        count.style.display = cart.length > 0 ? "flex" : "none";
        if (cart.length > 0) {
            count.classList.add("pulse");
            setTimeout(() => count.classList.remove("pulse"), 500);
        }
    });
}

function updateBuyButton(cart) {
    const cartActions = document.querySelector(".cart-actions");
    let buyButton = document.getElementById("buyCartBtn");

    if (buyButton) {
        buyButton.remove();
    }

    if (cart.length === 0) return;

    buyButton = document.createElement("a");
    buyButton.id = "buyCartBtn";
    buyButton.classList.add("btn", "btn-whatsapp");
    buyButton.innerHTML = `<i class="fab fa-whatsapp"></i> Comprar ${cart.length === 1 ? 'este producto' : 'estos productos'}`;
    
    const phoneNumber = "5216251336363";
    let message = `¡Hola! Quiero comprar lo siguiente:\n\n`;
    cart.forEach((product, index) => {
        message += `${index + 1}. *${product.name}*\n`;
        message += `   - Precio: $${product.price.toFixed(2)}\n`;
        message += `   - Talla: ${product.size || 'No especificada'}\n`;
        message += `   - Color: ${product.color || 'No especificado'}\n`;
        message += `   - Cantidad: ${product.quantity}\n\n`;
    });
    message += `¿Podrías confirmarme la disponibilidad y los detalles de pago?`;

    buyButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    buyButton.target = "_blank";

    cartActions.appendChild(buyButton);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} notification-icon"></i>
            <span class="notification-message">${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add("show"), 10);
    
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function contactOwner() {
    const phoneNumber = "5216251336363";
    const message = `Hola, quiero contactar con TrendyWear para más información.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}

let isScrolling = false;
window.addEventListener("wheel", (event) => {
    if (window.scrollY < 100 && !isScrolling && event.deltaY > 0) {
        isScrolling = true;
        const productsSection = document.getElementById("products");
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => isScrolling = false, 1000);
    }
});