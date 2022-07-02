"use strict";

{
  /* スクロール　→　header固定 */
  window.addEventListener("scroll", () => {
    const fixNavWrapper = document.querySelector(".header_wrapper");
    const fixNav = document.querySelector(".header_contents");
    const mvAreaHeight = document.querySelector(".mv_area").clientHeight;
    const logoArea = document.querySelector(".logo_area");
    const modalBg = document.querySelector(".mordal_bg");
    if (modalBg.classList.contains("active") == false) {
      if (window.scrollY >= mvAreaHeight) {
        fixNavWrapper.classList.add("fixed");
        fixNav.classList.add("fixed");
        logoArea.classList.add("fixed");
      } else {
        fixNavWrapper.classList.remove("fixed");
        fixNav.classList.remove("fixed");
        logoArea.classList.remove("fixed");
      }
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



  /* ホバーメニュー0.3秒遅延 */

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

  /* ホバーメニュー 通常*/

  // const hoverMenu = function () {
  //   const parent = document.querySelectorAll(".accordion");
  //   const children = document.querySelectorAll(".accordion_list");
  //   const modalBg = document.querySelector(".mordal_bg");

  //   for (let i = 0; i < parent.length; i++) {
  //     parent[i].addEventListener("mouseenter", (e) => {
  //       e.preventDefault();
  //       modalBg.classList.add("active");
  //       parent[i].classList.add("active");
  //       children[i].classList.add("active");
  //     });
  //     parent[i].addEventListener("mouseleave", (e) => {
  //       e.preventDefault();
  //       modalBg.classList.remove("active");
  //       parent[i].classList.remove("active");
  //       children[i].classList.remove("active");
  //     });
  //   }
  // };
  // hoverMenu();


  /* kw_area　横幅681px以上→ホバーイベント0.3秒遅延、681px未満→クリックイベント */
  document.addEventListener("DOMContentLoaded", function () {
    
    const resize = () => {
      let timeoutID = 0;
      let delay = 200;

      window.addEventListener(
        "resize",
        () => {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(() => {
            //ここにリサイズした後に実行したい処理を記述
            if (window.innerWidth < 680) {
              kwClickMenu();
            }
          }, delay);
        },
        false
      );
    };

    resize();

    const kwMordalBg = document.querySelector(".kw_mordal_bg");
    const parent = document.querySelectorAll(".kw_parent");
    const children = document.querySelectorAll(".kw_child");
    let kwTimer;

    for (let i = 0; i < parent.length; i++) {
      const kwHoverIn = function(){
        kwMordalBg.classList.add("active");
        parent[i].classList.add("active");
        children[i].classList.add("active");
      }
      const kwHoverOut = function(){
        kwMordalBg.classList.remove("active");
        parent[i].classList.remove("active");
        children[i].classList.remove("active");
      }
      const kwMouseEnter = () => {
        kwTimer = window.setTimeout(kwHoverIn, 300);
      }
      const kwMouseLeave = () => {
        kwHoverOut();
        window.clearTimeout(kwTimer);
      }
      const kwHoverMenu = function(){
      parent[i].addEventListener('mouseenter',kwMouseEnter);
      parent[i].addEventListener('mouseleave',kwMouseLeave);
     }
     kwHoverMenu();
    }

    // 横幅681px以上なら
    /* キーワードホバーメニュー */
    // const kwHoverMenu = function () {
    //   if (window.innerWidth >= 681) {
    //     for (let i = 0; i < parent.length; i++) {
    //       parent[i].addEventListener(
    //         "mouseenter",
    //         (e) => {
    //           e.preventDefault();
    //           kwMordalBg.classList.add("active");
    //           parent[i].classList.add("active");
    //           children[i].classList.add("active");
    //         },
    //         false
    //       );
    //       parent[i].addEventListener(
    //         "mouseleave",
    //         (e) => {
    //           e.preventDefault();
    //           kwMordalBg.classList.remove("active");
    //           parent[i].classList.remove("active");
    //           children[i].classList.remove("active");
    //         },
    //         false
    //       );
    //     }
    //   }
    // };
    // kwHoverMenu();

    /* キーワードクリックメニュー_sp対応 */
    // 横幅681px未満なら

    const kwClickMenu = function () {
        for (let i = 0; i < parent.length; i++) {
          parent[i].addEventListener(
            "click",
            () => {
              kwMordalBg.classList.toggle("active");
              parent[i].classList.toggle("active");
              children[i].classList.toggle("active");
            },
            false
          );
        }
    }
    // kwClickMenu();

  });

  /* topへ戻る */
  const logoTop = document.querySelector(".logo_top");
  logoTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
