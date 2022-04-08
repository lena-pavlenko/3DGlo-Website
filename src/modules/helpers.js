// Анимация
const animate = ({duration, timing, draw}) => {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress); // отрисовать её
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

// Плавный скролл
const scrollSmooth = (anchor) => {
    
    let dist = document.documentElement.scrollTop + anchor.getBoundingClientRect().top;

    window.scrollTo({
        top: dist,
        behavior: "smooth"
    })
}

export { animate, scrollSmooth }