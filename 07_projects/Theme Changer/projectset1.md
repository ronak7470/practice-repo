#Project related to DOM

##project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

##project 1

```javascript
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

```