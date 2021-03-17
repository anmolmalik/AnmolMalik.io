function asdf(){
    let letter = document.querySelectorAll('.letter');

    anime({
        targets: letter,
        translateY : [60,0],
        delay : (el,i) => 300 + 70 * i,
        opacity : [0 , 1],
        duration : 1000
    })
    anime({
        targets : '.in-line',
        translateX : [-50,0],
        opacity : [0,1],
        duration : 1000,
        delay : 1800
    })
}

document.addEventListener(window.onload , asdf())


