// call element add innertext 
const changeText = document.getElementById('blog-title-3');
changeText.textContent = 'thats magic';
//elements call korle akti array like object pawa jay
const blogTitle = document.getElementsByClassName('blog-title');
for (const title of blogTitle) {
  title.style.textDecoration = 'underline';
}
//style like css
const body = document.getElementsByTagName('body');
body[0].style.padding = '0px 20%';
const section = document.getElementById('main');
section.style.border = '2px dotted red';
section.style.padding = '20px';

const varyty = document.getElementsByClassName('blog-title')[3];
varyty.style.color = 'red';
//query selector
const likeCss = document.querySelectorAll('.sections');
for (const elet of likeCss) {
  elet.style.border = '2px solid yellow';
}


 //remove child
 const removeItem = document.getElementById('section-2');
 removeItem.remove()         //dot remove() diye kono element remove kora jay


const titleTwo = document.getElementById('blog-title-2');
titleTwo.getAttribute('class');//attribute get
titleTwo.setAttribute('title', 'wo ho'); //add attribute
titleTwo.removeAttribute('attributeName')
titleTwo.parentNode;//find parent elements
titleTwo.childNodes;//find child elements
//add element 
const newBlog = document.createElement('section');
newBlog.style.border = '2px solid green'
newBlog.innerHTML = `
<h1 class="blog-title" id="blog-title-3">blog no 3</h1>
      <p class="details" id="details-3">Accusantium id nobis consequatur rerum voluptates, dolore maiores nemo iste perspiciatis. Obcaecati molestias eveniet similique a nemo laudantium fuga ipsa officia ut culpa facere quia eos, modi, odio, commodi delectus alias cum dignissimos quo!</p>
`
const blogSection = document.getElementById('main');
blogSection.appendChild(newBlog);//apend a child in parent element