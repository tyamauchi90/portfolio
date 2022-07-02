"use strict";
{
  const allBtn = document.querySelector(".all_btn");
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  const personalImg = document.querySelector(".personal_img");
  const personalImgA = personalImg.querySelectorAll("a");
  const familyImg = document.querySelector(".family_img");
  const familyImgA = familyImg.querySelectorAll("a");
  const sceneImg = document.querySelector(".scene_img");
  const sceneImgA = sceneImg.querySelectorAll("a");
  const especialyImg = document.querySelector(".especialy_img");
  const especialyImgA = especialyImg.querySelectorAll("a");

  /* LightBox2用の属性を自動的に追加 */
  function lightbox2() {
    for (let a = 0; a < personalImgA.length; a++) {
      personalImgA[a].setAttribute("data-lightbox", "personal_img");
    }
    for (let b = 0; b < familyImgA.length; b++) {
      familyImgA[b].setAttribute("data-lightbox", "family_img");
    }
    for (let c = 0; c < sceneImgA.length; c++) {
      sceneImgA[c].setAttribute("data-lightbox", "scene_img");
    }
    for (let d = 0; d < especialyImgA.length; d++) {
      especialyImgA[d].setAttribute("data-lightbox", "especialy_img");
    }
  }
  window.addEventListener("load", () => {
    lightbox2();
  });

  /* タブパネル関連 */
  document.addEventListener(
    "DOMContentLoaded",
    function () {

      /* allボタンを押せば全imgを表示 */
      allBtn.addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
          tabs.forEach((tabs) => {
            tabs.classList.remove("is_active");
          });
          allBtn.classList.add("is_active");
        }
        for (let i = 0; i < panels.length; i++) {
          panels[i].classList.add("show");
        }
      });

      // タブに対してクリックイベントを適用
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", tabSwitch, false);
      }

      function tabSwitch() {
        // allボタンからis_activeを削除する
        allBtn.classList.remove("is_active");
        // タブのclassの値を変更（.is_activeをクリックしたタブにのみ付与）
        for (let i = 0; i < tabs.length; i++) {
          tabs.forEach((tabs) => {
            tabs.classList.remove("is_active");
          });
          this.classList.add("is_active");
        }
        // コンテンツのclassの値を変更（.showを.is_activeのついたタブのpanelにのみ付与）
        for (let i = 0; i < panels.length; i++) {
          panels.forEach((panels) => {
            panels.classList.remove("show");
          });
        }
        // tabsを配列風にし、順序をindexに格納
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        // 同じindexのpanelにのみ.showを付与
        panels[index].classList.add("show");
      };

    }, false);

  /* 問い合わせ関連 */

  const aboutBtn = document.querySelector(".about");
  const toggleBtn = document.querySelectorAll(".about > span");
  const aboutContent = document.querySelector(".about_content");
  const contactContents = document.querySelector(".contact_contents");

  aboutBtn.addEventListener("click", () => {
    for (let i = 0; i < toggleBtn.length; i++) {
      toggleBtn[i].classList.toggle("hide");
      if (toggleBtn[i].classList.contains("hide") == false) {
        aboutContent.classList.remove("hide");
        contactContents.classList.remove("hide");
      } else {
        aboutContent.classList.add("hide");
        contactContents.classList.add("hide");
      }
    }
  });
}
