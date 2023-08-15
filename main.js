console.log('Hello World!');
const form = document.getElementById('form')
let todos = document.getElementsByClassName('main2')[0]
let input = document.getElementById('input')

let alltodos=localStorage.getItem('todos')
todos.innerHTML=alltodos
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(input.value.trim()!=''){
  let todo = document.createElement('div')
  todo.innerHTML=`<span>${input.value.trim()}</span> <img src="1.png" class="icon"/>`
  todo.classList.add('todo')
  todos.appendChild(todo)
  localStorage.setItem('todos',todos.innerHTML)
  input.value=''
  geticon()
  }
  else{
    alert('Enter the value')
  }
})
function geticon(){
let icon= document.getElementsByClassName('icon')
for(item of icon){
  item.addEventListener('click',(e)=>{
    e.target.parentElement.remove()
    localStorage.setItem('todos',todos.innerHTML)
  })
}}
geticon()