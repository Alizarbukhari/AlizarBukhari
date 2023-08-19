"use strict";
// var temp:number = 36;
// var ctoF:number = (temp * 9 / 5) + 36;
// console.log("covert celcious to fohrenhite",ctoF);
// var ftoC:number = (temp /(9 * 5 )-36);
// console.log(ftoC);
// var totalMarks:number = 1400;
// var obtaiingMarks:number = 857;
// var result:number = (obtaiingMarks / totalMarks) * 100;
// console.log(result);
//  var givenDays:number = 17;
//  var daysInWeek:number = 7;
//  var calculateWeekInGivnDays:number = Math.floor(givenDays /daysInWeek);
//  var calculateDayafterWeeks:number = givenDays % daysInWeek;
//  console.log(calculateWeekInGivnDays,"weeks",calculateDayafterWeeks,"days");
//  var productPrice:number = 100;
//  if (productPrice > 100 ) {
// var applyDiscount = 10;
// var calculationDiscount:number =  productPrice - (productPrice *( applyDiscount /100));
// console.log("apply  10 discount",calculationDiscount);}
// else{
// applyDiscount = 5;
// var calculationDiscount:number = productPrice -(productPrice* (applyDiscount /100))
// console.log("price after 5% discount",calculationDiscount);
// }
// var age:number =  20;
// if (age>0 && age<=12 ) {
//     console.log("child");    
// }
// else if(age >=13 && age<=19 ){
//     console.log("Teenager");    
// }
// else
// {
//     console.log("Adult");
// }
// var temp:number = 0;
// if (temp >= 0&& temp < 26) {
//     console.log("wear warm cloths");
// }
// else {
//     console.log("wear cold cloths");
// }
// var num:number = 50;
// if (num %3 == 0 && num %5 ==0) {
//     console.log("divisible 3 & 5");
// }
// else{
//     console.log("not divisible 3 & 5");
// }
// var year:number = 2009;
// if (year % 4 ==0) {
//     console.log("its leap year");
// }
// else{
//     console.log("its not leap year");
// }
// var day:number = 8;
// if (day == 1) {
//     console.log("monday");}
// else if (day == 2){
//     console.log("Tuesday");
// }
// else if (day == 3){
//     console.log("Wednessday");
// }
// else if(day == 4){
// console.log("Thrusday")
// }
// else if (day == 5) {
//     console.log("Friday")
// }
// else if( day == 6)
// {
//     console.log("Saturday"); 
// }
// else if(day == 7){
//     console.log("sunday");
// }
// else{
//     console.log("Banda ban oay");
// }
var unit = 500;
if (unit > 100 && unit < 200) {
    var tax = 10;
    var calculationTax = unit + (unit * tax) / 100;
    console.log("apply 10% Tax", calculationTax);
}
else if (unit > 200 && unit <= 500) {
    var tax = 15;
    var calculationTax = unit + (unit * tax) / 100;
    console.log("apply 15% Tax", calculationTax);
}
else {
    tax = 25;
    var calculationTax = unit + (unit * tax) / 100;
    console.log("apply 25 % Tax", calculationTax);
}
