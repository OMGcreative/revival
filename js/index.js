var anim;
var elem = document.getElementById('bm')
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

document.getElementById('bm').addEventListener('mouseover', function(){ anim.play(); })