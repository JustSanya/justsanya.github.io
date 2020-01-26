'use strict';

//TODO: check for negative quantity input

const topCartInfo = {};
const orderedItems = [];
const items = document.querySelectorAll('.product-box__item');
const topCartInfoValue = document.querySelector('#totalValue');
const topCartInfoQuantity = document.querySelector('#totalQuantity');
const categoryFilter = document.querySelector('.select-box .select-control');
const priceFilter = document.querySelector('.price-select-box .select-control');
const addToCartBtns = document.querySelectorAll('.product-box__btn');
const checkoutBtn = document.querySelector('.btn-check');

updateTopCartInfo();


for (let i = 0; i < addToCartBtns.length; i++) {
	addToCartBtns[i].addEventListener('click', addItemToCart);
}

categoryFilter.addEventListener('change', updateFilters);
priceFilter.addEventListener('change', updateFilters);


document.body.onload = function(){

	addModal();

	const modal = document.querySelector('.modal');
	const modalForm = document.querySelector('.modal__form');
	const submitBtn = document.querySelector('.modal__submit');

	checkoutBtn.addEventListener('click', function(){
		if (modal.style.display == 'block') {
			modal.style.display = 'none';
		} else {
			modal.style.display = 'block';
		}
	});

	submitBtn.addEventListener('click', sendOrder);
	function sendOrder(e){
		e.preventDefault();
		const name = document.querySelector('#name').value.trim();
		const email = document.querySelector('#email').value.trim();

		if (name == '' || email == '') {
			alert('Заказ не был отправлен, заполните пожалуйста оба поля');
		} else {
			alert('Спасибо за Ваш заказ!');
			modalForm.reset();
			orderedItems.splice(0, orderedItems.length);
			updateTopCartInfo();
			modal.style.display = 'none';
		}
	}	
};







function updateFilters(){
	const selectedCategoryId = categoryFilter.options[categoryFilter.selectedIndex].value;
	const selectedPriceRange = priceFilter.options[priceFilter.selectedIndex].value;

	for(let item of items){
		item.style.display = 'flex';				
	}

	switch (selectedCategoryId) {
		case '1':
			for(let item of items){
				if (!(item.dataset.category === 'breakfast')) {
					item.style.display = 'none';
				}
			}
			break;
		case '2':
			for(let item of items){
				if (!(item.dataset.category === 'first_course')) {
					item.style.display = 'none';
				}
			}
			break;
		case '3':
			for(let item of items){
				if (!(item.dataset.category === 'garnish')) {
					item.style.display = 'none';
				}
			}
			break;
		default:
			for(let item of items){
				item.style.display = 'flex';				
			}
	}

	for(let item of items){
		if (!(parseFloat(item.querySelector('p').innerText) < selectedPriceRange) && (selectedPriceRange != 0)) {
			item.style.display = 'none';
		}
	}
}

function addItemToCart(){
	const currentItem = this.parentNode.parentNode;
	const selectedItemQuantity = +currentItem.querySelector('.qty__item').value;
	const selectedItemPrice = parseFloat(currentItem.querySelector('p').innerText);
	const selectedItemName = currentItem.querySelector('.product-box__title').innerText;

	orderedItems.push({
		name: selectedItemName,
		price: selectedItemPrice,
		quantity: selectedItemQuantity,
		value: selectedItemPrice * selectedItemQuantity
	});

	updateTopCartInfo();
}

function updateTopCartInfo(){
	topCartInfo.value = 0;
	topCartInfo.quantity = 0;

	for (let item of orderedItems) {
		topCartInfo.value += item.value;
		topCartInfo.quantity += item.quantity;
	}

	topCartInfoValue.innerText = topCartInfo.value;		
	topCartInfoQuantity.innerText = topCartInfo.quantity;
}

function addModal(){

	const newModal = document.createElement("div");

 	newModal.innerHTML = `
 	<form name="order-info" class="modal__form">
 	<div class="form-group">
 		<label for="name">Введите Ваше имя</label>
 		<input type="text" name="name" id="name">
 	</div>
	<div class="form-group">
 		<label for="email">Введите Ваш Email</label>
 		<input type="email" name="email" id="email">
 	</div>
 	<input class="modal__submit" type="submit" value="Отправить">
 	</form>
 	`;
 	document.body.appendChild(newModal);
 	newModal.classList.add('modal');
 	newModal.style.cssText = "width: 700px; border: 2px solid black; margin: 0 auto; padding: 60px; background: white; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); display: none;";
}

