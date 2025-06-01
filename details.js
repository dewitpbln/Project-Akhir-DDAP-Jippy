 function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
  }

  function toggleDropdown(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  }