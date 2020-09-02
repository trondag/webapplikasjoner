window.onload = start;

function start() {
  addMainToBody();
  addParagraphToBody();
  createAndPopulateSelectBox();
  styleTheSelect();
  createTwoButtons();
  makeEventListenerToButtons();
  createUlWith4ListElements();
  adDeleteButtonsToList();
  addListenerToButtons();
}

function addMainToBody() {
  let main = document.createElement('main')
  document.querySelector('body').appendChild(main)
}

function addParagraphToBody(){
  let p = document.createElement('p')
  let text = document.createTextNode('Jeg trener på JavaScript')
  p.appendChild(text)
  p.classList.add('theClass')
  document.querySelector('main').appendChild(p)
}

function createAndPopulateSelectBox(){
  let select = document.createElement('select')
  let theObject = {
    theChoices: ['Apple', 'Banana', 'Orange', 'Peach', 'Grapes']
  }
  theObject.theChoices.forEach(element => {
    let option = document.createElement('option')
    let theText = document.createTextNode(element)
    option.appendChild(theText)
    select.appendChild(option)
  });
  document.querySelector('main').appendChild(select)
}

function styleTheSelect(){
  let theSelect = document.querySelector('select')
  theSelect.style.margin = ('0 auto')
  theSelect.style.display = ('block')
  document.querySelector('main').style.maxWidth = ('500px')
}

function createTwoButtons(){
  let button1 = document.createElement('button')
  let button1Text = document.createTextNode('Test')
  button1.appendChild(button1Text)
  document.querySelector('main').appendChild(button1)
  let button2 = document.createElement('button')
  let button2Text = document.createTextNode('Reset')
  button2.appendChild(button2Text)
  document.querySelector('main').appendChild(button2)
}

function makeEventListenerToButtons(){
  document.querySelectorAll('button')[0].addEventListener('click', testButtonClicked)
  document.querySelectorAll('button')[1].addEventListener('click', resetButtonClicked)
}

function testButtonClicked(){
  console.log('hei')
  let text = document.querySelector('p').innerHTML
  let array = text.split('')
  let reversedArray = array.reverse()
  let joinedArray = reversedArray.join('')
  array = joinedArray.split(' ')
  let newArray = []
  array.forEach(element => {
    element = element.split('')
    element.splice(0, 1)
    element = element.join('')
    newArray.push(element)
  });
  array = newArray.join(' ')
  let p = document.createElement('p')
  let content = document.createTextNode(array)
  p.appendChild(content)
  document.querySelector('main').appendChild(p)
}

function resetButtonClicked(){
  document.querySelector('ul').remove()
  createUlWith4ListElements();
}

function createUlWith4ListElements(){
  let ul = `
    <ul>
      <li>1  </li>
      <li>2  </li>
      <li>3  </li>
      <li>4  </li>
    </ul>
  `
  ul = document.createElement('ul')
  for (let i = 0; i < 4; i++){
    let li = document.createElement('li')
    let text = document.createTextNode(`listeelement ${i+1}`)
    li.appendChild(text)
    ul.appendChild(li)
  }
  document.querySelector('main').appendChild(ul)
}

function adDeleteButtonsToList(){
  let listElements = document.querySelectorAll('li');
  listElements.forEach(element => {
    element.innerHTML += `<button class="deleteButtons">DELETE</button>`
  });
}

function addListenerToButtons(){
  let theButtons = document.querySelectorAll('.deleteButtons')
  theButtons.forEach(element => {
    element.addEventListener('click', deleteListItem)
  });
}

function deleteListItem(){
  this.parentNode.remove()
}