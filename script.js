let mainCurve = document.getElementByClassName("curve-box-main");
let SubCurve = document.getElementByClassName("curve-box-sub");

mainCurve.addEventListener('hover', () => {

	// //similar to line 6, we find the element we want to affect
	// let square_darker = document.getElementById("square_darker");

	// //now that we have the element we want to keep, we need to find all of the elements
	// let all_squares = document.getElementsByClassName("squares");

	// //then, we use a for loop to go through all of the elements
	// // ---- ES6 ----- the new for loop allows you to loop over array elements directly like this
	// // ---- ES6 ----- we are no longer iterating over a number (i), but over array elements (i.e. squares)
	// for(let square of all_squares){
	// 	square.style.visibility = 'hidden';
	// }

	// //so now that we got rid of all the squares, we need to force our specific square to re-appear.
	// square_darker.style.visibility = 'visible';
});