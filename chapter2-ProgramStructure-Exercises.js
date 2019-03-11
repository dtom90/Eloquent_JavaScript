
function looping_a_triangle() {
	str = "";
	for(let i = 0; i < 7; i++){
		str += "#";
		console.log(str);
	}
}

function fizzbuzz() {
	for(let i = 1; i <= 100; i++) {
		fb = "";
		if(i % 3 === 0) {
			fb += "Fizz";
		}
		if(i % 5 === 0) {
			fb += "Buzz";
		}
		
		if(fb) {
			console.log(fb);
		} else {
			console.log(i)
		}
	}
}

function chessBoard(dim=8) {
	
	let a = "";
	let b = "";
	
	for (let i=0; i<dim; i++){
		if(i%2===0){
			a += " ";
			b += "#"
		}else{
			a += "#";
			b += " "
		}
	}
	
	for (let i=0; i<dim; i++){
		if(i%2===0){
			console.log(a)
		}else{
			console.log(b)
		}
	}
	
}

// looping_a_triangle()
// fizzbuzz()
chessBoard(16);