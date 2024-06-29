const listHTML = document.getElementById('list')
const productsHTML = document.getElementById('products')

const avaliableProducts = []
const cartItems = []
const listItems = []



const renderList = (list)=>(
    list.map((item, index)=>(
        `<li class="list-group-item" id=`item-${index}`>${item}</li>`
    )
)

const showElements = (container, element)=>{
    container.innerText = ""
    container.innerHTML = `

    
    `
}