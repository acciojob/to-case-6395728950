function toCase(text) {

	let str=text;
	str+='-'
	for(let i =0;i<text.length;i++){
		str+=toUpperCase(text[i]);
	}
	return str;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
