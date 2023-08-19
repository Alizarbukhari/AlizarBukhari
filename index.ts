//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// var temp:number = 36;
// var ctoF:number = (temp * 9 / 5) + 36;
// console.log("covert celcious to fohrenhite",ctoF);
// var ftoC:number = (temp /(9 * 5 )-36);
// console.log(ftoC);
////Write a program that calculates the percentage.
// var totalMarks:number = 1400;
// var obtaiingMarks:number = 857;
// var result:number = (obtaiingMarks / totalMarks) * 100;
// console.log(result,"%"");
////Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
//  var givenDays:number = 17;
//  var daysInWeek:number = 7;
//  var calculateWeekInGivnDays:number = Math.floor(givenDays /daysInWeek);
//  var calculateDayafterWeeks:number = givenDays % daysInWeek;
//  console.log(calculateWeekInGivnDays,"weeks",calculateDayafterWeeks,"days");
////Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
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
////Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
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
//  }
////Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather
// var temp:number = 0;
// if (temp >= 0&& temp < 26) {
//     console.log("wear warm cloths");
// }
// else {
//     console.log("wear cold cloths");
// }
////Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
// var num:number = 50;
// if (num %3 == 0 && num %5 ==0) {
//     console.log("divisible 3 & 5");
// }
// else{
//     console.log("not divisible 3 & 5"); 
// }
////Write a program that checks if the given year is leap year or not.
// var year:number = 2009;
// if (year % 4 ==0) {
//     console.log("its leap year");
// }
// else{
//     console.log("its not leap year");  
// }
////Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
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
////Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of taxWhere the tax amount will be calculated by the amount of bill.
// var unit:number= 500;
// if (unit >100 && unit<200) {
//     var tax:number =10;
//     var calculationTax:number = unit + (unit * tax) / 100;
//     console.log("apply 10% Tax",calculationTax);
    
// }
// else if (unit >200 && unit <=500 ) {
// var tax = 15;
// var calculationTax:number = unit + (unit * tax) / 100;
// console.log("apply 15% Tax", calculationTax);
// }
// else{
// tax = 25;
// var calculationTax:number = unit + (unit * tax)/ 100;
// console.log("apply 25 % Tax",calculationTax);

// }