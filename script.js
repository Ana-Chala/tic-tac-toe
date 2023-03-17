const box=document.querySelectorAll('.box');
const buttonTwo=document.querySelector('.button-two');

box[0].addEventListener('click',()=>{
    box[0].classList.add('active')
    box[1].classList.remove('active');
    })


    box[1].addEventListener('click',()=>{
        box[1].classList.add('active');
        box[0].classList.remove('active');
        })

        buttonTwo.addEventListener('click', () => {
            window.location.href = 'game.html';
          });