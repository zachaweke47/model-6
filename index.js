// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = 0; i < pHeight; i++) {
    rLine += "<p>";
    for (x = 1; x < pHeight-i; x++) {
      rLine += "<span style='color:" + "white" + ";'>" + "*" + "</span>";
    }

    //Create each line on the Rhombus
    var k = 0;
    for (j = x; j <= pHeight; j++) {

      //Is the position even or odd so we change the color
      if (k % 2){
        //odd
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
      else {
        //even
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      }
      k++;
    }
    rLine += "</p>";
    // console.log(rLine);

  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = 0; i < pHeight; i++) {
    rLine += "<p>";
    //Create each line on the Rhombus
    for (j = 0; j <= i; j++) {

      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      else
        //odd
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

    }
    rLine += "</p>";
    // console.log(rLine);

  }

  document.getElementById("upRight").innerHTML = rLine;
}
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = pHeight-1; i >= 0; i--) {
    rLine += "<p>";
    //Create each line on the Rhombus
    for (x = 1; x < pHeight - i; x++) {
      rLine += "<span style='color:" + "white" + ";'>" + "*" + "</span>";
    }
    var k = 0;
    for (j = 0; j <= i; j++) {

      //Is the position even or odd so we change the color
      if (k % 2){
        //even
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }

      else {
        //odd
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      }
      k++;
    }
    rLine += "</p>";
    // console.log(rLine);

  }

  document.getElementById("downLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = pHeight; i > 0; i--) {
    rLine += "<p>";
    //Create each line on the Rhombus
    for (j = 0; j < i; j++) {

      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      else
        //odd
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";

    }
    rLine += "</p>";
    // console.log(rLine);

  }

  document.getElementById("downRight").innerHTML = rLine;
}