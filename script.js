
//FIRST DYNAMIC COMPONENT
let cookingFrequency = prompt("How how many times per week do you cook?");

let veryFrequent = 10;

let semiFrequent = 6; 

let leastFrequent = 4; 

if(cookingFrequency ===  veryFrequent || veryFrequent <= 10) {

    document.write("A sous vide would be a valuable project to take your cooking to the next level");

} else if (cookingFrequency === semiFrequent || semiFrequent <= 6){ 

    document.write("An instapot would be the perfect addtion to your kitchen!");

} else if (cookingFrequency === leastFrequent || leastFrequent <= 4) {

    document.write("Perhaps start off with chefs knife")

} else if (cookingFrequency !==  veryFrequent  || cookingFrequency !== semiFrequent || leastFrequent ) {

    document.write("Please click the link above which has great restaurant suggestions")
}



