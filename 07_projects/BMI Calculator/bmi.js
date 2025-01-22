const form = document.querySelector('form')
const result = document.querySelector('.res')
form.addEventListener('submit', function(e){
  e.preventDefault()
  let h = parseInt( document.querySelector('.height').value)
  let w = parseInt(document.querySelector('.weight').value)
  
  hh = h*h
  console.log(hh);
  bmi = w/hh
  

  result.innerHTML = bmi
  
})

