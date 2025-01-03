/**
 * snippet-loader.js
 * Simple helper to fetch HTML snippets and inject them into the page.
 */
function loadSnippet(snippetPath, containerId) {
    fetch(snippetPath)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading snippet:", error);
      });
  }
  