

document.addEventListener("DOMContentLoaded", function () {
  const postContainers = document.querySelectorAll(".post__container");
  const pagination = document.querySelector(".pagination");

  const postsPerPage = 8;
  let currentPage = 0;

  function showCurrentPage() {
    const start = currentPage * postsPerPage;
    const end = start + postsPerPage;

    postContainers.forEach((container, index) => {
      if (index >= start && index < end) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  function generatePaginationButtons() {
    const totalPosts = postContainers.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    let paginationHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      paginationHTML += `<button class="page-btn">${pageNumber}</button>`;
    }

    pagination.innerHTML = paginationHTML;

    const pageButtons = document.querySelectorAll(".page-btn");
    pageButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        currentPage = index;
        showCurrentPage();
        updateActivePageButton();
      });
    });

    updateActivePageButton();
  }

  // Función para actualizar el botón de página activo
  function updateActivePageButton() {
    const pageButtons = document.querySelectorAll(".page-btn");
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Mostrar la primera página y generar los botones de paginación al cargar la página
  showCurrentPage();
  generatePaginationButtons();
});


//----------------------------------------------------------------------------------------------------------------------//
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
