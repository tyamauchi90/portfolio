// モーダルウィンドウの背景固定したいのに・・・

// topへ戻る
window.scroll({
  top: 0,
  behavior: "smooth",
});

// 【px取得】
const modalHeight = modal.clientHeight;
modalMain.style.bottom = `-${modalHeight}px`;

// 【スクロール禁止】
window.onload = function () {
  // スクロールを禁止にする関数
  function disableScroll(event) {
    event.preventDefault();
  }

  // スクロール禁止
  document.openbtn.onclick = function () {
    // イベントと関数を紐付け
    document.addEventListener("touchmove", disableScroll, { passive: false });
    document.addEventListener("mousewheel", disableScroll, {
      passive: false,
    });
  };

  // スクロール解除
  document.getElementById("off").onclick = function () {
    // イベントと関数を紐付け
    document.removeEventListener("touchmove", disableScroll, {
      passive: false,
    });
    document.removeEventListener("mousewheel", disableScroll, {
      passive: false,
    });
  };
};

// モーダルウィンドウ出現時はスクロールにより下部固定ナビゲーションは表示したくない
window.addEventListener("scroll", function FixNav() {
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
});

const NoFixNav = function () {
  window.removeEventListener("scroll", function FixNav() {
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
  });
};
