const openButton = document.querySelector("#openOverlay");
const body = document.body;
console.log(body)
const success = createModal("success");

openButton.addEventListener("click", (e) => {
  body.appendChild(success);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", (e) => {
    // или так if(!e.target.classList.contains('content'))
    if (e.target === overlayElement) {
      closeElement.click();
    }
  }
    )
    
    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
    closeElement.addEventListener("click", (e) => {
      e.preventDefault();
      body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    contentElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;
  };

