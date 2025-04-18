// const setting_button = document.getElementById('setting_button');
// const settings_list= document.getElementById('settings_list');

// setting_button.addEventListener('click', () => {
//     if (settings_list.classList.contains('hidden')) {
//     settings_list.classList.remove('hidden');
//     // Force reflow to restart animation
//     void settings_list.offsetWidth;
//     settings_list.classList.add('show');
// } else {
//     settings_list.classList.add('hidden');
//     settings_list.classList.remove('show');
//   }
// });


  function ouvrir_option() {
    document.getElementById("settings_list").style.display = "flex";
  }

  function fermer_option() {
    document.getElementById("settings_list").style.display = "none";
  }
