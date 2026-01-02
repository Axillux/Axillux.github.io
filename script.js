const translations = {
    ru: {
        "hero-title": "Axillux - переводчик и кодер",
        "hero-sub": "Перевожу сайты и делаю веб-страницы. Быстро и аккуратно.",
        "btn-projects": "Смотреть проекты",
        "btn-contact": "Связаться",
        "about-title": "Обо мне",
        "skill-1": "Пишу понятно",
        "skill-2": "Делаю <del>аккуратно</del>",
        "skill-3": "Знаю 5 языков",
        "services-title": "Что я делаю",
        "serv-1": "Перевод сайтов",
        "serv-2": "Локализация",
        "serv-3": "Создание легких сайтов",
        "price-text": "Опиши задачу, и я назову цену, или предложи свою, мне все равно.",
        "projects-title": "Мои проекты",
        "proj-mcreations": "Перевод и локализация сайта.",
        "proj-hosts": "Работаю над проектом",
        "contact-title": "Связаться",
        "contact-sub": "Отвечаю обычно в течение дня"
    },
    en: {
        "hero-title": "Axillux - Translator & Coder",
        "hero-sub": "I translate websites and build web pages. Fast and clean.",
        "btn-projects": "See Projects",
        "btn-contact": "Contact",
        "about-title": "About Me",
        "skill-1": "Clear writing",
        "skill-2": "Do it <del>accurately</del>",
        "skill-3": "I know 5 languages",
        "services-title": "What I Do",
        "serv-1": "Website Translation",
        "serv-2": "Localization",
        "serv-3": "Make lightweight sites",
        "price-text": "Write the task and I'll offer a price, or you offer, I don't care.",
        "projects-title": "My Projects",
        "proj-mcreations": "Website translation and localization.",
        "proj-hosts": "Working on the project",
        "contact-title": "Get in Touch",
        "contact-sub": "I usually reply within a day"
    },
    kz: {
        "hero-title": "Axillux - аудармашы және кодер",
        "hero-sub": "Сайттарды аударамын және жасаймын. Жылдам әрі ұқыпты.",
        "btn-projects": "Жобалар",
        "btn-contact": "Хабарласу",
        "about-title": "Мен туралы",
        "skill-1": "Түсінікті жазамын",
        "skill-2": "<del>Ұқыпты</del> жасаймын",
        "skill-3": "5 тіл білемін",
        "services-title": "Қызметтерім",
        "serv-1": "Сайттарды аудару",
        "serv-2": "Локализация",
        "serv-3": "Жеңіл сайт жасау",
        "price-text": "Тапсырманы жаз, мен баға ұсынамын немесе сен ұсын, маған бәрібір.",
        "projects-title": "Жобаларым",
        "proj-mcreations": "Сайтты аудару және локализациялау.",
        "proj-hosts": "Жоба үстінде жұмыс істеудемін",
        "contact-title": "Байланыс",
        "contact-sub": "Әдетте бір күн ішінде жауап беремін"
    },
    de: {
        "hero-title": "Axillux - Übersetzer & Coder",
        "hero-sub": "Ich übersetze Webseiten und erstelle Webpages. Schnell und sauber.",
        "btn-projects": "Projekte",
        "btn-contact": "Kontakt",
        "about-title": "Über mich",
        "skill-1": "Klares Schreiben",
        "skill-2": "Mache es <del>ordentlich</del>",
        "skill-3": "Ich spreche 5 Sprachen",
        "services-title": "Leistungen",
        "serv-1": "Webseiten-Übersetzung",
        "serv-2": "Lokalisierung",
        "serv-3": "Leichte Webseiten erstellen",
        "price-text": "Schreib die Aufgabe, ich nenne einen Preis oder du - mir egal.",
        "projects-title": "Projekte",
        "proj-mcreations": "Übersetzung und Lokalisierung.",
        "proj-hosts": "Arbeite am Projekt",
        "contact-title": "Kontakt",
        "contact-sub": "Ich antworte normalerweise innerhalb eines Tages"
    },
    ua: {
        "hero-title": "Axillux - перекладач та кодер",
        "hero-sub": "Перекладаю сайти та створюю веб-сторінки. Швидко та акуратно.",
        "btn-projects": "Проєкти",
        "btn-contact": "Зв'язатися",
        "about-title": "Про мене",
        "skill-1": "Пишу зрозуміло",
        "skill-2": "Роблю <del>акуратно</del>",
        "skill-3": "Знаю 5 мов",
        "services-title": "Що я роблю",
        "serv-1": "Переклад сайтів",
        "serv-2": "Локалізація",
        "serv-3": "Зробити легкий сайт",
        "price-text": "Напиши завдання, і я запропоную ціну, або ти запропонуєш - мені байдуже.",
        "projects-title": "Мої проєкти",
        "proj-mcreations": "Переклад та локалізація сайту.",
        "proj-hosts": "Працюю над проєктом",
        "contact-title": "Зв'язок",
        "contact-sub": "Відповідаю зазвичай протягом дня"
    }
};

const langSelect = document.getElementById('lang-select');

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('skill') || key.includes('price')) {
                 element.innerHTML = translations[lang][key];
            } else {
                 element.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('selectedLang', lang);
}

langSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ru';
    langSelect.value = savedLang;
    changeLanguage(savedLang);
});

let lastScroll = 0;
const nav = document.querySelector('.bubble-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 50) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }
    lastScroll = currentScroll;

});
