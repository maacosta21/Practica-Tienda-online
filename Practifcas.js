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

//shopping cart listeners

myOrder.addEventListener('click', (event) => {
   event.target.classList.contains('delete-item')
   event.target.closest('.shopping-cart').remove()
})