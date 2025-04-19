function ouvrir_option() {
  const settings = document.getElementById("settings_list");
  settings.classList.remove("fermer");
  settings.classList.add("ouvert");
  settings.style.display = "flex";
}

function fermer_option() {
  const settings = document.getElementById("settings_list");
  settings.classList.remove("ouvert");
  settings.classList.add("fermer");
  setTimeout(() => {
    settings.style.display = "none";
    settings.classList.remove("fermer");
  }, 400);
}

function applique_option() {
  const settings = document.getElementById("settings_list");
  settings.classList.remove("ouvert");
  settings.classList.add("fermer");
  setTimeout(() => {
    settings.style.display = "none";
    settings.classList.remove("fermer");
  }, 400);
}

function defaut_option() {
  const settings = document.getElementById("settings_list");
  settings.classList.remove("ouvert");
  settings.classList.add("fermer");
  setTimeout(() => {
    settings.style.display = "none";
    settings.classList.remove("fermer");
  }, 400);
}

function ouvrir_propos() {
  const about = document.getElementById("about_content");
  about.classList.remove("fermer");
  about.classList.add("ouvert");
  about.style.display = "flex";
}

function fermer_propos() {
  const about = document.getElementById("about_content");
  about.classList.remove("ouvert");
  about.classList.add("fermer");
  setTimeout(() => {
    about.style.display = "none";
    about.classList.remove("fermer");
  }, 400);
}

function level_btn() {
  const level = document.getElementById("level_lists");
  level.classList.remove("fermer");
  level.classList.add("ouvert");
  level.style.display = "flex";
}

function level_retour1() {
  const level = document.getElementById("level_lists");
  level.classList.remove("ouvert");
  level.classList.add("fermer");
  setTimeout(() => {
    level.style.display = "none";
    level.classList.remove("fermer");
  }, 400);
}

function level_next() {
  document.getElementById("next_level_lists").style.display = "flex";
}

function level_retour() {
  document.getElementById("level_lists").style.display = "none";
}

function level_page(pageNumber) {
  const pages = document.querySelectorAll('.level_lists_content');
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Afficher la page souhaitée (par exemple, "page1", "page2", etc.)
  const page = document.getElementById('page' + pageNumber);
  if (page) {
    page.style.display = 'block';
  }
}

function level_btn() {
  document.getElementById('level_lists').style.display = 'block';
  // Affiche la première page par défaut
  showPage(1);
}