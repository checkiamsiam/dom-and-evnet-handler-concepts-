function makeRed(){
  document.body.style.backgroundColor = 'red';
  // var testItem =document.getElementsByTagName('h1');
  // testItem[0].style.backgroundColor = 'red';
}

const thirdButton = document.getElementById('third');
thirdButton.onclick = MakeBlue;

function MakeBlue(){
  document.body.style.backgroundColor = 'blue';
}

const button4 = document.getElementById('fourth');
button4.onclick = function(){
  document.body.style.backgroundColor = 'green';
}
//shotcut 
document.getElementById('fifth').addEventListener('click' , function(){//annonymus function
  document.body.style.backgroundColor = 'hotPink'
})

//playing with form value
document.getElementById('seventh').addEventListener('click' , function(){
  document.getElementById('empty').innerText = document.getElementById('field').value
  document.getElementById('field').value = '';
})

