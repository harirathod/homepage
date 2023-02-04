main();

function main() {
    document.onload = loadTitlePage();
    document.onload = loadFormPage();
}


function load(identifier) {
    const element = document.querySelector(identifier);
    element.classList.add('opacity-load-in');
    setFullOpacity(element);
}

function stretchIn(identifier) {
    const element = document.querySelector(identifier)
    element.classList.add('stretch-in');
    setFullOpacity(element);
}

function setNoOpacity(element) {
    element.setAttribute('style', 'opacity: 0');
}

function setFullOpacity(element) {
    element.setAttribute('style', 'opacity: 1');
}

function loadTitlePage() {
    load('#title');
    setTimeout(() => { load('.down-arrow'); }, 2000);
    addDateToTitlePage();
}


function loadFormPage() {
    setTimeout(() => {
        load('.text1');
        load('.text2');
    }, 200);
    setTimeout(() => {
        stretchIn('div#form-ctnr');
        setTimeout(() => {
            stretchIn('form');
            setTimeout(() => { 
                load('form button'); 
                load('form > div'); 
            }, 2000);
        }, 2000);
    }, 2500);
}

function resetFormPage() {

    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    const formCtnr = document.querySelector('div#form-ctnr');
    const form = document.querySelector('form');
    const formBtn = document.querySelector('form button');
    const formDiv = document.querySelector('form > div');
    const formElements = [text1, text2, formCtnr, form, formBtn, formDiv];
    formElements.forEach(element => {
        setNoOpacity(element);
        if(element.classList.contains('stretch-in')) element.classList.remove('stretch-in');
        if(element.classList.contains('opacity-load-in')) element.classList.remove('opacity-load-in');
    });
}

const downArrow = document.querySelector('.down-arrow-ctnr');
downArrow.addEventListener('click', (e) => {
    resetFormPage();
    loadFormPage();
})

function addDateToTitlePage() {
    const date = document.createElement('div');
    date.textContent= '2023';
    date.classList.add('title-page-date')
    const titlePage = document.querySelector('#titlepage');
    titlePage.insertBefore(date, titlePage.childNodes[0]);
}


/*function createMiddlePage() {
    const page = document.querySelector('#page3');
    const t1 = document.createElement('div');
    t1.innerHTML = 
    <div>
    <div>
        You're might be thinking, 
    </div>
        <div>
            what on <em>earth</em> is Glacier?
        </div>
        <div>
            
        </div>
        <div>

        </div>
    </div>;
    
}*/