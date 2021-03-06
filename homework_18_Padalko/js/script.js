let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(type, price) {
  this.type = type;
  this.price = price;
}

Product.prototype.render = function(category){
	return `<tr>
		<td><img src="images/${category}/${this.type}.svg" alt="grater" width="50" height="50"></td>
		<td>${this.type}</td>
		<td>${this.price}</td>
		</tr>`
}

function renderTable(objName, category) {
	objName.map(function(objName){
		return new Product(objName.type, objName.price);
	})
	.map(function(objName){
		return objName;
	})
	.forEach(function(objName){
		document.write(objName.render(category));
	})
}
document.write(`<table><thead><tr><td>Image</td><td>Name</td><td>Price</td></tr></thead></tbody>`);
renderTable(kitchenProducts, 'kitchen');
renderTable(devicesProducts, 'devices');
renderTable(cosmeticsProducts, 'cosmetics');
document.write(`</tbody></table>`);


