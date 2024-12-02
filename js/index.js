var anim;
var elem = document.getElementById('bm');
var animation = bodymovin.loadAnimation({
    container: elem,
    renderer: 'svg',
    prerender: true,
    loop: false,
    autoplay: true,
    // rendererSettings: {
    //     progressiveLoad:false,
    //     preserveAspectRatio: 'xMidYMid slice'
    // },
    path: 'data.json'
  });

//   animation.play();

//   elem.addEventListener("mouseenter", function() {
//     animation.play();
//   });
//   elem.addEventListener("mouseleave", function() {
//     animation.stop();
//   });

// let animationDiv = document.getElementById('anim_wrap')
//     animationDiv.style.display = "none"

// window.addEventListener('scroll', () => {
//     // can set scroll height by changing the number
//     let scrollHeightPercent = document.documentElement.scrollHeight * 0.08
//     let currentPOS = document.documentElement.scrollTop || document.body.scrollTop

//         // once the scroll height has gone past the % stated abvoe it will make the style appear
//     if (currentPOS >= scrollHeightPercent) {
//         let animationDiv = document.getElementById('anim_wrap');
//         if (animationDiv.style.display == 'none') {
//             // stuff here
//             animationDiv.style.display= ""

//               animation.play();

//             let bodyMotion1 = document.getElementById(elem);
//             loader(bodyMotion1, elem)
//         } else {
//             // stuff here
//             animationDiv.style.display = "none"
//             animation.stop();

//         }
//         ;
//     };
// });

//Play an animation back on second click

let containerAnim = document.querySelector('.svg_wrap');

let logoAnimate = document.getElementById('bm');

    let animationLogo = bodymovin.loadAnimation({
      container: logoAnimate,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'data.json'
    });

    var directionAmin = 1;
    logoAnimate.addEventListener('mouseenter', (e) => {
      animationLogo.setDirection(-directionAmin);
      animationLogo.play();
    });

    logoAnimate.addEventListener('mouseleave', (e) => {
      animationLogo.setDirection(directionAmin);
      animationLogo.play();
    });


// var t, hoverTime = 2000;

// function start() {
//   getInTime();
//   t = setTimeout('pauseAnim()', hoverTime);
//   anim.goToAndPlay(0);
//   console.log("play");
// }

// function pauseAnim() {
//   anim.pause();
// }

// function pauseToEnd() {
//   anim.play();
//   anim.addEventListener('loopComplete', function() {
//     anim.stop();
//   });
//   clearTimeout(t);
// }

// function pauseToStart() {
//   anim.goToAndStop(0);
// }

// containerAnim.addEventListener('mouseenter', function(){
//   start();
// });
// containerAnim.addEventListener('mouseleave', function(){
//   getOutTime();
//   if (timeFull > hoverTime) {
//     pauseToEnd();
//   } else {
//     pauseToStart();
//   }
// });