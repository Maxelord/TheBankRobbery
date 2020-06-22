const height = (elem) => {

	return elem.getBoundingClientRect().height

}

const distance = (elemA, elemB, prop) => {

	const sizeA = elemA.getBoundingClientRect()[prop]
	const sizeB = elemB.getBoundingClientRect()[prop]

	return sizeB - sizeA

}

const factor = (elemA, elemB, prop) => {

	const sizeA = elemA.getBoundingClientRect()[prop]
	const sizeB = elemB.getBoundingClientRect()[prop]

	return sizeB / sizeA

}

document.querySelectorAll('.card').forEach((elem) => {

	const head = elem.querySelector('.card_head')
	const image = elem.querySelector('.card_image')
	const body = elem.querySelector('.card_body')
	const text = elem.querySelector('.card_text')
	const foot = elem.querySelector('.card_foot')

	elem.onmouseenter = () => {

		elem.classList.add('hover')

		const imageScale = 1.25 + factor(head, body, 'height')
		image.style.transform = `scale(${ imageScale })`

		const bodyDistance = height(foot) * -1
		body.style.transform = `translateY(${ bodyDistance }px)`
        
		text.style.display = `block`
		body.style.background = `black`
		body.style.opacity = `0.8`
        foot.style.background = `black`
		foot.style.opacity = `0.8`

	}

	elem.onmouseleave = () => {

		elem.classList.remove('hover')

		image.style.transform = `none`
		body.style.transform = `none`
        text.style.display = `none`
        body.style.opacity = `1`
        body.style.background = `white`
        foot.style.opacity = `0`

	}

})