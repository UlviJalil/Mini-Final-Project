// update Task:

// fetch("https://northwind.vercel.app/api/suppliers").then(
//     res => {
//       res.json().then(
//         data => {

//           if (data.length > 0) {
//   console.log(data);
//             let temp = "";
//             data.forEach((itemData) => {
//               temp += "<tr>";
//               temp += "<td>" + itemData.id + "</td>";
//               temp += "<td>" + itemData.companyName + "</td>";
//               temp += "<td>" + itemData.contactName + "</td>";
//               temp += "<td>" + itemData.contactTitle + "</td>";
//               temp += "<td>" + itemData.address + "</td>";
//             });
//             document.getElementById('data').innerHTML = temp;
//           }
//         }
//       )
//     }
//   )


//   const urlParams = new URLSearchParams(window.location.search);
//   const id = urlParams.get(`id`);
//   console.log(id);
//   fetch(`https://northwind.vercel.app/api/suppliers`)
//   .then(response => response.json())
//   .then(data=>{
//     addData(data);
//   });

//   let id_input = document.querySelector(".id-input");
//   let company_name_input = document.querySelector(".company-name-input");
//   let contact_name_input = document.querySelector(".contact-name-input");
//   let contact_title_input = document.querySelector(".contact-title-input");
//   let city_input = document.querySelector(".city-input");
//   let country_input = document.querySelector(".country-input");

//   function addData(data){
//     id_input.value = id
//     company_name_input.value = data.companyName
//     contact_name_input.value = data.companyName
//     contact_title_input.value = data.contactTitle
//     city_input.value =data.address.city
//     country_input.value = data.address.country
//   }


// document.querySelector('.updatebtn').addEventListener("click", function(){

//   const data ={
//     id: id_input.value,
//     companyName: company_name_input.value,
//     contactName: contact_name_input.value,
//     contactTitle: contact_title_input.value,
//     address: {
//       city: city_input.value,
//       country: country_input.value
//     }
//   }



//   fetch(`https://northwind.vercel.app/api/suppliers/${id}`,{
//     method:"PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   .then((response)=> response.json())
//   .then((data)=>{
//     alert("Successfully posted!",data);
//   })
//   .catch((error)=>{
//     console.error("Error:", error);
//   });
// });



// PROMISE RESOLVE:
// let promise = Promise.resolve();

// promise.then(() => alert("promise done!"));

// alert("code finished"); // this alert shows first

// let promise = Promise.resolve();
// promise.then(() => alert("promise done!"));

// alert("code finished");


// Promise.resolve()
// .then(() => alert("promise done!"))
// .then(() => alert("promise finished"))


// function getUser(url) {
//    fetch(url)
//    .then((response) => {

//    return response.json();

//    })
//    .then((data) => console.log(data))  
// }


// getUser("user.json");


// function getUsers(url) {
//    fetch(url)
//    .then((response) => response.json())
//    .then((data)=> console.log(data))
//    .catch((err) => console.log(err))
// }

// getUsers("https://jsonplaceholder.typicode.com/todos")


// async function hello() {
//    return "Salam Kurduvan"
// }

// hello()
// .then((response) => console.log(response))



// ASYNC PRACTICE:
// console.log("Ulvi");

// setTimeout(() => {
//    console.log("500 ms gozledi ve isledi");
// }, 500);


// setTimeout(() => {
//    console.log("1000 sde isledi");
// }, 1000);


// console.log("Sahin");


// Async problemin izleyecem:

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=> response.json())
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))



// Fetch api get and show on table:
// let tbody = document.querySelector("tbody")


// async function getSuppliers() {
//     let response = await fetch("https://northwind.vercel.app/api/suppliers");
//     let data = await response.json()

//     localStorage.setItem("suppliers", JSON.stringify(data))
// }

// getSuppliers();


// function generateTableBody(params) {
//     let suppliers = JSON.parse(localStorage.getItem("suppliers"))
//     console.log(suppliers, 'test');

//     suppliers.forEach(item =>{
//     let tr = document.createElement("tr")
//     let tdForCompanyId = document.createElement("td")
//     let tdForCompanyName = document.createElement("td")
//     let tdForCompanyTitle = document.createElement("td")
//     let actionsWrapper = document.createElement("td")
//     let deleteBtn = document.createElement("button")
//     deleteBtn.innerText = "Delete"
//     tdForCompanyId.innerText = item.id
//     tdForCompanyName.innerText = item.companyName
//     tdForCompanyTitle.innerText = item.contactName
//     tr.appendChild(tdForCompanyId)
//     tr.appendChild(tdForCompanyName)
//     tr.appendChild(tdForCompanyTitle)
//     actionsWrapper.appendChild(deleteBtn)
//     tr.appendChild(actionsWrapper)
//     tbody.append(tr)
//     })
// }

// generateTableBody();

const mostPopProducts = document.querySelector(".most-popular-products")


const jsonFile = "products.json";

fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    data.map(product => {
        const { id, name, price, images } = product;
        mostPopProducts.innerHTML += `
        <div class="product-card" data-product-id="${id}">
                <div class="product-card__container">
                    <div class="product-card__btn cart" data-tooltip="add to cart"><i
                            class="fa-solid fa-cart-shopping"></i></div>
                    <div class="product-card__btn fav" data-tooltip="add to wishlist"><i
                            class="fa-regular fa-heart"></i></div>
                    <div class="product-card__img">
                        <img src="${images[0].url}" alt="${name}">
                    </div>
                </div>
                <div class="product-card__color">
                ${images.map((image) => {
            const { url, color } = image

            return `<button class="product-card__btn-radio" data-img="${url}">
                        <span style="background-color: ${color};"></span>
                    </button>`
        }).join('')}
                </div>
                <div class="product-card__description">
                    <div class="product-card__text">${name}</div>
                    <div class="product-card__price">${price}</div>
                    <button>Select options</button>
                </div>
            </div>
            
            `

    });

    const radioBtns = document.querySelectorAll(".product-card__btn-radio");
    document.querySelectorAll(".product-card__color").forEach(pcc => pcc.firstElementChild.classList.add("selected"))
    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener("click", () => {
            let productCard = radioBtn.parentElement.parentElement,
                productImg = productCard.querySelector(".product-card__img > img"),
                prRadioBtns = productCard.querySelectorAll(".product-card__btn-radio");

            if (radioBtn.parentElement.parentElement === productCard) {
                prRadioBtns.forEach(radioBtn => radioBtn.classList.remove("selected"))
                radioBtn.classList.add("selected");
                productImg.src = radioBtn.dataset.img
            }
        })
    })

});




const mostPopProducts2 = document.querySelector(".most-popular-products2")

const radioBtns2 = document.querySelectorAll(".product-card__btn-radio2");

radioBtns2.forEach(radioBtn =>{
    radioBtn.addEventListener("click", ()=>{
        let productCard = radioBtn.parentElement.parentElement
        productImg = productCard.querySelector(".product-card__img2 > img")
        proRadioBtns = productCard.querySelectorAll(".product-card__btn-radio2");

        if(radioBtn.parentElement.parentElement === productCard){
            proRadioBtns.forEach(radioBtn => radioBtn.classList.remove("selected"))
            radioBtn.classList.add("selected")
            productImg.src = radioBtn.dataset.img
        }

    })
})


const jsonFile2 = "./products2.json";

fetch(jsonFile2).then(response =>{
    return response.json()
}).then(data=>{
    data.map(product=>{
        const {id, name, price, images} = product
        mostPopProducts2.innerHTML += `
        <div class="product-card2" data-product-id="${id}">
            <div class="product-card__container2">
                <div class="product-card__btn2 cart" data-tolltip="add to card"><i class="fa-solid fa-bag-shopping"></i></div>
                <div class="product-card__btn2 fav" data-tolltip="add to wishlist"><i class="fa-regular fa-heart"></i></div>
                <div class="product-card__img2">
                    <img src="${images[0].url}" alt="roseblack1">
                </div>
            </div>
            <div class="product-card__description2">
                <div class="product-card__text2">Anthurium - King of hearts</div>
                <div class="product-card__price2">$79.00</div>
            </div>
            <div class="product-card__color2">
                <button class="product-card__btn-radio2 selected" data-img="./plants card images 2/card img 1 black.jpg">
                    <span style="background-color: #4a4c53;"></span>
                </button>
                <button class="product-card__btn-radio2" data-img="./plants card images 2/card img 1 brown.jpg" >
                    <span style="background-color: #b3a086;"></span>
                </button>
            </div>
        </div>`
    })
})