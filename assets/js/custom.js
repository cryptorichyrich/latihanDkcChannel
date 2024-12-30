document.addEventListener('DOMContentLoaded', () => {
    // Select the containers
    const blogPost = document.querySelector('#blog-post');
    const tocContainer = document.querySelector('#toc');
  
    if (blogPost && tocContainer) {
      const headings = blogPost.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const tocList = document.createElement('div');
      tocList.innerHTML = "<h2>Table of Contents</h2><ul></ul>";

  
      headings.forEach((heading, index) => {
        // Generate a unique ID for each heading if it doesn't already have one
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
  
        // Create a TOC list item
        const listItem = document.createElement('li');
        listItem.style.marginLeft = `${(parseInt(heading.tagName[1]) - 1) * 10}px`; // Indent based on heading level
  
        // Create a link to the heading
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
  
        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });
  
      // Append the generated TOC to the container
      tocContainer.appendChild(tocList);
    }
  });
  