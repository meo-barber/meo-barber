(function() {
    'use strict';

    // Expose page init globally so SPA router can call it
    window.teamInit = function initTeamPage() {
        const teamMembers = [
            {
                name: "Meo Michał",
                role: "Owner & Master Barber",
                image: "https://d375139ucebi94.cloudfront.net/region2/pl/287458/resource_photos/237008874cfc44fbba514b9039f6ed29.jpeg",
                description: "Założyciel Meo Barber z pasją do perfekcyjnych cięć i stylizacji.",
                experience: "10+",
                clients: "5000+",
                rating: "5.0",
                booksy: "https://booksy.com/pl-pl/287458_meo-barber_barber-shop_3_warszawa/staffer/644282#ba_s=dl_1",
                badge: "Owner"
            },
            {
                name: "Viktor",
                role: "Senior Barber",
                image: "https://d375139ucebi94.cloudfront.net/region2/pl/287458/resource_photos/c807229ced294d6c85ab8bf62cdcb4-meo-barber-viktor-30b02d9de49846e7a10a063c6dce12-booksy.jpeg",
                description: "Mistrz klasycznych cięć i nowoczesnych stylów z wieloletnim doświadczeniem.",
                experience: "8+",
                clients: "3500+",
                rating: "4.9",
                booksy: "https://booksy.com/pl-pl/287458_meo-barber_barber-shop_3_warszawa/staffer/730475#ba_s=dl_1",
                badge: "Senior"
            },
            {
                name: "Louis",
                role: "Barber",
                image: "https://d375139ucebi94.cloudfront.net/region2/pl/287458/resource_photos/f4262c90c52b43ce87c05b2b22ec5493.jpeg",
                description: "Specjalista fade'ów i współczesnych trendów w barbierstwie.",
                experience: "5+",
                clients: "2000+",
                rating: "4.9",
                booksy: "https://booksy.com/pl-pl/287458_meo-barber_barber-shop_3_warszawa/staffer/672646#ba_s=dl_1",
                badge: "Pro"
            },
            {
                name: "Dawid",
                role: "Barber",
                image: "https://d375139ucebi94.cloudfront.net/region2/pl/287458/resource_photos/fc1aab3078964a798efb5ed2c977e282.jpeg",
                description: "Ekspert w precyzyjnych cięciach i artystycznych stylizacjach.",
                experience: "6+",
                clients: "2500+",
                rating: "4.8",
                booksy: "https://booksy.com/pl-pl/287458_meo-barber_barber-shop_3_warszawa/staffer/674560#ba_s=dl_1",
                badge: "Pro"
            },
            {
                name: "Ling",
                role: "Barber",
                image: "https://d375139ucebi94.cloudfront.net/region2/pl/287458/resource_photos/27cbf029bf6b4d80a3cbfb50158bd4-meo-barber-ling-df364601917c4b8d85ffa2b9303700-booksy.jpeg",
                description: "Specjalizuje się w klasycznych stylach i pielęgnacji brody.",
                experience: "7+",
                clients: "3000+",
                rating: "4.9",
                booksy: "https://booksy.com/pl-pl/287458_meo-barber_barber-shop_3_warszawa/staffer/651408#ba_s=dl_1",
                badge: "Pro"
            }
        ];

        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;

        // Clear any placeholder/spinner if present
        teamGrid.innerHTML = '';

        teamMembers.forEach(member => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            col.innerHTML = `
                <div class="team-card">
                    <div class="team-photo-wrapper">
                        <img src="${member.image}" class="team-photo" alt="${member.name}" loading="eager"
                             onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=500&background=BFAF8C&color=001F3F&font-size=0.4';">
                        <div class="team-badge">${member.badge}</div>
                    </div>
                    <div class="team-body">
                        <h3 class="team-name">${member.name}</h3>
                        <p class="team-role">${member.role}</p>
                        <p class="team-description">${member.description}</p>
                        <div class="team-stats">
                            <div class="team-stat">
                                <span class="team-stat-value">${member.experience}</span>
                                <span class="team-stat-label">Lata</span>
                            </div>
                            <div class="team-stat">
                                <span class="team-stat-value">${member.clients}</span>
                                <span class="team-stat-label">Klienci</span>
                            </div>
                            <div class="team-stat">
                                <span class="team-stat-value">${member.rating}</span>
                                <span class="team-stat-label">Ocena</span>
                            </div>
                        </div>
                        <a href="${member.booksy}" target="_blank" rel="noopener" class="btn-book-barber">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>Zarezerwuj z ${member.name}</span>
                        </a>
                    </div>
                </div>
            `;
            teamGrid.appendChild(col);
        });
    };

    // Convenience: if partial is already in DOM (non-SPA usage), auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (document.getElementById('team-grid')) {
                window.teamInit();
            }
        });
    } else {
        if (document.getElementById('team-grid')) {
            window.teamInit();
        }
    }
})();
