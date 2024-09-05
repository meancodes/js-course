
// -------- SOLUTION TO EXERCISE 11a --------
const nums = [10, 20, 30];
  nums[2] = 99;

console.log(nums.length);




// -------- SOLUTION TO EXERCISE 11b --------

function getLastValue (num) {
  const lastValue = num.length - 1;
  
  return num[lastValue];
}
 
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));




// -------- SOLUTION TO EXERCISE 11c --------

function arraySwap (num) {
  const lastIndex = num.length - 1;

  const lastValue = num[lastIndex];
  const firstValue = num[0];

  num[lastIndex] = firstValue;
  num[0] = lastValue;

  return num;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));




// -------- SOLUTION TO EXERCISE 11d --------

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }




// -------- SOLUTION TO EXERCISE 11e --------


// for (let i = 5; i >= 0; i --) {
//   console.log(i);
// }




// -------- SOLUTION TO EXERCISE 11f(i) --------

// let i = 0;
//
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }


//     -- SOLUTION TO EXERCISE 11f(ii) --

// let i = 5;
//
// while (i >= 0) {
//   console.log(i);
//   i --;
// }




// -------- SOLUTION TO EXERCISE 11g --------

// const num = [1, 2, 3];
// let total = [];
//
// for (let i = 0; i < nums.length; i ++) {
//   const value = num[i];
//   total.push(value + 1);
// }
// console.log(total);




// -------- SOLUTION TO EXERCISE 11h --------

function addOne(array) {
  let total = [];

  for (let i = 0; i < array.length; i ++) {
    const value = array[i];
    total.push(value + 1);
  }

  return total;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));




// -------- SOLUTION TO EXERCISE 11i --------

function addNum(array, num) {
  let total = [];

  for (let i = 0; i < array.length; i ++) {
    const value = array[i];
    total.push(value + num);
  }

  return total;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));




// -------- SOLUTION TO EXERCISE 11j --------

function addArray(array1, array2) {
  let total = [];

  for (let i = 0; i < array1.length; i ++) {
    const value = array1[i];
    const value2 = array2[i];
    total.push(value + value2);
  }

  return total;
}

console.log(addArray([1, 1, 2], [1, 1, 3]));
console.log(addArray([1, 2, 3], [4, 5, 6]));




// -------- SOLUTION TO EXERCISE 11j --------


function countPositive(nums) {

  let positive = 0;

  for (let i = 0; i < nums.length; i ++) {
    const value = nums[i];

    if (value > 0) {
      positive ++;
    }
  }

  return positive;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));




// -------- SOLUTION TO EXERCISE 11o --------


function strings(num) {

  for (let i = 0; i < strings.length; i++) {
    if (num[i] === 'search') {
      console.log(num[2]);
    } else {
      console.log('-1');
    }
  }
}
strings(['hello', 'world', 'search', 'good', 'search']);
strings(['not', 'found']);