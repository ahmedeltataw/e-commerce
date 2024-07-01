function calcMaxHeight(items: NodeListOf<HTMLLIElement>): number {
    let maxHeight: number = 0;
    // mobileResponsive.classList.add("open")
    items.forEach((link: any) => {
      maxHeight += link.clientHeight
    })
  
    return maxHeight;
  }
  // (((((((((animation slide )))))))))
 export let animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
    let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
    let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
    let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.1)) : (height / (height * 0.1));
    function animate() {
      if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
        if (dir === 'up') {
          targetEL.style.height = "0";
        }
        return; // Exit animation loop
      }
      height += dir === "down" ? speed : -speed;
      if (height > targetHeight && dir === 'down') {
        height = targetHeight;
      }
      targetEL.style.height = `${height}px`;
      // Request next animation frame
      requestAnimationFrame(animate);
    }
  
    // Start the animation loop
    requestAnimationFrame(animate);
  }
