// --- FULL TRANSLATION DICTIONARY ---
const translations = {
    en: {
        // ... (Existing translations)
        // Top Bar
        directory: 'Directory', emergency: 'Emergency:', police: 'Police', ambulance: 'Ambulance', fire: 'Fire',
        // Header
        govName: 'Government of Nepal', portalName: 'Community Portal - Ghorahi',
        // Nav
        navHome: 'Home', navAbout: 'About Us', navWork: 'Our Work', navWards: 'Wards', navComplaint: 'Complaint Box', navContact: 'Contact Us',
        // Officials Bar
        officialsTitle: 'Key Officials (Ghorahi):', mayor: 'Mayor:', deputyMayor: 'Deputy Mayor:', cdo: 'CDO:',
        // Home
        missionTitle: 'Our Community Mission', missionText: 'We are committed to fostering transparency, accountability, and sustainable development within Ghorahi. Through collaborative efforts, we strive to improve infrastructure and public services.',
        // Achievements
        achievementsTitle: 'Our Achievements', achievementsSub: 'Recent projects and initiatives transforming our community',
        // Wards Page
        wardsTitle: 'Wards Directory', wardsSub: 'Select your ward to view detailed information (1-19)',
        
        // Removed all complaint form translations (complaintTitle, complaintSub, formBanner, labelType, optionRoad, etc.)
        
        // Modal Translations
        wardDetailsTitle: 'Ward Details', wardHead: 'Ward Head:', population: 'Population:', area: 'Area:', keyLocations: 'Key Locations:', modalNote: 'Contact the ward office directly for service inquiries.',
        // Footer
        contact: 'Contact Information', address: 'Community Portal Office', addressLine: 'Ghorahi, Dang, Nepal', phone: 'Phone', email: 'Email',
        links: 'Important Links',
        linkItems: [
            'Ministry of Home Affairs', 'District Coordination Committee', 'National ID Card', 'Public Service Commission'
        ],
        hours: 'Office Hours', hoursInfo: 'Sunday - Friday', hoursTime: '10:00 AM - 5:00 PM', closed: 'Closed on Saturdays and Public Holidays',
        lastUpdated: 'Last Updated', lastUpdatedDate: 'December 8, 2025', copyright: '© 2025 Ghorahi Community Portal. All rights reserved.'
    },
    ne: {
        // ... (Existing Nepali translations)
        // Top Bar
        directory: 'निर्देशिका', emergency: 'आकस्मिक सेवा:', police: 'प्रहरी', ambulance: 'एम्बुलेन्स', fire: 'दमकल',
        // Header
        govName: 'नेपाल सरकार', portalName: 'सामुदायिक पोर्टल - घोराही',
        // Nav
        navHome: 'गृहपृष्ठ', navAbout: 'हाम्रो बारेमा', navWork: 'हाम्रा कामहरू', navWards: 'वडाहरू', navComplaint: 'गुनासो पेटिका', navContact: 'सम्पर्क',
        // Officials Bar
        officialsTitle: 'मुख्य पदाधिकारी (घोराही):', mayor: 'नगर प्रमुख:', deputyMayor: 'उप-प्रमुख:', cdo: 'प्रमुख जिल्ला अधिकारी:',
        // Home
        missionTitle: 'हाम्रो सामुदायिक उद्देश्य', missionText: 'हामी घोराही भित्र पारदर्शिता, जवाफदेहिता र दिगो विकास प्रवर्द्धन गर्न प्रतिबद्ध छौं। सामूहिक प्रयास मार्फत हामी पूर्वाधार सुधार र सार्वजनिक सेवालाई प्रभावकारी बनाउन प्रयत्नशील छौं।',
        // Achievements
        achievementsTitle: 'हाम्रा उपलब्धिहरू', achievementsSub: 'हाम्रो समुदायलाई परिवर्तन गर्ने हालैका परियोजनाहरू',
        // Wards Page
        wardsTitle: 'वडा निर्देशिका', wardsSub: 'विस्तृत जानकारीको लागि आफ्नो वडा छान्नुहोस् (१-१९)',
        
        // Removed all complaint form translations
        
        // Modal Translations
        wardDetailsTitle: 'वडाको विवरण', wardHead: 'वडा अध्यक्ष:', population: 'जनसंख्या:', area: 'क्षेत्रफल:', keyLocations: 'मुख्य स्थानहरू:', modalNote: 'सेवा सम्बन्धी सोधपुछका लागि वडा कार्यालयमा सिधै सम्पर्क गर्नुहोस्।',
        // Footer
        contact: 'सम्पर्क जानकारी', address: 'सामुदायिक पोर्टल कार्यालय', addressLine: 'घोराही, दाङ, नेपाल', phone: 'फोन', email: 'इमेल',
        links: 'महत्त्वपूर्ण लिङ्कहरू',
        linkItems: [
            'गृह मन्त्रालय', 'जिल्ला समन्वय समिति', 'राष्ट्रिय परिचयपत्र', 'लोक सेवा आयोग'
        ],
        hours: 'कार्यालय समय', hoursInfo: 'आइतबार - शुक्रबार', hoursTime: 'बिहान १०:०० बजे - साँझ ५:०० बजे', closed: 'शनिबार र सार्वजनिक बिदाहरूमा बन्द',
        lastUpdated: 'अन्तिम अद्यावधिक', lastUpdatedDate: 'डिसेम्बर ८, २०२५', copyright: '© २०२५ घोराही सामुदायिक पोर्टल। सर्वाधिकार सुरक्षित।'
    }
};

// --- FAKE WARD DATA (For demonstration) ---
const wardData = {
    1: { head: 'Mr. Hari Sharma', pop: '5,500', area: '4.2 sq km', locations: 'Ghorahi Bazaar, Siddhartha Chowk' },
    2: { head: 'Ms. Bina Raut', pop: '7,100', area: '6.5 sq km', locations: 'Rapti Academy, Tulsipur Road' },
    3: { head: 'Mr. Shiva Chaudhary', pop: '6,200', area: '5.8 sq km', locations: 'Bagar, Airport Area' },
    4: { head: 'Ms. Sita Oli', pop: '4,900', area: '3.1 sq km', locations: 'Naya Buspark, Ganeshpur' },
    5: { head: 'Mr. Ram Thapa', pop: '8,000', area: '7.0 sq km', locations: 'Police Training Center, Dang District Hospital' },
    6: { head: 'Ms. Maya Pun', pop: '5,800', area: '4.5 sq km', locations: 'Ratna Path, Banke Bazaar' },
    7: { head: 'Mr. Dinesh KC', pop: '3,500', area: '8.1 sq km', locations: 'Tribhuvan University Campus, Krishna Mandir' },
    8: { head: 'Ms. Laxmi Adhikari', pop: '7,800', area: '5.3 sq km', locations: 'Ghorahi Central Office Area' },
    9: { head: 'Mr. Kamal Shrestha', pop: '4,100', area: '6.9 sq km', locations: 'Ramnagar, Laxmipur' },
    10: { head: 'Ms. Ganga Khati', pop: '6,700', area: '4.0 sq km', locations: 'Ganeshman Chowk, New Road' },
    11: { head: 'Mr. Bimal Rana', pop: '5,000', area: '5.5 sq km', locations: 'Rapti River bank settlements' },
    12: { head: 'Ms. Hira Gurung', pop: '3,900', area: '7.2 sq km', locations: 'Rural Agricultural Farms' },
    13: { head: 'Mr. Anil Budha', pop: '7,400', area: '3.8 sq km', locations: 'Eastern Industrial Zone' },
    14: { head: 'Ms. Puja Rawal', pop: '4,500', area: '6.0 sq km', locations: 'Tilaura, Community Forests' },
    15: { head: 'Mr. Nabin Khatri', pop: '6,000', area: '5.1 sq km', locations: 'Shanti Path, Secondary Schools' },
    16: { head: 'Ms. Sabina Bhandari', pop: '5,300', area: '4.9 sq km', locations: 'Damodar Chowk, Local Health Posts' },
    17: { head: 'Mr. Rupesh Pokharel', pop: '7,000', area: '6.3 sq km', locations: 'South Residential Area, New Housing' },
    18: { head: 'Ms. Kabita Karki', pop: '4,200', area: '7.5 sq km', locations: 'Hillside View Points, Temples' },
    19: { head: 'Mr. Prem Singh', pop: '8,500', area: '3.0 sq km', locations: 'Southernmost Farmlands, Village Hubs' },
};


// --- STATE & ELEMENTS ---
let currentLang = localStorage.getItem('siteLang') || 'en'; 
const langBtn = document.getElementById('lang-toggle');
const wardsContainer = document.getElementById('wards-grid-container');

// Modal Elements
const wardModal = document.getElementById('ward-modal');
const modalCloseBtn = wardModal ? wardModal.querySelector('.close-btn') : null;


// --- INITIALIZE & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    renderContent();

    // --- Language Toggle Listener ---
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ne' : 'en';
            renderContent();
        });
    }

    // --- Removed all Complaint Redirection Logic as it is handled by the HTML navigation link ---
    
    // --- Ward Modal Listeners ---
    if (wardsContainer) {
        wardsContainer.addEventListener('click', handleWardClick);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    if (wardModal) {
        window.addEventListener('click', (event) => {
            if (event.target === wardModal) {
                closeModal();
            }
        });
    }

    // Re-run Lucide to render all icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});


// --- 1. GENERATE WARDS (If on Wards Page) ---
function generateWards(wardLabel) {
    if (!wardsContainer) return;

    wardsContainer.innerHTML = '';
    for (let i = 1; i <= 19; i++) {
        const wardHTML = `
            <div class="ward-card" data-ward-id="${i}">
                <i data-lucide="map-pin" class="ward-icon"></i>
                <div class="ward-text">${wardLabel}</div>
                <div class="ward-number">${i}</div>
            </div>
        `;
        wardsContainer.insertAdjacentHTML('beforeend', wardHTML);
    }
    if (typeof lucide !== 'undefined') {
        lucide.createIcons(); 
    }
}

// --- 2. MODAL FUNCTIONS ---
function openModal(wardId) {
    if (!wardModal) return;

    const data = wardData[wardId];
    const t = translations[currentLang];

    // Populate Modal Content
    document.getElementById('modal-ward-title').textContent = `${t.wardDetailsTitle} ${wardId}`;
    
    document.getElementById('modal-head-name').textContent = data.head;
    document.getElementById('modal-population').textContent = data.pop;
    document.getElementById('modal-area').textContent = data.area;
    document.getElementById('modal-locations').textContent = data.locations;
    
    // Set display to show modal
    wardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    if (wardModal) {
        wardModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

function handleWardClick(event) {
    const wardCard = event.target.closest('.ward-card');
    if (wardCard) {
        const wardId = wardCard.getAttribute('data-ward-id');
        if (wardId) {
            openModal(wardId);
        }
    }
}


// --- 3. RENDER TRANSLATION ---
function renderContent() {
    const t = translations[currentLang];

    // Update simple text elements using data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update Input Placeholders
    const searchInput = document.getElementById('search-input');
    // Name and Phone inputs were removed and placeholder update logic is no longer needed

    if (searchInput) searchInput.placeholder = currentLang === 'en' ? 'Search...' : 'खोज्नुहोस्...';

    // Update Footer Links List
    const linksList = document.getElementById('links-list');
    if (linksList) {
        linksList.innerHTML = '';
        t.linkItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = item;
            li.appendChild(a);
            linksList.appendChild(li);
        });
    }

    // Update Date & Button text
    const dateDisplay = document.getElementById('date-display');
    if(dateDisplay) dateDisplay.textContent = t.lastUpdatedDate;
    
    langBtn.textContent = currentLang === 'en' ? 'नेपाली' : 'English';
    
    // Save language preference
    localStorage.setItem('siteLang', currentLang);

    // Re-generate wards with current language label (if on wards page)
    generateWards(t.navWards); 
}
// Function to toggle the menu on click
function toggleMenuDropdown(event) {
    const menuToggle = event.currentTarget;
    const dropdown = menuToggle.querySelector('.dropdown-content');

    // Toggle display of the dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        menuToggle.classList.remove('open');
    } else {
        // Close any other open dropdowns first
        document.querySelectorAll('.menu-dropdown-toggle').forEach(otherMenu => {
            otherMenu.querySelector('.dropdown-content').style.display = 'none';
            otherMenu.classList.remove('open');
        });
        
        // Open the current one
        dropdown.style.display = 'block';
        menuToggle.classList.add('open');
    }
    
    // Stop the default anchor behavior for the dropdown toggle
    event.preventDefault(); 
}

// Update the DOMContentLoaded listener in script.js to include this:

document.addEventListener('DOMContentLoaded', () => {
    // ... (Your existing code here)

    // --- Menu Dropdown Listener ---
    document.querySelectorAll('.menu-dropdown-toggle').forEach(menuItem => {
        menuItem.addEventListener('click', toggleMenuDropdown);
    });

    // ... (Rest of your existing code here)
});
