"use strict";

{
  const menu = document.querySelector(".icon.menu");
  const bgMenu = document.querySelector(".bg_menu");
  const Html = document.querySelector("html");
  const Body = document.querySelector("body");

  /* ハンバーガーメニュー */
  const menuToggle = function () {
    bgMenu.classList.toggle("active");

    // PCスクロール禁止処理
    Html.classList.toggle("no-scroll");
    Body.classList.toggle("no-scroll");
    // スマホスクロール禁止処理
    function disableScroll(event) {
      event.preventDefault();
    }
    // イベントと関数を紐付け
    document.addEventListener("touchmove", disableScroll, { passive: false });
  };

  /* 【クリックイベント】ハンバーガーメニュー */
  menu.addEventListener("click", () => {
    menuToggle();
  });

  /* アコーディオンパネル */
  // const Items = document.querySelectorAll(".item");

  // Items.forEach((mouseoverItem) => {
  //   mouseoverItem.addEventListener("mouseover", (e) => {
  //     e.preventDefault();

  //     Items.forEach((item) => {
  //       item.classList.remove("active");
  //     });
  //     mouseoverItem.classList.add("active");
  //   });

  //   mouseoverItem.addEventListener("mouseout", () => {
  //     mouseoverItem.classList.remove("active");
  //   });
  // });

  const parent = document.querySelectorAll(".has_sub");
  const children = document.querySelectorAll(".sub");

  for (let i = 0; i < parent.length; i++) {
    parent[i].addEventListener("mouseover", (e) => {
      e.preventDefault();
      children[i].classList.add("active");
    });
    parent[i].addEventListener("mouseout", (e) => {
      e.preventDefault();
      children[i].classList.remove("active");
    });
  }
}
