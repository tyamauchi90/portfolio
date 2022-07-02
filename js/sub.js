"use strict";
{
  // スクロール関連メソッド
  function scroll_control(event) {
    event.preventDefault();
  }
  function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
  }
  // スクロール禁止解除
  function return_scroll() {
    // PCでのスクロール禁止解除
    document.removeEventListener("mousewheel", scroll_control, {
      passive: false,
    });
    // スマホでのタッチ操作でのスクロール禁止解除
    document.removeEventListener("touchmove", scroll_control, {
      passive: false,
    });
  }
/* ハンバーガーメニュー */
const menuTrigger = document.querySelector(".menu-trigger");
const gnavBg = document.querySelector(".gnav_bg");
const gnavSp = document.querySelector(".gnav_sp");
function menuToggle() {
  menuTrigger.classList.toggle("active");
  gnavBg.classList.toggle("active");
  gnavSp.classList.toggle("active");
  if (gnavBg.classList.contains("active") == true) {
    no_scroll();
  } else {
    return_scroll();
  }
}

menuTrigger.addEventListener("click", () => {
  menuToggle();
});

gnavSp.addEventListener("click", () => {
  menuToggle();
});

}