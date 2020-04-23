/**
 * 숫자를 0이 베이스인 두 자리 문자열로 변환하여 반환합니다. 
 * 예를 들어 2를 받으면 '02'를 반환하고 12를 받으면 '12'를 반환합니다. 인자가 적절하지 않다면 null을 반환합니다.
 * 만약 자리수가 넘어가면 9로 전부 채웁니다. 예를 들어 123을 입력받으면 '99'를 반환합니다.
 * @param {any} num 숫자
 */
function zeroBaseNumber(num) {
  const currentValBoolen = Number.isInteger(num * 1);

  switch (true) {
      case (currentValBoolen === true): return setIntToString(num);
      break;
      case (currentValBoolen !== true): return null;
      break;
  };
};

function setIntToString(valueInt){ 
  if(valueInt >= 100) { return '99' } 
  else if(valueInt >= 10) { return `${valueInt}` }
  else {return `0${valueInt}`};
};


/**
 * 동작은 zeroBaseNumber와 동일합니다. 단, 문자열의 길이를 정할 수 있습니다.
 * 예를 들어 length가 3이라면, 2를 받았을 때 '002'를 반환하고 12를 받는다면 '012', 마지막으로 123을 받으면 '123'을 반환합니다.
 * length가 0 이하거나 숫자가 아니면 에러를 생성합니다.
 * @param {any} num 숫자
 * @param {number} length 길이
 */

function zeroBaseNumberWithLength(num, length) {
  const intTypeNum = num * 1;

  if(num === undefined) { return null; };
  if(checkLengthType(length) === true) { return createOutPutNumber(intTypeNum, length) }
  else if(checkLengthType(length) === false) { throw 'error' }
  else { return createOutPutNumber(intTypeNum, 2) };
};  

function checkLengthType(length) {
  const currentValBoolen = Number.isInteger(length);

  if(currentValBoolen === true && length > 0)
  { return true;  }
  else if(length === undefined) { return undefined; }
  else { return false; };
};

function createOutPutNumber(num, length) {
  const numStringLength = num.toString().length;
  const numForDivision = length - numStringLength;
  const lengthLimit = [];

  if(numForDivision >= 0) {
    return (function() { for(let i = 0; i < numForDivision; i++) { lengthLimit.push(0); };
    return [...lengthLimit, num].join(''); })();
  } else 
    { return (function() { for(let i = 0; i < length; i++) { lengthLimit.push(9); };
      return lengthLimit.join(''); })();
  };
};

module.exports = {
  zeroBaseNumber,
  zeroBaseNumberWithLength
};
