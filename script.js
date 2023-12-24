// Setting Default Button as none
var isNotClicked=true;


// console.log("Hello")
var loveCalculator=function () {
    var yourName = document.getElementById("firstname").value;
    // console.log(yourName)
    var loversName = document.getElementById("lovername").value;
    // console.log(loversName)
    var loveScore = Math.random() * 100;
    // console.log(loveScore)
    var loveFinal = Math.round(loveScore);
    // console.log("Final Love Score:",loveFinal)
    if (yourName === "") {
        alert("Please Enter Your Name");
    } else if (loversName === "") {
        alert("Please Enter  your lover's Name");
        
    } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
        isNotclicked=false;
  }
  else {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
  }
};

//resetbutton
function resetFunction() {
  location.reload();
}
