document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    const mainNavbar = document.getElementById("main-navbar");
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
      
    // Smooth scroll to headers with offset
    toc.addEventListener("click", (event) => {
        const target = event.target;
        if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const header = document.querySelector(target.hash);
        const navbarHeight = mainNavbar.offsetHeight;
        const tocHeight = toc.offsetHeight;

        if (header) {
            const offset = navbarHeight + tocHeight;
            const headerPosition = header.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = headerPosition - offset;

            window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
            });
        }
        }
    });      
  });
  