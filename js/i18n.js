// i18n.js
function setLanguage(lang) {
  // Save user language preference (optional)
  localStorage.setItem('preferredLang', lang);

  // Build the translation file path, e.g. "translations/en.json"
  const translationFile = `../translations/${lang}.json`; // Adjusted path

  // Fetch the translation file
  fetch(translationFile)
    .then(response => {
      if (!response.ok) throw new Error(`Cannot load ${translationFile}`);
      return response.json();
    })
    .then(translations => {
      // For each element with data-i18n attribute, replace its text
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const translationKey = el.getAttribute('data-i18n');
        if (translations[translationKey]) {
          el.textContent = translations[translationKey];
        }
      });
    })
    .catch(err => {
      console.error('Translation error:', err);
    });
}

// On page load, optionally load the preferred language
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = localStorage.getItem('preferredLang');
  if (!savedLang) {
    const browserLang = navigator.language.slice(0, 2);
    savedLang = ['de', 'en', 'fr'].includes(browserLang) ? browserLang : 'de';
  }
  setLanguage(savedLang);
});

