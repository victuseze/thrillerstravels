const dataText = ['Thrillers Travels.', 'Thrillers Travels.', 'Thrillers Travels.'];
let typingStyle = document.querySelector('.text-effect')

let typingEffect = () => {

    let typeWriter = (text, i, fnCallback) => {
    if (i < (text.length)){
        typingStyle.innerHTML = text.substring(0, i+1) + "<span class='effect'></span>";

        setTimeout(() => {
        typeWriter(text, i+1, fnCallback)
        }, 100)
    }
    else if(typeof fnCallback == 'function'){
        setTimeout(fnCallback, 700);
    }
    }

    let startTextAnimation = (i) => {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(() => {
        startTextAnimation(0);
        }, 2000)
    }
    if (i < dataText[i].length){
        typeWriter(dataText[i], 0, () => {
        startTextAnimation(i + 1);
        });
    }
    }
    startTextAnimation(0);
}
typingStyle.addEventListener('DOMContentLoaded', typingEffect());


//Content slide-out on clicks
// let links = document.querySelectorAll('.link')
// let allContent = document.querySelectorAll('.content')

// for(let i = 0; i < links.length; i += 1) {
//   links[i].addEventListener('click', (e)=>{
//     e.preventDefault();
//     const filter = e.target.dataset.filter;
//     console.log(filter);

//     allContent.forEach((content)=>
//     {
//       if(filter === 'content'){
//         content.style.display = 'block'
//       }
//       else if (content.classList.contains(filter)){
//         content.style.display = 'block'
//       }
//       else{
//         content.style.display = 'none'
//       }
//     })
//   })
// }

let links = document.querySelectorAll('.link');
let allContent = document.querySelectorAll('.content');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log(filter);

    allContent.forEach((content) => {
      if (filter === 'all' || content.classList.contains(filter)) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
}



