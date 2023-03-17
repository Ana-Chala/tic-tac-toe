const box=document.querySelectorAll('.box');
const refresh=document.querySelector('.restart');
const container=document.querySelector('.container');
const ix=document.querySelector('.ix');
const zero=document.querySelector('.zero');
const middleBox=document.querySelector('.middle-box');
const overlay=document.querySelector('.overlay')
//const activeX=document.querySelector('.active-x')

/*It changes symbols from x to 0 and vice versa*/

let count=0;


box.forEach(box=>{
  box.addEventListener('click', ()=>{
    count++;
console.log(count);
    if(!ix.classList.contains('passive')){
      ix.classList.add('passive');
      zero.classList.add('active');
      box.classList.add('active-x')
      
    }else if(ix.classList.contains('passive')){
      ix.classList.remove('passive');
      zero.classList.remove('active');
      box.classList.add('active-0')
    }
    checkWinner();
    checkWinnerO();
    //I need to limit clicks to one click per button
      //it doesn't works;
  });

  },{once: true});

/* ---------------------------------------------------------------------------------------------- */
refresh.addEventListener('click',()=>{
  for(let i=0; i<box.length; i++){
    box[i].classList.remove('active-x');
    box[i].classList.remove('active-0');
    overlay.classList.remove('active');
  }
})


/*------------------------------------------------------------------------------------------------- */
function checkWinner (){
  if(box[0].classList.contains('active-x')&&box[1].classList.contains('active-x')&&box[2].classList.contains('active-x')){
console.log('giugu')
  }else if(box[3].classList.contains('active-x')&&box[4].classList.contains('active-x')&&box[5].classList.contains('active-x'))
  {
    
  }else if(box[6].classList.contains('active-x')&&box[7].classList.contains('active-x')&&box[8].classList.contains('active-x')){
   
  }else if(box[0].classList.contains('active-x')&&box[3].classList.contains('active-x')&&box[6].classList.contains('active-x')){

  }else if(box[1].classList.contains('active-x')&&box[4].classList.contains('active-x')&&box[7].classList.contains('active-x')){
   
  }else if(box[2].classList.contains('active-x')&&box[5].classList.contains('active-x')&&box[8].classList.contains('active-x')){
   
  }else if(box[0].classList.contains('active-x')&&box[4].classList.contains('active-x')&&box[8].classList.contains('active-x')){
    
  }else if(box[2].classList.contains('active-x')&&box[4].classList.contains('active-x')&&box[6].classList.contains('active-x')){
   
  }
}; //it works



/* ------------------------------------------------------------------------------------------------------------------------------- */
function checkWinnerO (){
  if(box[0].classList.contains('active-0')&&box[1].classList.contains('active-0')&&box[2].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[3].classList.contains('active-0')&&box[4].classList.contains('active-0')&&box[5].classList.contains('active-0'))
  {
    overlay.classList.add('active');
  }else if(box[6].classList.contains('active-0')&&box[7].classList.contains('active-0')&&box[8].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[0].classList.contains('active-0')&&box[3].classList.contains('active-0')&&box[6].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[1].classList.contains('active-0')&&box[4].classList.contains('active-0')&&box[7].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[2].classList.contains('active-0')&&box[5].classList.contains('active-0')&&box[8].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[0].classList.contains('active-0')&&box[4].classList.contains('active-0')&&box[8].classList.contains('active-0')){
    overlay.classList.add('active');
  }else if(box[2].classList.contains('active-0')&&box[4].classList.contains('active-0')&&box[6].classList.contains('active-0')){
    
  }
 
}; 
 








  /* You can check for a win by checking all possible combinations of three in a row, column or diagonal  */










          /*1. player should choose a symbol x or 0.
  2.then which symbol was chooser by player should be written in the middle box; 0 or x;
  3.then player should choose any box from given nine and click on it, where the chosen symbol will add.
  4. second player or computer should also click any given box exept of already chosen one and click on it, where the second symbol will add.
  5. player should add second symbol on the next(if it is 1-on 2,4 or 5---if it's 2-on 1,3 or 5  if its 3-2,6 or 5; 4-on --5,7,1  if it's 5-on every (1-4; 6-9;) 6-on; 5,3,9, 7-on--5,8,4,  8-on--5,9,7 9-on --8,6,5;b)
  6. once one player clicked , symbol should change from chosen symbol to another if it is x- is should become 0, if its 0 vice versa
  7.I am thinking about using for loop, for each, array length - box, classList method, logical operators.
*/