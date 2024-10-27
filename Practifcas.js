const desktopMenu = document.querySelector('.desktop-menu')
const UserMenu = document.querySelector('.navbar-email-address')
const mobileMenu = document.querySelector('.mobile-menu')
const UserMenuMobile = document.querySelector('.menu')
const toggleThemeDesktop = document.querySelector('.toggle-theme-desktop')
const toggleThemeMobile = document.querySelector('.toggle-theme-mobile')
const themeAdvisor = document.querySelector('.theme-advisor')
const themeAdvisorMobile = document.querySelector('.theme-advisor-mobile')
const body = document.querySelector('body')

//Toggle-DesktopMenu
UserMenu.addEventListener('click', (event)=>{
   event.preventDefault()
   desktopMenu.classList.toggle('inactive')
})

//toggle-MobileMenu
UserMenuMobile.addEventListener('click', ()=>{
   mobileMenu.classList.toggle('inactive')
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