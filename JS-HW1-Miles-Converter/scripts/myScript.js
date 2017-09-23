var miles=10;
console.log(miles+" miles = "+miles+"is"+ milesToKm(miles).toFixed(2));
var miles=42;
console.log(miles+"miles = "+miles+"is"+ milesToKm(miles).toFixed(2));
var miles=78;
console.log(miles+"miles = "+miles+"is"+ milesToKm(miles).toFixed(2));
function milesToKm(miles) {
return  miles*1.6;
}
