/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
    // throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    // var even = function(num){
      // return num/2 === 0;
    // }
    // return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
    // var even = function(num){
      // return num/2 === 0;
    // }

    // if(even(10) !== true) {
      // throw new Error('10 should be even!');
    // }
  // });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901231') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567812345678123').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345678987654').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567898765432123').should.equal('Discover');
  });

  for (var cardPrefix = 644; cardPrefix <=649; cardPrefix++) {
    (function(cardPrefix) {
    it('has a prefix of ' + cardPrefix + ' and a length of 16', function() {
      var cardString = cardPrefix.toString() + '4567898765432';
      detectNetwork(cardString).should.equal('Discover');
    });

    it('has a prefix of ' + cardPrefix + ' and a length of 19', function() {
      var cardString = cardPrefix.toString() + '4567898765432345';
      detectNetwork(cardString).should.equal('Discover');
    });
      }) (cardPrefix);
  };

});

describe('Maestro', function() {
  var should = chai.should();
  var cardExample = '123412341234123412341234';
  for (var cardLen = 12; cardLen <= 19; cardLen++) {
    (function(cardLen) {
      it('has a prefix of 5018 and a length of ' + cardLen, function() {
        var cardString = '5018' + cardExample;
        var nCardString = cardString.substring(0, cardLen);
        detectNetwork(nCardString).should.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + cardLen, function() {
        var cardString = '5020' + cardExample;
        var nCardString = cardString.substring(0, cardLen);
        detectNetwork(nCardString).should.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + cardLen, function() {
        var cardString = '5038' + cardExample;
        var nCardString = cardString.substring(0, cardLen);
        detectNetwork(nCardString).should.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + cardLen, function() {
        var cardString = '6304' + cardExample;
        var nCardString = cardString.substring(0, cardLen);
        detectNetwork(nCardString).should.equal('Maestro');
      });
    }) (cardLen);
  };
  // Write full test coverage for the Maestro card
});

describe('China UnionPay', function() {
  var should = chai.should();

  for (var prefix1 = 622126; prefix1 <= 622925; prefix1++) {
    (function(prefix1) {
      it('has a prefix of ' + prefix1 + ' and a length of 16', function() {
        detectNetwork(prefix1.toString() + '1234321234').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix1 + ' and a length of 17', function() {
        detectNetwork(prefix1.toString() + '12343212345').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix1 + ' and a length of 18', function() {
        detectNetwork(prefix1.toString() + '123432123456').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix1 + ' and a length of 19', function() {
        detectNetwork(prefix1.toString() + '1234321234567').should.equal('China UnionPay');
      }); 
    }) (prefix1);
  };

  for (var prefix2 = 624; prefix2 <= 626; prefix2++) {
    (function(prefix2) {
      it('has a prefix of ' + prefix2 + ' and a length of 16', function() {
        detectNetwork(prefix2.toString() + '1234321234321').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix2 + ' and a length of 17', function() {
        detectNetwork(prefix2.toString() + '12343212343212').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix2 + ' and a length of 18', function() {
        detectNetwork(prefix2.toString() + '123432123432123').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix2 + ' and a length of 19', function() {
        detectNetwork(prefix2.toString() + '1234321234321234').should.equal('China UnionPay');
      }); 
    }) (prefix2);
  };

  for (var prefix3 = 6282; prefix3 <= 6288; prefix3++) {
    (function(prefix3) {
      it('has a prefix of ' + prefix3 + ' and a length of 16', function() {
        detectNetwork(prefix3.toString() + '123432123432').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix3 + ' and a length of 17', function() {
        detectNetwork(prefix3.toString() + '1234321234321').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix3 + ' and a length of 18', function() {
        detectNetwork(prefix3.toString() + '12343212343212').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix3 + ' and a length of 19', function() {
        detectNetwork(prefix3.toString() + '123432123432123').should.equal('China UnionPay');
      }); 
    }) (prefix3);
  };
});

describe('Switch', function() {
  var should = chai.should();

  var prefix1 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefix2 = ['564182','633110'];

  for (var i = 0; i < prefix1.length; i++){
    (function(i) {
      it('has a prefix of ' + prefix1[i] + ' and a length of 16', function(){
        detectNetwork(prefix1[i] + '123456789012').should.equal('Switch');
      });
      it('has a prefix of ' + prefix1[i] + ' and a length of 18', function(){
        detectNetwork(prefix1[i] + '12345678901234').should.equal('Switch');
      });
      it('has a prefix of ' + prefix1[i] + ' and a length of 19', function(){
        detectNetwork(prefix1[i] + '123456789012345').should.equal('Switch');
      });
    }) (i);
  };

  for (var i = 0; i < prefix2.length; i++){
    (function(i) {
      it('has a prefix of ' + prefix2[i] + ' and a length of 16', function(){
        detectNetwork(prefix2[i] + '1234567890').should.equal('Switch');
      });
      it('has a prefix of ' + prefix2[i] + ' and a length of 18', function(){
        detectNetwork(prefix2[i] + '123456789012').should.equal('Switch');
      });
      it('has a prefix of ' + prefix2[i] + ' and a length of 19', function(){
        detectNetwork(prefix2[i] + '1234567890123').should.equal('Switch');
      });
    }) (i);
  };
}); 
