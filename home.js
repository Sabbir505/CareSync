function selectLanguage(lang, flagUrl) {
  const btn = document.querySelector('.dropdown-btn');
  btn.innerHTML = `<img src="${flagUrl}" alt="${lang}"> ${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
  console.log("Selected Language:", lang); // you can use this for further logic
}