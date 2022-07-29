function debounce(fn,dur=500){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this.arguments) 
        },dur)
    }
}

const test = document.getElementById('txt')

test.addEventListener('keyup',debounce(function(){
        console.log(test.value);
}))
