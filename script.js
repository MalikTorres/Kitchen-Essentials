function howOftenDoYouCook() {
//FIRST DYNAMIC COMPONENT

let age = '';

while(age < 21) {
    age = prompt('You must be 21 or older to enter'); 
}
// SECOND DYNAMIC COMPONENT
// let nameConfirm = prompt("What is your name?") 
let nameConfirm = prompt("What is your name?") 

if(!nameConfirm) {
    
    howOftenDoYouCook(prompt('Error! Please enter your name to continue'));
   
} else { 

      alert("Hi" + " " + nameConfirm + "!" + " " + "Please click OK to continue");
}  
// THIRD DYNAMIC COMPONENT
let cookingFrequency = prompt("How how many times per week do you cook?");

let veryFrequent = 10;

let semiFrequent = 6; 

let leastFrequent = 4; 

    if (cookingFrequency <= veryFrequent && cookingFrequency > semiFrequent)       { 
    
     document.write("A sous vide would be a valuable project to take your cooking to the next level");

    } else if (cookingFrequency <= semiFrequent && cookingFrequency > leastFrequent) { 

    document.write("An instapot would be the perfect addtion to your kitchen!");

   } else if (cookingFrequency <= leastFrequent) {

    document.write("Perhaps start off with a chefs knife");

    } else {
    
    document.write("Please click the link above which has great restaurant suggestions");
 } 

} 
howOftenDoYouCook();


function pictureOfSousVide() {
    
    let picture = '';
    let likelyHoodToBuyProduct =  prompt('How likely are you to buy this product, 1-10');
   
    for(let i=0; i < likelyHoodToBuyProduct; i++) {

        picture += "<img class= 'sous-vide' src= 'SousVide.jpg'/>"

        // Try a nested loop 
        if(likelyHoodToBuyProduct !== '' && likelyHoodToBuyProduct >= 10) {
            alert('Wow you really like cooking');
        }
    }

      return document.write(picture);
}
/*
function pleaseCompleteSurvey(){

    let rating = 10;
    let feedBack = prompt('Please rate my website 1-10')
    
    while(rating <= 10) {
        feedBack++
    } 

    return rating;

} 
  */ 