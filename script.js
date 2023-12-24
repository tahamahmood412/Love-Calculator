// Setting Default Button as none
var isNotClicked = true;

var loveCalculator = function () {
    // var name1 = document.getElementById("firstname").value;
    // var yourName=name1.

    // var name2 = document.getElementById("lovername").value;
    // var loversName=name2.lower()
    var name1 = document.getElementById("firstname").value;
    var yourName = name1.toLowerCase();

    var name2 = document.getElementById("lovername").value;
    var loversName = name2.toLowerCase();

    var loveScore = Math.random() * 100;
    var loveFinal = Math.round(loveScore);

    if (yourName === "") {
        alert("Please Enter Your Name");
    } else if (loversName === "") {
        alert("Please Enter your lover's Name");
    } else if ((yourName === "taha" && loversName === "aqsa") || (yourName === "aqsa" && loversName === "taha")) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + 100 + " % ";
    } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
        isNotClicked = false; // Fixing the variable name
    } else {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
        let para=document.getElementById('love')
        para.textContent=`&{yourName} loves & {loversName}`;
    }
};

//resetbutton
function resetFunction() {
    location.reload();
}
