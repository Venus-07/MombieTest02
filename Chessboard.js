let size= prompt("ขนาดของกริด : ")
//var size = 8;
var output = "";
var rowOutput = "";
var gridSpace = " ";
var gridHash = "#";6

for ( var row = 1; row <= size; row++ ) {
  if ( row%2 != 0 ) {
    var currItem = gridSpace;
    var nextItem = gridHash; 
    }
  else {
    var currItem = gridHash;
    var nextItem = gridSpace; 
    }
  rowOutput = "";
  for ( var column = 1; column <= size; column++ ) {
    if ( column%2 != 0 )
      rowOutput += currItem;
    else
      rowOutput += nextItem;
  }
  output = output + rowOutput + "\n";
}
console.log(output);