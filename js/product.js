const info = document.getElementById('info')
const title = document.getElementById('title');
const company = document.getElementById('company');
const sum = document.getElementById('sum');
const infos = document.getElementById('infos');
const image = document.getElementById('image');
const loding = document.getElementById('loding')




document.addEventListener('DOMContentLoaded', function () {

    let res = window.location.href;
    let id = res.split('id=')[1];
    if (id) {
        fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                }
            })
            .then(data => {
                if (data.data.id) {
                    image.setAttribute('src', data.data.attributes.image)
                    title.innerHTML = data.data.attributes.title;
                    company.innerHTML = data.data.attributes.company;
                    sum.innerHTML = data.data.attributes.price;
                    infos.innerHTML = data.data.attributes.description;
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(function () {
                info.style.display = 'flex';
                info.style.gap = '30';
                loding.remove()
            })

    } else {
        window.location.assign('http://127.0.0.1:5500/html/prodact.html')
    }

})
    