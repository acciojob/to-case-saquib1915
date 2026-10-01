function toCase(text) {
  // write your code here
	if(text===""){
		return "-";
	}
	let textUpperCase=text.toUpperCase();

	return (text+"-"+textUpperCase);
}

// DO not change the code below

/const text = prompt("Enter text:");
alert(toCase(text));
