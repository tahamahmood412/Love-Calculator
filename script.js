// Setting Default Button as none
var isNotClicked = true;

var loveCalculator = function () {
    var yourName = document.getElementById("firstname").value;
    var loversName = document.getElementById("lovername").value;
    var loveScore = Math.random() * 100;
    var loveFinal = Math.round(loveScore);

    if (yourName === "") {
        alert("Please Enter Your Name");
    } else if (loversName === "") {
        alert("Please Enter your lover's Name");
    } else if ((yourName === "Taha" && loversName === "Aqsa") || (yourName === "Aqsa" && loversName === "Taha")) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + 100 + " % ";
    } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
        isNotClicked = false; // Fixing the variable name
    } else {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
    }
};

//resetbutton
function resetFunction() {
    location.reload();
}
