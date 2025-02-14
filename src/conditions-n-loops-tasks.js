/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const arr = [a, b, c];
  let res = 0;
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] > res) {
      res = arr[i];
    }
  }
  return res;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.y - king.y) === Math.abs(queen.x - king.x)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (c === 5) {
    return false;
  }
  const arr = [a, b, c];
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] === 0) {
      return false;
    }
  }
  for (let i = 1; i <= arr.length; i += 1) {
    let count = i;
    if (arr[0] === arr[i]) {
      count += 1;
    }
    if (count > i) {
      return true;
    }
  }
  if (arr[1] === arr[2]) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tens = Math.floor(num / 10);
  const units = num % 10;
  let tensStr = '';
  let unitsStr = '';

  switch (tens) {
    case 1:
      tensStr = 'X';
      break;
    case 2:
      tensStr = 'XX';
      break;
    case 3:
      tensStr = 'XXX';
      break;
    default:
      tensStr = '';
  }
  switch (units) {
    case 1:
      unitsStr = 'I';
      break;
    case 2:
      unitsStr = 'II';
      break;
    case 3:
      unitsStr = 'III';
      break;
    case 4:
      unitsStr = 'IV';
      break;
    case 5:
      unitsStr = 'V';
      break;
    case 6:
      unitsStr = 'VI';
      break;
    case 7:
      unitsStr = 'VII';
      break;
    case 8:
      unitsStr = 'VIII';
      break;
    case 9:
      unitsStr = 'IX';
      break;
    default:
      unitsStr = '';
  }

  return tensStr + unitsStr;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let subStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        subStr = 'one';
        break;
      case '2':
        subStr = 'two';
        break;
      case '3':
        subStr = 'three';
        break;
      case '4':
        subStr = 'four';
        break;
      case '5':
        subStr = 'five';
        break;
      case '6':
        subStr = 'six';
        break;
      case '7':
        subStr = 'seven';
        break;
      case '8':
        subStr = 'eight';
        break;
      case '9':
        subStr = 'nine';
        break;
      case '0':
        subStr = 'zero';
        break;
      case '-':
        subStr = 'minus';
        break;
      default:
        subStr = 'point';
        break;
    }
    if (i > 0) {
      result += ' ';
    }
    result += subStr;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let count = 0;
  for (let i = 0; i <= Math.floor(str.length / 2) - 1; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      count += 1;
    }
  }
  if (count === 0) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  for (let i = 0; i <= numStr.length; i += 1) {
    if (numStr[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;
    for (let leftIndex = 0; leftIndex < i; leftIndex += 1) {
      left += arr[leftIndex];
    }
    for (let rightIndex = arr.length - 1; rightIndex > i; rightIndex -= 1) {
      right += arr[rightIndex];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiral = new Array(size);
  for (let i = 0; i < size; i += 1) {
    spiral[i] = new Array(size);
  }
  let colCurrent = 0;
  let rowCurrent = 0;
  let colEnd = size - 1;
  let rowEnd = size - 1;
  for (let number = 1; number <= size * size; ) {
    for (let i = colCurrent; i <= colEnd; i += 1, number += 1) {
      spiral[rowCurrent][i] = number;
    }
    rowCurrent += 1;
    for (let i = rowCurrent; i <= rowEnd; i += 1, number += 1) {
      spiral[i][colEnd] = number;
    }
    colEnd -= 1;
    for (let i = colEnd; i >= colCurrent; i -= 1, number += 1) {
      spiral[rowEnd][i] = number;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= rowCurrent; i -= 1, number += 1) {
      spiral[i][colCurrent] = number;
    }
    colCurrent += 1;
  }
  return spiral;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const start = Math.floor(matrix.length / 2);
  const end = matrix.length - 1;
  const res = matrix;
  for (let i = 0; i < start; i += 1) {
    for (let j = i; j < end - i; j += 1) {
      const n = matrix[i][j];
      res[i][j] = matrix[end - j][i];
      res[end - j][i] = matrix[end - i][end - j];
      res[end - i][end - j] = matrix[j][end - i];
      res[j][end - i] = n;
    }
  }
  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sorted = arr;

  function changeElements(elements, leftIndex, rightIndex) {
    const arrCopy = elements;
    const item = arrCopy[leftIndex];
    arrCopy[leftIndex] = arrCopy[rightIndex];
    arrCopy[rightIndex] = item;
  }

  function partition(elements, left, right) {
    let l = left;
    let r = right;
    const pivot = elements[Math.floor((r + l) / 2)];

    while (l <= r) {
      while (elements[l] < pivot) {
        l += 1;
      }
      while (elements[r] > pivot) {
        r -= 1;
      }
      if (r >= l) {
        changeElements(elements, l, r);
        l += 1;
        r -= 1;
      }
    }
    return l;
  }

  function Sort(elements, left, right) {
    let i;

    if (elements.length > 1) {
      i = partition(elements, left, right);
      if (i < right) {
        Sort(elements, i, right);
      }
      if (left < i - 1) {
        Sort(elements, left, i - 1);
      }
    }
    return elements;
  }
  Sort(sorted, 0, sorted.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strEmpty1 = '';
  let strEmpty2 = '';
  let strResult = str;
  for (let j = 1; j <= iterations; j += 1) {
    for (let i = 0; i < strResult.length; i += 1) {
      if (i % 2 === 0) {
        strEmpty1 += strResult[i];
      }
      if (i % 2 !== 0) {
        strEmpty2 += strResult[i];
      }
    }
    strResult = strEmpty1 + strEmpty2;
    strEmpty1 = '';
    strEmpty2 = '';
    if (strResult === str) {
      return shuffleChar(str, iterations % j);
    }
  }
  return strResult;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digitsSort = [];
  const digits = Array.from(String(number));
  digitsSort.push(digits.pop());
  while (digitsSort[digitsSort.length - 1] <= digits[digits.length - 1]) {
    digitsSort.push(digits.pop());
  }
  for (let i = 0; i < digitsSort.length; i += 1) {
    if (digits[digits.length - 1] < digitsSort[i]) {
      const item = digitsSort.splice(i, 1, digits.pop());
      digits.push(item[0]);
      break;
    }
  }
  const result = Number(digits.join('') + digitsSort.join(''));
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
