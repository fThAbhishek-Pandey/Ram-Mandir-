const about = document.querySelector(".about");
const btn =document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
console.log(about);
console.log(btn);
console.log(articles);
about.addEventListener('click',(evt)=> {
    const id = evt.target.dataset.id;
    console.log(id);
    if (id) {
        // remove selected from other buttons
        btn.forEach(function(butt){
            butt.classList.remove("active");   
       });
    
    evt.target.classList.add("active");
    articles.forEach(function (article) {
    article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
     }
});