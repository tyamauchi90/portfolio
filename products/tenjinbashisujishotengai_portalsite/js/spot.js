"use strict";

{
  /* 絞り込み①.seasonをクリックしたら.season_areaを表示 */
  const research1 = document.querySelectorAll(".research1 > li");
  const research2 = document.querySelectorAll(".research2");

  for (let i = 0; i < research1.length; i++) {
    research1[i].addEventListener("click", () => {
      research1.forEach((research1) => {
        research1.classList.remove("show"); // forEachを使わないとremoveできない
      });
      research2.forEach((research2) => {
        research2.classList.remove("show"); // forEachを使わないとremoveできない
      });
      research1[i].classList.add("show");
      research2[i].classList.add("show");
    });
  }

  /* 絞り込み②.springをクリックしたらおすすめスポットを表示 */
  const research3 = document.querySelectorAll(".research3");
  const spotItem = document.querySelectorAll(".spot_item");

  for (let i = 0; i < research3.length; i++) {
    research3[i].addEventListener("click", () => {
      research3.forEach((research3) => {
        research3.classList.remove("show"); // forEachを使わないとremoveできない
      });
      research3[i].classList.add("show");
      /* クリックした要素と同じクラスをもつspot_itemを表示する */
      spotItem.forEach((spotItem) => {
        spotItem.classList.remove("show");

        let timeoutID = 0;
        let delay = 500;
        const kensaku = () => {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(() => {
            spotItem.classList.toggle("show");
          }, delay);
        };
        kensaku();
      });
    });
  }
}
