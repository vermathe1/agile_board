const saveItem =(items,key)=>{
	localStorage.setItem(key,JSON.stringify(items));
}
const getItemFromLocalStorage =(key)=>{
	let items =localStorage.getItem(key);
	return JSON.parse(items);
}

module.exports ={
	saveItem,
	getItemFromLocalStorage
}