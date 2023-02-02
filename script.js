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
        const htmlform = document.querySelector('form');
        htmlform.classList.add('stretch-in');
        htmlform.setAttribute('style', 'opacity: 1');
        setTimeout(() => { load('form button'); load('form div'); }, 2000);
    }, 3000);

}

