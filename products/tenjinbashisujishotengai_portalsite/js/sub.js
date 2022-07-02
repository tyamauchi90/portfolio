"use strict";

{
  /* ロード　→　header固定 */
  window.addEventListener("load", () => {
    const fixNavWrapper = document.querySelector(".header_wrapper");
    const fixNav = document.querySelector(".header_contents");
    const logoArea = document.querySelector(".logo_area");
    const modalBg = document.querySelector(".mordal_bg");
    if (modalBg.classList.contains("active") == false) {
      fixNavWrapper.classList.add("fixed");
      fixNav.classList.add("fixed");
      logoArea.classList.add("fixed");
    }
  });

  /* ホバーメニュー 0.3秒遅延*/

  document.addEventListener('DOMContentLoaded',function(){

  const parent = document.querySelectorAll(".accordion");
  const children = document.querySelectorAll(".accordion_list");
  const modalBg = document.querySelector(".mordal_bg");
  let timer;

  for (let i = 0; i < parent.length; i++) {
    const hoverIn = function(){
      modalBg.classList.add("active");
      parent[i].classList.add("active");
      children[i].classList.add("active");
    }
    const hoverOut = function(){
      modalBg.classList.remove("active");
      parent[i].classList.remove("active");
      children[i].classList.remove("active");
    }
    const mouseEnter = () => {
      timer = window.setTimeout(hoverIn, 300);
    }
    const mouseLeave = () => {
      hoverOut();
      window.clearTimeout(timer);
    }
    parent[i].addEventListener('mouseenter',mouseEnter);
    parent[i].addEventListener('mouseleave',mouseLeave);
  }
});
   
  /* ハンバーガーメニュー */
  const menuTrigger = document.querySelector(".menu-trigger");
    menuTrigger.addEventListener("click", () => {
    const html = document.querySelector("html");
    const gnavBg = document.querySelector(".gnav_bg");
    const gnavSp = document.querySelector(".gnav_sp");
  
    html.classList.toggle("fixed");
    menuTrigger.classList.toggle("active");
    gnavBg.classList.toggle("active");
    gnavSp.classList.toggle("active");
   });

  /* sp_メニューのアコーディオン */

  const spMenu = function () {
    const spParent = document.querySelectorAll(".accordion_sp > .toggle");
    const spChildren = document.querySelectorAll(".accordion_list_sp");

    for (let i = 0; i < spParent.length; i++) {
      spParent[i].addEventListener("click", (e) => {
        e.preventDefault();
        spParent[i].classList.toggle("active");
        spChildren[i].classList.toggle("active");
      });
    }
  };
  spMenu();

  /* topへ戻る */
  const logoTop = document.querySelector(".logo_top");
  logoTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
