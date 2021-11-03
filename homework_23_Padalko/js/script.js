childrenArray = [];

const renderUsers = obj => {
	for(let key in obj){
		if(Array.isArray(obj[key])){
			let data = obj[key]; //["cat","dog","lion"]
			childrenArray.push(data);
		}
	}
}

const getFile = (file, someFunc) => {
	let xhr = new XMLHttpRequest();
	xhr.open(`GET`,file);
	xhr.send();

	xhr.addEventListener(`readystatechange`,()=>{
		if(xhr.readyState === 4 && xhr.status === 200){
			let data = JSON.parse(xhr.responseText);
			someFunc(data);
		}
	})
}

getFile(`fileA.json`,renderUsers);
getFile(`fileB.json`, renderUsers);

console.log(childrenArray);