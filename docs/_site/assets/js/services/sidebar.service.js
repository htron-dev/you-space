export default function sidebarService () {  
    const sidebar = document.getElementById("sidebar");
    const btn = document.getElementById("btn-toggle-sidebar");

    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    // if is mobide start with sidebar hidden
    if (width < 720) {
      sidebar.classList.add("hide");
    }
    
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("hide");
    })
  
}
  