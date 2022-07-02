"use strict";

{
  // const keywordMenu = function () {
  //   const parent = document.querySelectorAll(".kw_accordion");
  //   const children = document.querySelectorAll(".kw_accordion_list");

  //   for (let i = 0; i < parent.length; i++) {
  //     parent[i].addEventListener("click", (e) => {
  //       e.preventDefault();
  //       parent[i].classList.toggle("active");
  //       children[i].classList.toggle("active");
  //     });
  //   }
  // };
  // keywordMenu();

  const keywordMenu = function () {
    const parent = document.querySelectorAll(".kw_accordion");
    const children = document.querySelectorAll(".kw_accordion_list");

    for (let i = 0; i < parent.length; i++) {
      parent[i].addEventListener("click", (e) => {
        e.preventDefault();
        parent[i].classList.toggle("active");
        children[i].classList.toggle("active");
      });
    }
  };
  keywordMenu();
}
