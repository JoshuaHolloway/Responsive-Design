const card = document.querySelector('.Card');
card.addEventListener( 'mouseover', () => {
  card.classList.toggle('is-flipped');
  
  // Disable pointer while flipping (avoid mulit-flips)
  //pointer-events: none;
  //card.style.pointerEvents = 'none';

  
//   const ms = 1.0e3; // 0.5s.
//     setTimeout((card) => {
//         card.addEventListener( 'mouseout', () => {
//         card.classList.toggle('is-flipped');       
//         // Disable pointer while flipping (avoid mulit-flips)
//         //pointer-events: none;
//         card.style.pointerEvents = 'auto';
//         });
//     }, ms);
});
// card.addEventListener("transitionend", myEndFunction);
//     function myEndFunction() {
//         this.innerHTML = "transition event ended";
//         card.style.pointerEvents = 'auto';

//     card.addEventListener( 'mouseout', () => {
//         card.classList.toggle('is-flipped');       
//         // Disable pointer while flipping (avoid mulit-flips)
//         //pointer-events: none;
//         // card.style.pointerEvents = 'auto';
//     });
// }