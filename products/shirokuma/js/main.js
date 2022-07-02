"use strict";

{
  // 固定ナビゲーション

  const headerWrapper = document.querySelector(".header-wrapper");
  const topMain = document.querySelector(".top-main");
  const headerInfo = document.querySelector(".info");
  const fixNav = headerWrapper.clientHeight;

  // ハンバーガーメニュー & モーダルウィンドウ

  const openbtn = document.querySelector(".openbtn");
  const closebtn = document.querySelector(".closebtn");
  const modalMain = document.querySelector(".modal-main");
  const modalContents = document.querySelector(".modal-contents");
  const modalBg = document.querySelector(".modal-bg");
  const body = document.querySelector("html body");
  const pageup = document.querySelector(".page_up");
  const headerBottom = document.querySelector(".header-bottom");

  const modalToggle = function () {
    openbtn.classList.toggle("active");
    closebtn.classList.toggle("active");
    modalMain.classList.toggle("active");
    modalBg.classList.toggle("active");
    body.classList.toggle("no-scroll"); // モーダル時の背景固定
    pageup.classList.toggle("is-hide"); // 上へ戻るボタン非表示
    headerBottom.classList.toggle("is-hide"); // 下部固定ナビゲーション非表示
    // NoFixNav();
  };

  openbtn.addEventListener("click", () => {
    modalToggle();
  });
  closebtn.addEventListener("click", () => {
    modalToggle();
  });
  modalBg.addEventListener("click", () => {
    modalToggle();
  });
  modalContents.addEventListener("click", () => {
    modalToggle();
  });

  window.addEventListener("scroll", () => {
    if (modalMain.classList.contains("active") == false) {
      if (window.scrollY >= fixNav + 100) {
        headerWrapper.classList.add("fix");
        topMain.classList.add("fix");
        headerInfo.classList.add("fix");
      }
      if (window.scrollY < fixNav + 100) {
        headerWrapper.classList.remove("fix");
        topMain.classList.remove("fix");
        headerInfo.classList.remove("fix");
      }
    }
  });

  // モーダルウィンドウ100vh iOS問題解消
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  let vw = window.innerWidth;

  window.addEventListener("resize", () => {
    if (vw === window.innerWidth) {
      // 画面の横幅にサイズ変動がないので処理を終える
      return;
    }

    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    setFillHeight();
  });

  // 初期化
  setFillHeight();

  // 上に戻るボタン & header-bottom固定ナビゲーション

  function page_up() {
    window.addEventListener("scroll", () => {
      const top = window.pageYOffset;
      if (top > 150) {
        if (modalBg.classList.contains("active") == false) {
          setTimeout(function () {
            pageup.style.opacity = 1;
            headerBottom.style.opacity = 1;
          }, 2);
          pageup.classList.remove("is-hide");
          headerBottom.classList.remove("is-hide");
        }
      } else {
        setTimeout(function () {
          pageup.style.opacity = 0;
          headerBottom.style.opacity = 0;
        }, 2);
        pageup.classList.add("is-hide");
        headerBottom.classList.add("is-hide");
      }
    });

    pageup.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  page_up();
}
