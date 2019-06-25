// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefixOne = cardNumber.substring(0,1);
  var prefixTwo = cardNumber.substring(0,2);
  var prefixThree = cardNumber.substring(0,3);
  var prefixFour = cardNumber.substring(0,4);
  var prefixSix = cardNumber.substring(0,6);
  var cardLength = cardNumber.length;

//Switch
  if (prefixFour === '4903' || prefixFour === '4905' || prefixFour === '4911' || prefixFour === '4936' || prefixFour === '6333' || prefixFour === '6759') {
    if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
      return 'Switch'
    };
  } else if (prefixSix === '564182' || prefixSix === '633110') {
    if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
      return 'Switch';
    };
  };

//Diner's Club, American Express, Visa, MasterCard, Maestro
  if ( (prefixTwo === '38' || prefixTwo === '39') && cardLength === 14 ) {
      return 'Diner\'s Club';
  } else if ( (prefixTwo === '34' || prefixTwo === '37') && cardLength === 15 ) {
      return 'American Express';
  } else if ( prefixOne === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
      return 'Visa';
  } else if ( (prefixTwo === '51' || prefixTwo === '52' || prefixTwo === '53' || prefixTwo === '54' || prefixTwo === '55') && cardLength === 16) {
      return 'MasterCard';
  } else if ( (prefixFour === '5018' || prefixFour === '5020' || prefixFour === '5038' || prefixFour === '6304') && (cardLength === 12 || cardLength === 13 || cardLength === 14 || cardLength === 15 || cardLength === 16 || cardLength === 17 || cardLength === 18 || cardLength === 19) ) {
      return 'Maestro';
  };

//Discover
  if(prefixFour === '6011') {
      if (cardLength === 16 || cardLength === 19) {
        return 'Discover';
      };
  } else if (prefixTwo === '65') {
      if (cardLength === 16 || cardLength === 19) {
        return 'Discover';
      };
  } else if (644 <= prefixThree && prefixThree <= 649) {
      if (cardLength === 16 || cardLength === 19) {
      return "Discover";
    };
  };

//China UnionPay
  if (622126 <= prefixSix <= 622925) {
      if (16 <= cardLength <= 19) {
        return 'China UnionPay';
      };
  } else if (624 <= prefixThree <= 626) {
      if (16 <= cardLength <= 19) {
        return 'China UnionPay';
      };
  } else if (6282 <= prefixFour <= 6288) {
      if (16 <= cardLength <= 19) {
        return 'China UnionPay';
      };
  };
};



