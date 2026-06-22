// ============================================================
//  Publications page — card expand, tab switching, category view
// ============================================================

const CATEGORIES = [
    { id: 'epigenomics',      label: 'Epigenomics Tooling &amp; AI', icon: 'ti-dna' },
    { id: 'rare-disease',     label: 'Rare Disease Diagnostics',    icon: 'ti-stethoscope' },
    { id: 'cancer',           label: 'Cancer Therapeutics',         icon: 'ti-microscope' },
    { id: 'platforms',        label: 'Interactive Platforms',       icon: 'ti-device-desktop-analytics' },
    { id: 'interpretable-ml', label: 'Interpretable AI',             icon: 'ti-brain' },
    { id: 'equity',           label: 'Equity in Science',           icon: 'ti-users' },
];

// Wire expand/collapse on pub-cards (handles both original and cloned cards)
function wireCardExpand(container) {
    container.querySelectorAll('.pub-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            card.classList.toggle('expanded');
            card.classList.toggle('collapsed');
        });
        card.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => e.stopPropagation());
        });
    });
}

// Build category view DOM from year-view cards
function buildCategoryView() {
    const container = document.getElementById('category-view');
    if (container.hasChildNodes()) return; // already built

    const allCards = Array.from(document.querySelectorAll('#year-view .pub-card'));

    // --- Category pill nav ---
    const navDiv = document.createElement('div');
    navDiv.className = 'cat-nav-pills';

    const presentCats = CATEGORIES.filter(cat =>
        allCards.some(card => (card.dataset.cats || '').split(' ').includes(cat.id))
    );

    presentCats.forEach(cat => {
        const count = allCards.filter(card =>
            (card.dataset.cats || '').split(' ').includes(cat.id)
        ).length;
        const pill = document.createElement('a');
        pill.href = `#cat-${cat.id}`;
        pill.className = 'cat-nav-pill';
        pill.innerHTML = `<i class="ti ${cat.icon}" aria-hidden="true"></i> ${cat.label} <span class="cat-pill-count">${count}</span>`;
        pill.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(`cat-${cat.id}`);
            if (target) {
                target.setAttribute('open', '');
                setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
            }
        });
        navDiv.appendChild(pill);
    });
    container.appendChild(navDiv);

    // --- Collapsible accordion sections ---
    CATEGORIES.forEach(cat => {
        const matching = allCards.filter(card =>
            (card.dataset.cats || '').split(' ').includes(cat.id)
        );
        if (matching.length === 0) return;

        const details = document.createElement('details');
        details.className = 'acc-section';
        details.id = `cat-${cat.id}`;
        details.setAttribute('open', '');

        const summary = document.createElement('summary');
        summary.innerHTML = `
            <i class="ti ${cat.icon} acc-icon" aria-hidden="true"></i>
            <span class="acc-title">${cat.label}</span>
            <span class="acc-count">${matching.length} papers</span>
            <i class="ti ti-chevron-down acc-arrow" aria-hidden="true"></i>
        `;
        details.appendChild(summary);

        const body = document.createElement('div');
        body.className = 'acc-body pub-acc-body';
        matching.forEach(card => {
            const clone = card.cloneNode(true);
            body.appendChild(clone);
        });
        details.appendChild(body);

        container.appendChild(details);
    });

    wireCardExpand(container);
}

// Switch between year and category views
function setView(view, scrollToCat) {
    const yearView = document.getElementById('year-view');
    const catView  = document.getElementById('category-view');
    const btns     = document.querySelectorAll('.view-btn');

    btns.forEach(b => b.classList.toggle('active', b.dataset.view === view));

    if (view === 'category') {
        buildCategoryView();
        yearView.style.display = 'none';
        catView.style.display  = 'block';

        if (scrollToCat) {
            const target = document.getElementById(`cat-${scrollToCat}`);
            if (target) {
                // Small delay to let layout settle after display:block
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
            }
        }
    } else {
        catView.style.display  = 'none';
        yearView.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // ---- Wire year-view card expand ----
    wireCardExpand(document.getElementById('year-view'));

    // ---- View toggle buttons ----
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => setView(btn.dataset.view));
    });

    // ---- Main tab switcher (Publications | Software) ----
    const tabButtons  = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabNav      = document.querySelector('.tab-nav');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(b  => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            button.classList.add('active');
            const tc = document.getElementById(`${targetTab}-content`);
            if (tc) tc.classList.add('active');
        });
    });

    // Sticky shadow on tab nav
    if (tabNav) {
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        tabNav.parentNode.insertBefore(sentinel, tabNav);
        new IntersectionObserver(([e]) => {
            tabNav.classList.toggle('stuck', !e.isIntersecting);
        }, { threshold: [1] }).observe(sentinel);
    }

    // ---- Handle ?cat= URL parameter (from homepage research cards) ----
    const params = new URLSearchParams(window.location.search);
    const cat    = params.get('cat');
    if (cat && CATEGORIES.some(c => c.id === cat)) {
        setView('category', cat);
    }
});
