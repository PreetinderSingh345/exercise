function areAllDigitsSame(num) {
  let copy=num;

  let areSame=true;
  let firstDigit=-1;

  while(copy!=0) {
    let digit=(copy%10);

    firstDigit=((firstDigit==-1)? digit: firstDigit);

    if(digit!=firstDigit) {
      areSame=false;

      break;
    }

    copy=Math.floor(copy/10);
  }

  return areSame;
}

const areAllDigitsSameArrow =(num)=> {
  let copy=num;

  let areSame=true;
  let firstDigit=-1;

  while(copy!=0) {
    let digit=(copy%10);

    firstDigit=((firstDigit==-1)? digit: firstDigit);

    if(digit!=firstDigit) {
      areSame=false;

      break;
    }

    copy=Math.floor(copy/10);
  }

  return areSame;
};

module.exports = {
  areAllDigitsSame, 
  areAllDigitsSameArrow
};