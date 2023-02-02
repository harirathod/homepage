main();

function main() {
    document.onload = loadPage1();
    loadPage2();

}

function load(identifier) {
    const element = document.querySelector(identifier);
    element.classList.add('opacity-load-in');
    element.setAttribute('style', 'opacity: 1');
}

function loadPage1() {
    load('#title');
    setTimeout(() => { load('.down-arrow'); }, 2000);
}


function loadPage2() {
    load('.text1');
    load('.text2');
    setTimeout(() => { 
        const form = document.querySelector('form');
        form.classList.add('stretch-in');
        form.setAttribute('style', 'opacity: 1');
        setTimeout(() => { load('form > *'); }, 2000);
    }, 3000);

}

