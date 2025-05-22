// Product-specific pricing data
const productPricing = {
    'PoloCottonSingle': { name: 'Polo T-Shirt (Cotton 220gsm Single Color)', prices: { '1': 32, '5': 160, '10': 320 } },
    'PoloCottonDual': { name: 'Polo T-Shirt (Cotton 220gsm Dual/Multi Color)', prices: { '1': 35, '5': 175, '10': 350 } },
    'PoloDrifitSingle': { name: 'Polo T-Shirt (Cotton Drifit 220gsm Single Color)', prices: { '1': 40, '5': 200, '10': 400 } },
    'PoloDrifitDual': { name: 'Polo T-Shirt (Cotton Drifit 220gsm Dual/Multi Color)', prices: { '1': 45, '5': 225, '10': 450 } },
    'SafetyVestGeneral': { name: 'Safety Vest (General)', prices: { '1': 15, '5': 75, '10': 150 } },
    'SafetyVestSupervisor': { name: 'Safety Vest (Supervisor)', prices: { '1': 20, '5': 100, '10': 200 } },
    'SafetyVestEngineer': { name: 'Safety Vest (Engineer)', prices: { '1': 25, '5': 125, '10': 250 } },
    'Caps': { name: 'Caps', prices: { '1': 15, '5': 75, '10': 150 } },
    'BC350': { name: 'Business Cards (Matt Lamination 350gsm)', prices: { '1000': 100, '2000': 200, '5000': 500 } },
    'BC400': { name: 'Business Cards (Round Corners Matt Lamination 400gsm)', prices: { '1000': 150, '2000': 300, '5000': 750 } },
    'BC400UV': { name: 'Business Cards (Rounded Corner Spot UV Matt Lamination 400gsm)', prices: { '1000': 200, '2000': 400, '5000': 1000 } },
    'BC760': { name: 'Business Cards (Rounded Corner Spot UV Velvet Lamination 760mic)', prices: { '1000': 300, '2000': 600, '5000': 1500 } },
    'BC760Glossy': { name: 'Business Cards (Rounded Corner PETT Glossy Lamination 760mic)', prices: { '1000': 300, '2000': 600, '5000': 1500 } },
    'BCGoldUV': { name: 'Business Cards (Rounded Corner Gold Foil Spot UV Velvet Lamination)', prices: { '1000': 400, '2000': 800, '5000': 2000 } },
    'BCGoldGlossy': { name: 'Business Cards (Rounded Corner PETT Gold Glossy Lamination 760mic)', prices: { '1000': 400, '2000': 800, '5000': 2000 } },
    'FlyerA6': { name: 'Flyer A6 (14.85×10.5 cm, Glossy Paper 170gsm)', prices: { '500': 100, '1000': 120, '2000': 150 } },
    'FlyerA5': { name: 'Flyer A5 (14.85×21.0 cm, Glossy Paper 170gsm)', prices: { '500': 125, '1000': 175, '2000': 250 } },
    'FlyerA4': { name: 'Flyer A4 (29.7×21.0 cm, Glossy Paper 170gsm)', prices: { '500': 200, '1000': 300, '2000': 400 } },
    'FlyerA3': { name: 'Flyer A3 (29.7×42.0 cm, Glossy Paper 170gsm)', prices: { '500': 300, '1000': 400, '2000': 700 } },
    'FlyerDL': { name: 'Flyer DL (Glossy Paper 170gsm)', prices: { '1000': 125, '2000': 200, '5000': 350 } },
    'EnvelopeDL': { name: 'Envelope DL (269×263 mm, Wood Free Paper 120gsm)', prices: { '1000': 450, '2000': 750 } },
    'EnvelopeA5': { name: 'Envelope A5 (318×379 mm, Wood Free Paper 120gsm)', prices: { '1000': 550, '2000': 850 } },
    'EnvelopeA4': { name: 'Envelope A4 (485×388 mm, Wood Free Paper 120gsm)', prices: { '1000': 1250, '2000': 1800 } },
    'DoorHangerGlossy': { name: 'Door Hanger (Glossy 170gsm)', prices: { '1000': 200, '2000': 300, '5000': 700 } },
    'DoorHangerMatt': { name: 'Door Hanger (Matt Lamination 350gsm)', prices: { '1000': 400, '2000': 800, '5000': 2000 } },
    'Sticker8x12': { name: 'Sticker Without Lamination (8x12 cm)', prices: { '1000': 150, '5000': 350, '10000': 750 } },
    'Sticker23x17': { name: 'Sticker Without Lamination (23x17 cm)', prices: { '1000': 300, '5000': 750, '10000': 1500 } }
};

// Get the current page's product ID from the file name
const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
const product = productPricing[currentPage] || { name: 'Unknown Product', prices: { '1': 0 } };

function updatePrice() {
    const quantity = document.getElementById('quantity')?.value;
    const price = product.prices[quantity] || 0;
    const priceElement = document.getElementById('price');
    if (priceElement) {
        priceElement.textContent = `AED ${price}`;
    }
    updateWhatsAppLink();
}

function updateWhatsAppLink() {
    const quantity = document.getElementById('quantity')?.value;
    if (quantity) {
        const message = `Hello, I would like to order ${quantity} pcs of ${product.name}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/971526353298?text=${encodedMessage}`;
        const whatsappOrder = document.getElementById('whatsapp-order');
        if (whatsappOrder) {
            whatsappOrder.setAttribute('href', whatsappLink);
        }
    }
}

// Particles.js
const canvas = document.getElementById('particles');
const ctx = canvas?.getContext('2d');
if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].size <= 0.2) {
                particlesArray.splice(i, 1);
                i--;
                particlesArray.push(new Particle());
            }
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Features Slider Continuous Loop
const featuresSlider = document.getElementById('features-slider');
const featureItems = document.querySelectorAll('.feature-item');
const totalFeatureItems = featureItems.length; // 8 items
const playPauseBtn = document.getElementById('features-play-pause');
let isFeaturesPaused = false;

if (featuresSlider && featureItems.length > 0) {
    // Clone all items to create a seamless loop
    for (let i = 0; i < totalFeatureItems; i++) {
        const clone = featureItems[i].cloneNode(true);
        featuresSlider.appendChild(clone);
    }

    // Pause on hover
    featuresSlider.addEventListener('mouseenter', () => {
        if (!isFeaturesPaused) {
            featuresSlider.classList.add('paused');
        }
    });

    // Resume on mouse leave
    featuresSlider.addEventListener('mouseleave', () => {
        if (!isFeaturesPaused) {
            featuresSlider.classList.remove('paused');
        }
    });

    // Pause on touchstart, resume on touchend
    featuresSlider.addEventListener('touchstart', () => {
        if (!isFeaturesPaused) {
            featuresSlider.classList.add('paused');
        }
    });

    featuresSlider.addEventListener('touchend', () => {
        if (!isFeaturesPaused) {
            featuresSlider.classList.remove('paused');
        }
    });

    // Play/Pause button functionality
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            isFeaturesPaused = !isFeaturesPaused;
            if (isFeaturesPaused) {
                featuresSlider.classList.add('paused');
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                featuresSlider.classList.remove('paused');
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
        });
    }
}

// Product Slider Continuous Loop
const productsSlider = document.getElementById('products-slider');
const productSlides = document.querySelectorAll('.product-slide');
const totalProductSlides = productSlides.length; // 27 slides

if (productsSlider && productSlides.length > 0) {
    // Clone all items to create a seamless loop
    for (let i = 0; i < totalProductSlides; i++) {
        const clone = productSlides[i].cloneNode(true);
        productsSlider.appendChild(clone);
    }

    // Pause on hover
    productsSlider.addEventListener('mouseenter', () => {
        productsSlider.classList.add('paused');
    });

    // Resume on mouse leave
    productsSlider.addEventListener('mouseleave', () => {
        productsSlider.classList.remove('paused');
    });

    // Pause on touchstart, resume on touchend
    productsSlider.addEventListener('touchstart', () => {
        productsSlider.classList.add('paused');
    });

    productsSlider.addEventListener('touchend', () => {
        productsSlider.classList.remove('paused');
    });
}

// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    let slideshowInterval = setInterval(nextSlide, slideInterval);

    document.querySelector('.hero-slider')?.addEventListener('mouseenter', () => {
        clearInterval(slideshowInterval);
    });

    document.querySelector('.hero-slider')?.addEventListener('mouseleave', () => {
        slideshowInterval = setInterval(nextSlide, slideInterval);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(slideshowInterval);
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            slideshowInterval = setInterval(nextSlide, slideInterval);
        });
    });

    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    updatePrice();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isActive = nav.classList.contains('active');
            mobileMenuToggle.innerHTML = `<i class="fas ${isActive ? 'fa-times' : 'fa-bars'}"></i>`;
        });
    }
});