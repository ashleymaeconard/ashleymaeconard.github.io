// Tab switching functionality for Presentations & Media page
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(`${targetTab}-content`).classList.add('active');
        });
    });

    // View More functionality
    const presentationsSectionGroups = document.querySelectorAll('.presentations-section-group');

    presentationsSectionGroups.forEach(section => {
        const presentationsList = section.querySelector('.presentations-list');
        const viewMoreBtn = section.querySelector('.view-more-btn');
        if (!presentationsList || !viewMoreBtn) return;

        const items = presentationsList.querySelectorAll('.presentation-item');

        items.forEach((item, index) => {
            if (index >= 3) item.classList.add('presentation-item-hidden');
        });

        if (items.length <= 3) viewMoreBtn.style.display = 'none';

        viewMoreBtn.addEventListener('click', () => {
            const isExpanded = section.classList.contains('expanded');
            if (isExpanded) {
                items.forEach((item, index) => {
                    if (index >= 3) item.classList.add('presentation-item-hidden');
                });
                viewMoreBtn.textContent = 'View More';
                section.classList.remove('expanded');
            } else {
                items.forEach(item => item.classList.remove('presentation-item-hidden'));
                viewMoreBtn.textContent = 'View Less';
                section.classList.add('expanded');
            }
        });
    });
});
