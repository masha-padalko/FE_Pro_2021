let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folder) {

	let trs = this
		.map(function(hero){
			return `<tr>
				<td align="center">${hero.name}</td>
				<td align="center">
					<img src="images/${folder}/${(hero.name).replaceAll(' ', '').toLowerCase()}.svg" width="30" height="30">
				</td>
			</tr>`;
		})
		.join(``);

		let table = `<h2>${folder} heroes </h2><table border="1" width="400px">
			<thead>
				<tr>
					<th align="center">Name</th>
					<th align="center">Icon</th>
				</tr>
			</thead>
			<tbody>
				${trs}
			</tbody>
		</table>`

	return table;
}

document.write(dcHeroes.heroesRender('dc'));
document.write(marvelHeroes.heroesRender('marvel'));