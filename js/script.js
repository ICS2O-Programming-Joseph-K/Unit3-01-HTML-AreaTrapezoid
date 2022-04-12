'use strict'
// trapezoid calculator
function enterClicked () {
  // this function gets user's dimensions for trapezoid, calculates the area then displays it back to user

  // get sidea from text field
  let sidea = parseFloat(document.getElementById("side-a").value)
  
	// get sideb from text field
  let sideb = parseFloat(document.getElementById("side-b").value)
  
  // get height from text field
  let height = parseFloat(document.getElementById("height").value)
  
  // calculate area of trapezoid
  let area = ((sidea + sideb) / 2) * height
  
  //document.getElementById('user-info').innerHTML = "The aera of your trapezoid is " + area + " cm<sup>2</sup>"
  document.getElementById('user-info').innerHTML = "The aera of your trapezoid is " + area + " cm<sup>2</sup>"
}





  