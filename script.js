const groceryForm = document.querySelector('grocery-form');
const itemInput = document.getElementById('item');
const priceInput = document.getElementById('price');
const groceryList = document.querySelector('grocery-list');
const totalPriceSpan = document.getElementById('total-price');

const calculateTotal = () => {
	let prices = document.querySelectorAll('item-price');
	let listTotal;

	prices.forEach((price) => {
		listTotal += price.innerHTML;
	});

	totalPriceSpan.innerHTML = listTotal.toFixed(2);
};

const displayGroceryItem = (item, price) => {
	let groceryItem = document.createElement('div');
	let itemSpan = document.createElement('span');
	let priceSpan = document.createElement('span');
	let deleteBtn = document.createElement('button');

	groceryItem.classList.add('groceryItem');
	itemSpan.classList.add('item-name');
	priceSpan.classList.add('item-price');

	itemSpan.innerHTML = item;
	priceSpan.innerHTML = price.toFixed(2);
	deleteBtn.innerHTML = 'Remove';

	groceryItem.appendChild(itemSpan);
	groceryItem.appendChild(priceSpan);
	groceryItem.appendChild(deleteBtn);
	groceryList.appendChild(groceryItem);

	deleteBtn.addEventListener('click', function () {
		this.remove();

		calculateTotal;
	});

	calculateTotal();
};

groceryForm.addEventListener('submit', function () {
	let item = itemInput.value;
	let price = priceInput.value;

	displayGroceryItem(price, item);
});
