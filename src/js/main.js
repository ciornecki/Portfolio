const themeToggler = document.querySelector('.theme-toggle')
const themeIndicator = document.querySelector('.indicator')

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('light-mode')
	themeIndicator.classList.toggle('active')
})

const burgerIcon = document.querySelector('.burger-icon')
const mnavList = document.querySelector('.mnav-list')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	mnavList.classList.toggle('active')
})
