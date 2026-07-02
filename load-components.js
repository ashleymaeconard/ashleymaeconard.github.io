/**
 * load-components.js
 * Loads shared navbar, hero, and footer into placeholder divs.
 * Uses ABSOLUTE paths so this works from any subdirectory (tab pages, etc.)
 */
(function () {
    'use strict';

    // Restore theme immediately (before paint) — respect system preference if no saved preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    // ---- Helper: fetch a component and insert it ----
    function loadComponent(id, url, callback) {
        const el = document.getElementById(id);
        if (!el) return; // placeholder doesn't exist on this page — skip silently
        fetch(url)
            .then(function (r) { return r.ok ? r.text() : ''; })
            .then(function (html) {
                el.innerHTML = html;
                if (callback) callback(el);
            })
            .catch(function () { /* network error — fail silently */ });
    }

    // ---- Load navbar ----
    loadComponent('navbar-placeholder', '/components/navbar.html', function () {
        setupNavbar();
    });

    // ---- Load hero (only on pages that have #hero-placeholder) ----
    loadComponent('hero-placeholder', '/components/hero.html', function () {
        // Hero loaded — nothing extra needed
    });

    // ---- Load footer ----
    loadComponent('footer-placeholder', '/components/footer.html', function () {
        // Footer loaded
    });

    // ---- Navbar interactivity ----
    function setupNavbar() {
        // Wire up nav links to correct pages
        var links = {
            'nav-home':          '/',
            'nav-publications':  '/tabs/publications/publications.html',
            'nav-experience':    '/tabs/experience/experience.html',
            'nav-leadership':    '/tabs/leadership/leadership.html',
            'nav-presentations': '/tabs/presentations/presentations.html',
            'nav-connect':       '/tabs/connect/connect.html'
        };

        Object.keys(links).forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.href = links[id];
        });

        // Mark current page as active
        var path = window.location.pathname;
        Object.keys(links).forEach(function (id) {
            var href = links[id];
            var el = document.getElementById(id);
            if (!el) return;
            if (
                (href === '/' && (path === '/' || path === '/index.html')) ||
                (href !== '/' && path.indexOf(href.replace(/\.html$/, '')) !== -1)
            ) {
                el.classList.add('active');
            }
        });

        // Theme toggle
        var toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('data-theme') || 'light';
                var next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
            });
        }

        // Hamburger / mobile menu — use 'active' class to match CSS
        var hamburger = document.getElementById('hamburger');
        var navLinks  = document.getElementById('nav-links');
        if (hamburger && navLinks) {
            // Defer transition so the initial off-screen state has no animation
            setTimeout(function () { navLinks.classList.add('nav-ready'); }, 50);

            hamburger.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
            // Close on nav link click
            navLinks.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', function () {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }
    }
})();
