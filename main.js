// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// validateCred function Uses Luhn Algorithim to validate the credit card numbers and return boolean: true if valid and false if invalid
const validateCred = (arr)  => {

    arr = arr.reverse();
    let checkDigit = arr[0];
    let doubleTheDigit = [];
    let totalModulo;

        for(let arrIndex = 1; arrIndex < arr.length; arrIndex++ ){
            
            let multiply = arr[arrIndex] ;
                if (arrIndex % 2 !== 0){
                    multiply *=2;
                    if (multiply > 9){
                        multiply-=9;
                    }    
                }
            
        doubleTheDigit.push(multiply);

        }

        // console.log(doubleTheDigit.reverse());

        let allDigitsTotal = doubleTheDigit.reduce((a,b) => a + b, 0) + checkDigit;

        // console.log(allDigitsTotal );

        totalModulo = allDigitsTotal % 10 ;
         console.log(totalModulo);

        //To LOG a message.

        if(totalModulo === 0){
            console.log("Very Valid ")
        }else{
            console.log('INVALID, Oloshi haahaha');
        }
        // return allDigitsTotal  % 10 === 0;


}
//validateCred(valid1);

//I used Variable kiki to test each of my logic before implementing in the "array" function.
// const kiki = [1,2,3,4,5];

//This function checkes for invalid cards in a nested array and returns the card numbers
const findInvalidCards = (card) => {
    const invalid = [];

    for(let i = 0; i < card.length ; i++ ){
        let currCred = card[i];

        if(!validateCred(currCred)){
            invalid.push(currCred);
        }
    }
    return invalid;

}
// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers



//This function checks if the card company is among the major 4(Amex, Visa, Mastercard, Discover) and returns invalid company.
const idInvalidCardCompanies = (card) => {
    const companies = [];

    for(let i = 0; i < card.length ; i++ ){
        
        switch (card[i][0]) {
            case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
        console.log('Company not found');
    }

        }
    
    
    return companies;

}

//console.log(idInvalidCardCompanies([invalid1]));

//Testing with other fake creditCard numbers.

const testCard = [3,4,3,9,9,3,9,5,1,4,2,2,4,9,4];

// console.log(idInvalidCardCompanies([testCard]));


//convertToNumbersArray function takes input of string and convert to array of numbers.

const convertToNumbersArray = (str) => {

  let numbersArray = [];
  let strIndex;

  for(let i = 0; i < str.length; i++){
    strIndex = parseInt(str[i]);
    numbersArray.push(strIndex);
  
  }
  
    console.log(numbersArray);
    validateCred(numbersArray);

    // 


}
//Used this String to test convertNumberToStringFunction
let arr = "5399488080392025";

convertToNumbersArray(arr);

//To  convert Invalid card numbers to valid

const convertInvalidNumbersToValid = (card) => {

  
  if (c) {
    
  } else {
    
  }
  
}