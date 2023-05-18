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

const desktopToggler = document.querySelector('.desktop-themeToggler')

desktopToggler.addEventListener('click', () => {
	document.body.classList.toggle('light-mode')
	themeIndicator.classList.toggle('active')
	if (document.body.classList.contains('light-mode')) {
		desktopToggler.innerHTML = `<i class='bx bx-sun' ></i>`
	} else {
		desktopToggler.innerHTML = `<i class='bx bx-moon' ></i>`
	}
})

const filters = document.querySelectorAll('.filter')
const projectCards = document.querySelectorAll('.project-card')

window.onload = () => {
	filters.forEach(el => {
		if (el.classList.contains('all')) {
			el.classList.add('active')
		}
	})
	projectCards.forEach(el => {
		el.classList.add('active')
	})
}
filters.forEach(el => {
	el.addEventListener('click', () => {
		filters.forEach(filter => {
			filter.classList.remove('active')
		})
		el.classList.add('active')
		if (el.classList.contains('group')) {
			projectCards.forEach(card => {
				card.classList.remove('active')
				if (card.classList.contains('group')) {
					card.classList.add('active')
				}
			})
		} else if (el.classList.contains('solo')) {
			projectCards.forEach(card => {
				card.classList.remove('active')
				if (card.classList.contains('solo')) {
					card.classList.add('active')
				}
			})
		} else if (el.classList.contains('all')) {
			projectCards.forEach(card => {
				card.classList.add('active')
			})
		}
	})
})

const sendBtn = document.querySelector('.send-btn')

sendBtn.addEventListener('click', () => {
	let fullName = document.querySelector('.name').value
	let email = document.querySelector('.email').value
	let message = document.querySelector('.message').value

	if (fullName === '' || email === '' || message === '') {
		return
	} else {
		window.location.href = `mailto:dawid.budzilek911@gmail.com?subject=${fullName}&body=${message}, Pozdrawiam`
	}
})
