// Mock Data
const posts = [
    {
        id: 1,
        title: "The Evolution of UI Design",
        excerpt: "From skeuomorphism to glassmorphism, exploring the journey of user interface aesthetics.",
        category: "design",
        date: "Oct 24, 2024",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        likes: 124
    },
    {
        id: 2,
        title: "WebAssembly: The Next Frontier?",
        excerpt: "How WebAssembly is changing the performance landscape of web applications.",
        category: "tech",
        date: "Oct 22, 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        likes: 89
    },
    {
        id: 3,
        title: "Digital Minimalism in 2025",
        excerpt: "Why users are craving simpler, more focused digital experiences in a noisy world.",
        category: "culture",
        date: "Oct 20, 2024",
        image: "https://images.unsplash.com/photo-1499750310159-54f8f0ea06bf?auto=format&fit=crop&w=800&q=80",
        likes: 256
    },
    {
        id: 4,
        title: "Mastering CSS Grid Layout",
        excerpt: "A comprehensive guide to building complex layouts with ease using CSS Grid.",
        category: "tech",
        date: "Oct 18, 2024",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
        likes: 167
    },
    {
        id: 5,
        title: "Color Psychology in Branding",
        excerpt: "Understanding how color choices influence user perception and brand identity.",
        category: "design",
        date: "Oct 15, 2024",
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80",
        likes: 342
    },
    {
        id: 6,
        title: "The Rise of No-Code Tools",
        excerpt: "Empowering creators to build software without writing a single line of code.",
        category: "tech",
        date: "Oct 12, 2024",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        likes: 98
    }
];

// DOM Elements
const postsGrid = document.getElementById('posts-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// State
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    setupEventListeners();
    setupCustomCursor();
});

// Render Posts
function renderPosts() {
    postsGrid.innerHTML = '';

    const filteredPosts = posts.filter(post => {
        const matchesFilter = currentFilter === 'all' || post.category === currentFilter;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filteredPosts.length === 0) {
        postsGrid.innerHTML = '<p class="no-results">No stories found matching your criteria.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${post.image}" alt="${post.title}" class="card-image" loading="lazy">
                <span class="card-category">${post.category}</span>
            </div>
            <div class="card-content">
                <div class="card-date">${post.date}</div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-excerpt">${post.excerpt}</p>
                <div class="card-footer">
                    <a href="#" class="read-more">Read Story <i class="fas fa-arrow-right"></i></a>
                    <button class="like-btn" onclick="toggleLike(this, ${post.id})">
                        <i class="far fa-heart"></i>
                        <span>${post.likes}</span>
                    </button>
                </div>
            </div>
        `;
        postsGrid.appendChild(card);
    });
}

// Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderPosts();
    });

    // Filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter
            currentFilter = btn.dataset.filter;
            renderPosts();
        });
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Like Functionality
window.toggleLike = function (btn, id) {
    const icon = btn.querySelector('i');
    const countSpan = btn.querySelector('span');
    const isLiked = btn.classList.contains('liked');

    if (isLiked) {
        btn.classList.remove('liked');
        icon.classList.replace('fas', 'far');
        countSpan.textContent = parseInt(countSpan.textContent) - 1;
    } else {
        btn.classList.add('liked');
        icon.classList.replace('far', 'fas');
        countSpan.textContent = parseInt(countSpan.textContent) + 1;

        // Animation effect
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => icon.style.transform = 'scale(1)', 200);
    }
};

// Custom Cursor
function setupCustomCursor() {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Small delay for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects
    const clickables = document.querySelectorAll('a, button, input');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}
