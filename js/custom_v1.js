(() => {
    const viewInfo = {
      canvas: document.querySelector('.view-canvas'),
      context: document.querySelector('.view-canvas').getContext('2d'),
    //   pageYOffset: document.window.innerHeightheight,
      imageCount: 69,
      images: [],
      progress: 0,
      currentFrame: 0,
    };
    function setView() {
      let viewImg;
      for (let i = 0; i < viewInfo.imageCount; i++) {
        let num = i + 1;
        let imgNum = num < 70 ? '0' + num : num;
        viewImg = new Image();
        // viewImg.src = `https://images.stockx.com/360/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott/Images/Air-Jordan-1-High-OG-SP-fragment-design-x-Travis-Scott/Lv2/img${imgNum}.jpg`;
        viewImg.src = `_assets/images/animate/dance${imgNum.padStart(3, '0')}.jpg`;
        viewInfo.images.push(viewImg);
      }
      document.body.classList.remove('before-load');
      // resize
      // canvas.width  = window.innerWidth;
      // canvas.height = window.innerHeight;
      // if (widthRatio <= heightRatio) {
      //   viewInfo.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${imgResize}) `;
      // } else {
      //   viewInfo.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio}) )`;
      // } // 브라우저 크기 비율에 따른 canvas 비율 변경
      viewImg.onload = function () {
        viewInfo.context.drawImage(viewInfo.images[0], 0, 0, window.innerWidth, window.innerHeight);
      };
      viewLoop();
    }
    function viewLoop() {
      viewInfo.progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      if (viewInfo.progress < 0) {
        viewInfo.progress = 0;
      }
      if (viewInfo.progress > 1) {
        viewInfo.progress = 1;
      }
      viewInfo.currentFrame = Math.round((viewInfo.imageCount - 1) * viewInfo.progress);
      viewInfo.context.drawImage(viewInfo.images[viewInfo.currentFrame], 0, 0);
      requestAnimationFrame(viewLoop);
    }
    window.addEventListener('resize', setView);
    window.addEventListener('load', setView);
  })();



  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      // console.log(entry.isIntersecting && !entry.target.classList.contains("animated"));
      // if (entry.isIntersecting && !entry.target.classList.contains("animate")) {
      if (entry.isIntersecting ) {
          entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    })
  }
  
  const observer = new IntersectionObserver(callback, options);
  
  const animatedElements = document.querySelectorAll(".animate");
  
  animatedElements.forEach(element => observer.observe(element));