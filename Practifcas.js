const desktopMenu = document.querySelector('.desktop-menu')
const UserMenu = document.querySelector('.navbar-email-address')
const mobileMenu = document.querySelector('.mobile-menu')
const UserMenuMobile = document.querySelector('.menu')
const toggleThemeDesktop = document.querySelector('.toggle-theme-desktop')
const toggleThemeMobile = document.querySelector('.toggle-theme-mobile')
const themeAdvisor = document.querySelector('.theme-advisor')
const themeAdvisorMobile = document.querySelector('.theme-advisor-mobile')
const body = document.querySelector('body')
const myOrder = document.querySelector('.my-order')
const shoppingCart = document.querySelector('.Navbar-shppingcar')
const btoDeleteItem = document.querySelector('.delete-item')
const shoppingcartItem = document.querySelector('.shopping-cart')
const cardsContainer = document.querySelector('.cards-container')



//Toggle-DesktopMenu
UserMenu.addEventListener('click', (event)=>{
   event.preventDefault()
   desktopMenu.classList.toggle('inactive')
   myOrder.classList.add('inactive')
})

//toggle-MobileMenu
UserMenuMobile.addEventListener('click', ()=>{
   mobileMenu.classList.toggle('inactive')
   myOrder.classList.add('inactive')
})

//toggle-Theme
const localStorageTheme = localStorage.getItem('Black-theme')

toggleThemeDesktop.addEventListener('click', turntheme)
toggleThemeMobile.addEventListener('click', turntheme)

function turntheme(e){
   e.preventDefault()
   body.classList.toggle('blacktheme')
   myOrder.classList.toggle('blackthemeMenus')
   desktopMenu.classList.toggle('blackthemeMenus')

   if(body.classList.contains('blacktheme')){
      themeAdvisor.textContent = 'On'
      themeAdvisorMobile.textContent = 'On'
   } else{
      themeAdvisor.textContent = 'Off'
      themeAdvisorMobile.textContent = 'Off'
   }
   

   const currentTheme = body.classList.contains('blacktheme') ? 'On' : 'Off'
   localStorage.setItem('Black-theme', currentTheme)
}

if(localStorageTheme === 'On'){
   body.classList.add('blacktheme')
   myOrder.classList.add('blackthemeMenus')
   desktopMenu.classList.add('blackthemeMenus')
   themeAdvisor.textContent = 'On'
   themeAdvisorMobile.textContent = 'On'
}else{
   themeAdvisor.textContent = 'Off'
   themeAdvisorMobile.textContent = 'Off'
}

//Toggle Order with Shopping car
shoppingCart.addEventListener('click', (event)=>{
   event.preventDefault()
   myOrder.classList.toggle('inactive')
   desktopMenu.classList.add('inactive')
   mobileMenu.classList.add('inactive')
})

//shoppingcar listeners

myOrder.addEventListener('click', (event) => {
   if(event.target.classList.contains('delete-item')){
      deleteItems(event, '.shopping-cart')
   }
})

function deleteItems(event, domElement) {
   event.target.closest(domElement).remove()
}

//Create Products DEMO(No API)

productList = []

productList.push(
   {
      name: 'cycle',
      price: 150,
      img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600"
   }
)

productList.push(
   {
      name: 'computer',
      price: 250,
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   }
)

productList.push(
   {
      name: 'Tv Retro',
      price: 350,
      img: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   }
)

function ProductBuilder(products){
   products.forEach(product => {
      const divContainer = document.createElement('div')
      divContainer.classList.add('Product-card')
   
      const productImg = document.createElement('img')
      productImg.setAttribute('src', product.img)
   
      const divProductInfo = document.createElement('div')
      divProductInfo.classList.add('product-info')
   
      const divInfo = document.createElement('div')
   
      const ProductPrice = document.createElement('p')
      ProductPrice.textContent = '$ ' +product.price
   
      const ProductName = document.createElement('p')
      ProductName.textContent = product.name
   
      const ProductFigureContainer = document.createElement('figure')
   
      const imgIcon = document.createElement('img')
      imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
   
      divContainer.appendChild(productImg)
      divProductInfo.appendChild(divInfo)
      divInfo.appendChild(ProductPrice)
      divInfo.appendChild(ProductName)
      divContainer.appendChild(divProductInfo)
      divProductInfo.appendChild(ProductFigureContainer)
      ProductFigureContainer.appendChild(imgIcon)
      cardsContainer.appendChild(divContainer)
   })
}

ProductBuilder(productList)
