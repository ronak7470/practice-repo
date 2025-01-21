const body = document.querySelector("body")
const buttons = document.querySelectorAll('.box')

//console.log(button)

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id === 'red'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.background = e.target.id
        }
    })
})







/*button.addEventListener('click',function(event){
  if(event.target.id === 'red'){
    body.style.background= 'red'
  }
})*/