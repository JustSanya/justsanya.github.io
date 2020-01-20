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

updateTopCartInfo();


for (let i = 0; i < addToCartBtns.length; i++) {
	addToCartBtns[i].addEventListener('click', addItemToCart)
}

categoryFilter.addEventListener('change', updateFilters);
priceFilter.addEventListener('change', updateFilters);


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

function addItemToCart(event){
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

	for (let item in orderedItems) {
		topCartInfo.value += orderedItems[item].value;
		topCartInfo.quantity += orderedItems[item].quantity;
	}

	topCartInfoValue.innerText = topCartInfo.value;		
	topCartInfoQuantity.innerText = topCartInfo.quantity;
}