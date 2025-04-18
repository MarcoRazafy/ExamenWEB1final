function ouvrir_option() {
  document.getElementById("settings_list").style.display = "flex";
}

function fermer_option() {
  document.getElementById("settings_list").style.display = "none";
}

function applique_option() {
  document.getElementById("settings_list").style.display = "none";
}

function defaut_option() {
  document.getElementById("settings_list").style.display = "none";
}

function ouvrir_propos() {
  document.getElementById("about_content").style.display = "flex";
}

function fermer_propos() {
  document.getElementById("about_content").style.display = "none";
}

function ouvrir_propos() {
  const about = document.getElementById("about_content");
  about.classList.remove("out");
  about.classList.add("active");
  about.style.display = "flex"; // pour s'assurer qu’il s’affiche
}

function fermer_propos() {
  const about = document.getElementById("about_content");
  about.classList.remove("active");
  about.classList.add("out");

  // attendre que l'animation de sortie finisse avant de cacher
  setTimeout(() => {
    about.style.display = "none";
    about.classList.remove("out");
  }, 400); // doit correspondre à la durée de fadeOut
}










function level_btn() {
  document.getElementById("level_lists").style.display = "flex";
}

function level_retour1() {
  document.getElementById("level_lists").style.display = "none";
}

function level_next() {
  document.getElementById("next_level_lists").style.display = "flex";
}

function level_retour2() {
  document.getElementById("next_level_lists").style.display = "none";
}