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

  /* ロード画面（sessionStrageを使用して1回目のみ表示） */

  const loading = document.getElementById("loading");

  window.addEventListener(
    "load",
    () => {
      // 1回目のアクセスかどうか
      if (sessionStorage.getItem("acs") === null) {
        // 1回目の場合はWebStorageを設定
        sessionStorage.setItem("acs", "on");
        no_scroll();
        setTimeout(() => {
          loading.classList.add("loaded");
          return_scroll();
        }, 3000);
      } else {
        // 2回目以降の場合は要素を削除
        loading.remove();
      }
    },
    false
  );

  /* ロード画面テキストアニメーション */

  function typewriter(param) {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
      setTimeout(() => {
        el.textContent += char;
      }, speed * index);
    });
  }

  typewriter({
    el: "#typewriter",
    string: "Thank you for checking my Portfolio Site!",
    speed: 62,
  });

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

  /* 各セクションのスクロールアニメーション */

  const fadeInTarget = document.querySelectorAll(".fade-in");
  window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 100) {
        fadeInTarget[i].classList.add("scroll-in");
      }
    }
  });

  /* products 詳細を表示ボタン */
  const detailBtn = document.querySelectorAll(".detail_btn");
  for(let i = 0; i < detailBtn.length; i++){
    detailBtn[i].addEventListener("click",detailToggle,false);
  }
    function detailToggle() {
    const detail = document.querySelectorAll(".detail");
      // detailBtnを配列風にし、順序をindexに格納
      const arrayDetailBtn = Array.prototype.slice.call(detailBtn);
      const index = arrayDetailBtn.indexOf(this);
      // 同じindexのdetailにのみ.showをtoggle処理
      detail[index].classList.toggle("show");
    };
}
