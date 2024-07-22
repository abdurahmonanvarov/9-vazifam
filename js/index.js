const wrapper = document.getElementById('continer')
const loding = document.getElementById('loding')




document.addEventListener("DOMContentLoaded", function () {
  function createCard(data) {
    return `
        <div class="cover" data-id = ${data.id}>
            <img src="${data.attributes.image}">
            <h2>${data.attributes.title}</h2>
            <span>$${data.attributes.price}</span>
        </div>
    `;
  }
  fetch("https://strapi-store-server.onrender.com/api/products/")
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
        if (data.data.length){
            data.data.forEach(el =>{
                let card = createCard(el)
                wrapper.innerHTML += card
            })
        }

        let cards = document.querySelectorAll('.cover')
        cards.length && cards.forEach(function(card) {
            card.addEventListener('click', function(){
                let id = this.getAttribute('data-id')
               window.location.assign(`http://127.0.0.1:5500/html/prodact.html?id=${id}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            })
        })
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(function(){
        loding.remove()
    })
});
