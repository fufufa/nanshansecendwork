function throttle(fn, time = 500){
    let timer;
    return function(...args){
      if(timer == null){
        fn.apply(this,  args);
        timer = setTimeout(() => {
          timer = null;
        }, time)
      }
    }
}

const btn = document.getElementById('btn')
let m = 1
btn.addEventListener('click',throttle(function(){
    console.log(m++);
}))
