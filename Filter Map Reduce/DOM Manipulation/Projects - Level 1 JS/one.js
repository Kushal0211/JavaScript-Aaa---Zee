const buttons = document.querySelectorAll('.color')

console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(b){
  
    b.addEventListener('click',function(b){
       

        if(b.target.id === 'red')
        {
            body.style.backgroundColor = b.target.id;
        }

        if(b.target.id === 'yellow')
        {
            body.style.backgroundColor = b.target.id;
        }

        if(b.target.id === 'black')
        {
            body.style.backgroundColor = b.target.id;
        }

        if(b.target.id === 'pink')
        {
            body.style.backgroundColor = b.target.id;
        }

        if(b.target.id === 'purple')
        {
            body.style.backgroundColor = b.target.id;
        }
    })
})