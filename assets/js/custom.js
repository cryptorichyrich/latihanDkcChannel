document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    let isCollapsed = false;
  
    // Handle scroll behavior
    window.addEventListener("scroll", () => {
      const tocRect = toc.getBoundingClientRect();
      if (tocRect.top <= 60 && !isCollapsed) {
        toc.classList.add("collapsed");
        isCollapsed = true;
      } else if (tocRect.top > 60 && isCollapsed) {
        toc.classList.remove("collapsed");
        isCollapsed = false;
      }
    });
  
    // Handle click to toggle collapse/expand
    toc.addEventListener("click", (event) => {
        if (event.target.textContent.toLowerCase().includes("daftar isi")) {
          toc.classList.toggle("collapsed");
        }
      });      
  });
  