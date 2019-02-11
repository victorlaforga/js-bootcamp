
let arrayNew = [];
function range(start, end) {
  
    for (let i = start; i <= end; i++) {
        arrayNew.push(i);
 }
  return arrayNew
}

// functie om de array bij elkaar op te tellen
function sum(x){
  var totaal = 0;
  for (i=0; i < x.length; i++) {
  totaal = totaal + x[i];
  }
  
  return totaal;

}
