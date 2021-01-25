const btn = document.querySelector('.btn-open');
const allItems = document.querySelectorAll('.items');
const ligne = document.querySelector('.ligne');


btn.addEventListener('click', () => {

    btn.classList.toggle('active')
    ligne.classList.toggle('active-ligne');

    allItems.forEach(item => {

        item.classList.toggle('apparition')

        if(item.classList.contains('apparition') === true){

            setTimeout(() => {
                item.classList.toggle('real');
            }, 200)

        } else {
            item.classList.toggle('real');
        }

    })

})

allItems.forEach(item => {
    item.addEventListener('click', () => {

        btn.classList.toggle('active');
        ligne.classList.toggle('active-ligne');

        allItems.forEach(item => {
            item.classList.toggle('real')
            item.classList.toggle('apparition')
        })
    })
})

// Qui sommes-nous accordeon 

const allCross = document.querySelectorAll('.panneau-visible img');

allCross.forEach(logo => {

    logo.addEventListener('click', function(){

        // console.log(this);
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus')){
            this.src = "/ressources/minus.svg";
            currentChoice.style.height = height + 40 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "/ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity =0;
            currentChoice.style.padding = "0px 15px";
        }

    })

})
