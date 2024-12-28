document.addEventListener("DOMContentLoaded", function () {
    const searchLink = document.getElementById("nav-search-link");
    const searchOverlay = document.getElementById("beautifuljekyll-search-overlay");
    const exitSearch = document.getElementById("nav-search-exit");
    
    // Show search overlay
    searchLink.addEventListener("click", function (event) {
      event.preventDefault();
      searchOverlay.classList.remove("d-none");
    });

    // Hide search overlay
    exitSearch.addEventListener("click", function () {
      searchOverlay.classList.add("d-none");
    });

    // Close search overlay on outside click
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay || e.target === exitSearch) {
        searchOverlay.classList.add("d-none");
      }
    });    

    // Close search overlay on outside click
    document.addEventListener("click", function (event) {
      if (
        !searchOverlay.contains(event.target) &&
        event.target.id !== "nav-search-link" &&
        !event.target.closest("#nav-search-link")
      ) {
        searchOverlay.classList.add("d-none");
      }
    });
  });