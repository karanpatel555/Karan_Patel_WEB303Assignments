/*
	WEB 303 Assignment 1 - jQuery
	Karan Patel
	0187377
*/
$("document").ready(function () {


	let value = $("input");
	let salary = $("#yearly-salary");
	let percent = $("#percent");
	let amount = $("#amount");

	$(value).keyup(function () { 
		
		let a = $(salary).val();

		let aN = parseInt(a);

		console.log(a);


		let b = $(percent).val();

		let bN = parseInt(b);

		console.log(bN);



		let math = aN * bN / 100;

		let mathD = parseFloat(math);

		console.log(math);

		$(amount).text("$" + mathD.toFixed(2));

		
		
	});
	
});