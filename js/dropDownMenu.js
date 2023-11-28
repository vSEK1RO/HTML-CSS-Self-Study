function DropDownFunction() {
    document.getElementById("menu_dropdown").classList.toggle("showDDContent");
    document.getElementById("under_menu_dropdown").classList.toggle("showDDButton");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    
    var under_menu_dropdowns = document.getElementsByClassName("under_menu_dropdown");
    var i;
    for (i = 0; i < under_menu_dropdowns.length; i++) {
      var open_under_menu_dropdowns = under_menu_dropdowns[i];
      if (open_under_menu_dropdowns.classList.contains('showDDButton')) {
        open_under_menu_dropdowns.classList.add('showDDButton');
      }
    }
    
    var dropdowns = document.getElementsByClassName("menu_dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showDDContent')) {
        openDropdown.classList.add('showDDContent');
      }
    }
  }
}