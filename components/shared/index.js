// This file is used for contact.html and index.html//

document.addEventListener("DOMContentLoaded", function () {
  const postPerContainers = document.querySelectorAll(".post__container");
  const pagination = document.querySelector(".pagination");

  let perPage = postsPerPage();
  let currentPagePost = 0;

  function postsPerPage() {
    if (window.matchMedia("(min-width: 760px) and (max-width: 820px)").matches) {
      return 4;
    } else if (
      window.matchMedia("(min-width: 319px) and (max-width: 370px)").matches ||
      window.matchMedia("(min-width: 374px) and (max-width: 424px)").matches ||
      window.matchMedia("(min-width: 425px) and (max-width: 759px)").matches
    ) {
      return 2;
    } else {
      return 8;
    }
  }

  function showPostCurrentPage() {
    const startPage = currentPagePost * perPage;
    const endPage = startPage + perPage;

    postPerContainers.forEach((container, index) => {
      if (index >= startPage && index < endPage) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  function generatePaginationPostButtons() {
    const totalPostBlogs = postPerContainers.length;
    const totalPagesBlog = Math.ceil(totalPostBlogs / perPage);

    let paginationPostHTML = "";
    for (let i = 0; i < totalPagesBlog; i++) {
      const pageNumber = i + 1;
      paginationPostHTML += `<button class="page-btn">${pageNumber}</button>`;
    }

    pagination.innerHTML = paginationPostHTML;

    const pageButton = document.querySelectorAll(".page-btn");
    pageButton.forEach((button, index) => {
      button.addEventListener("click", () => {
        currentPagePost = index;
        showPostCurrentPage();
        updateActiveButtonPage();
      });
    });

    updateActiveButtonPage();
  }

  function updateActiveButtonPage() {
    const pageButton = document.querySelectorAll(".page-btn");
    pageButton.forEach((button, index) => {
      if (index === currentPagePost) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }


  showPostCurrentPage();
  generatePaginationPostButtons();


  window.addEventListener("resize", () => {
    perPage = postsPerPage();
    showPostCurrentPage();
    generatePaginationPostButtons();
  });
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

//----------------------------------------------------------------------------------------------------------------------//

const modalsOpen = document.querySelectorAll('.post__button');
const contentmodal = document.querySelector('.modal__blog');
const modalClose = document.querySelector('.modal__close');


modalsOpen.forEach((openModal) => {
  openModal.addEventListener('click', (e) => {
    e.preventDefault();
    contentmodal.classList.add('modal--show');

    const containerPost = e.target.closest('.post__container');
    const titlePost = containerPost.querySelector('h1').textContent;
    const imageSrcPost = containerPost.querySelector('.post__image').src;
    const textPost = containerPost.querySelector('.post__description').textContent;



    const postTitleModal = contentmodal.querySelector('.modal__title');
    const postImageModal = contentmodal.querySelector('.modal__image');
    const postTextModal = contentmodal.querySelector('.modal__paragraph');
    

    postTitleModal.textContent = titlePost;
    postImageModal.src = imageSrcPost;
    postTextModal.textContent=textPost;
  });
});

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  contentmodal.classList.remove('modal--show');
});



