// bài 1 Kiểm tra số tăng dần

function isIncreasingNumber(number) {
   let numberString = number.toString();

   if(numberString.length < 2) {
        return false;
   }

   for(let i = 0; i < numberString.length; i++) {
        if(numberString[i + 1] <= numberString[i])
        return false;
   }

   return true;
};

console.log(isIncreasingNumber(12345));
console.log(isIncreasingNumber(54321));
console.log(isIncreasingNumber(121));

// bài 2 Kiểm tra số giảm dần

function isDecreasingNumber(number) {
    let numberString = number.toString();
 
    if(numberString.length < 2) {
         return false;
    }
 
    for(let i = 0; i < numberString.length; i++) {
         if(numberString[i] <= numberString[i + 1])
         return false;
    }
 
    return true;
 };

console.log(isDecreasingNumber(54321));
console.log(isDecreasingNumber(12345));
console.log(isDecreasingNumber(121));

// bài 3  Kiểm tra số tăng dần đều theo khoảng cách cho trước

function isIncreasingNumberByDistance(number, x) {

    let numberString = number.toString();
 
    if(numberString.length < 2) {
         return false;
    }

    for (let i = 1; i < numberString.length; i++) {
        if (Math.abs(parseInt(numberString[i - 1]) - parseInt(numberString[i])) !== x) {
          return false;
        }
    }

    return true;

};
console.log(isIncreasingNumberByDistance(135, 2));
console.log(isIncreasingNumberByDistance(135, 1));

// bài 4 Kiểm tra số nguyên tố

function isPrime(num) {
    if(num < 2) {
         return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(15));
console.log(Math.sqrt(10));

// bài 5 Kiểm tra số chính phương

function isPerfectSquare(num) {
    let numStr = num.toString();

    // if(numStr.charAt(numStr.length - 1) == 2 || numStr.charAt(numStr.length - 1) == 3 || numStr.charAt(numStr.length - 1) == 7 || numStr.charAt(numStr.length - 1) == 8) {
    //     return false;
    // } 
    if(num <= 0 && num >= 100000) {
        return false;
    }

    let sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
    
    for(let i = 0; i <= 100000; i++) {
        if(isPerfectSquare(i)) {
            return true;
        }
    }
}

console.log(isPerfectSquare(7));

// bài 6  Kiểm tra số hoàn hảo 
function isPerfectNumber(number) {
    

    if(number <= 1 || number >=1000) {
        return "Cái nịt"
    }

    let total = 0;

    for(let i = 1; i <= number/2; i++) {
        if(number % i === 0) {
            total += i;
        }   
    }

    if(total === number) {
        return number + " là số hoàn hảo"
    } 

    return "Vẫn là cái nịt";
}

console.log(isPerfectNumber(28));

// bài 7  Kiểm tra đối xứng 

function isSymetricNumber(number) {
    
    if(number <= 1 || number >=1000000) {
        return "Cái nịt"
    }

    let numberStr = number.toString();

    for(let i = 1; i <= numberStr.length / 2; i++) {
        if(numberStr[i] !== numberStr[numberStr.length - 1 - i]) {
            return false;
        }
    };

    return true;
};

console.log(isSymetricNumber(123321));


// bài 8  Kiểm tra số có tổng chia hết cho 10

function isDivisibleBy10(number){
    
    if(number <= 1 || number >=1000000) {
        return "Cái nịt"
    }

    let numberStr = number.toString();
    let total = 0;
    for(let i = 0; i < numberStr.length - 1; i++) {
        total += i; 
    }
    if(total % 10 == 0) {
        return number + " chia hết cho 10"
    }
    return "không chia hết cho 10";
}
console.log(isDivisibleBy10(101));

// bài 9  Kiểm tra số có tổng của 2 chữ số bằng số cho trước

function hasTwoDigitsWithSum(n,sum){
    if(n <= 9 || n >=1000000) {
        return "Cái nịt";
    }
    if(sum < 0 || sum >= 19) {
        return "cái nịt x2";
    }

    let numberStr = n.toString();
    let total = 0;
    for(let i = 0; i < numberStr.length; i++) {
        total += i;
    }
    if(total == sum) {
        return true;
    }
    return false;
}

console.log(hasTwoDigitsWithSum(101, 3));


// bài toán atm

function withdraw(amount) {
    const K500_QUANTITY = 2;
    const K200_QUANTITY = 5;
    const K100_QUANTITY = 10;
    const K50_QUANTITY = 100;
    
    const K500_VALUE = 500000;
    const K200_VALUE = 200000;
    const K100_VALUE = 100000;
    const K50_VALUE = 50000;

    const BASE_UNIT = 50000;
    if (amount % BASE_UNIT !== 0) {
      return 'Invalid balance';
    }
    
    const result = { k500: 0, k200: 0, k100: 0, k50: 0 };
  
    while (amount > 0) {
      if (amount >= K500_VALUE && result.k500 < K500_QUANTITY) {
        amount -= K500_VALUE;
        result.k500 += 1;
      } else if (amount >= K200_VALUE && result.k200 < K200_QUANTITY) {
        amount -= K200_VALUE;
        result.k200 += 1;
      } else if (amount >= K100_VALUE && result.k100 < K100_QUANTITY) {
        amount -= K100_VALUE;
        result.k100 += 1;
      } else if (amount >= K50_VALUE && result.k50 < K50_QUANTITY) {
        amount -= K50_VALUE;
        result.k50 += 1;
      } else {
        return 'Insufficient balance from ATM';
      }
    }
  
    return result;
  }

  console.log(withdraw(850000));


  // cách 2 

  function withdraw2(amount) {
    const K500_QUANTITY = 2;
    const K200_QUANTITY = 5;
    const K100_QUANTITY = 10;
    const K50_QUANTITY = 100;
    
    const K500_VALUE = 500000;
    const K200_VALUE = 200000;
    const K100_VALUE = 100000;
    const K50_VALUE = 50000;
    const BASE_UNIT = 50000;

    const TOTAL = 8000000;

    if(amount % BASE_UNIT !== 0) {
        return 'Invalid balance';
    }

    if(TOTAL < amount) {
        return 'Insufficient balance from ATM';
    }

    const result = { k500: 0, k200: 0, k100: 0, k50: 0 };

    let a = Math.floor(amount / K500_VALUE); // a = 1
        if( K500_QUANTITY < a) {
           return "Hết tiền rồi !";
        }
        result.k500 = a;
    
    let total_500 = K500_VALUE * a;

    let cash_in_return_1 = amount - total_500;
    
    let b = Math.floor(cash_in_return_1 / K200_VALUE);
        if( K200_QUANTITY < b) {
            return "Hết tiền rồi !";
        }
        result.k200 = b;

    let total_200 = K200_VALUE * b;

    let cash_in_return_2 = cash_in_return_1 - total_200;

    let c = Math.floor(cash_in_return_2 / K100_VALUE);

        if( K100_QUANTITY < c) {
            return "Hết tiền rồi !";
        }
        result.k100 = c;
    
    let total_100 = K100_VALUE * c;

    let cash_in_return_3 = cash_in_return_2 - total_100;

    let d = Math.floor(cash_in_return_3 / K50_VALUE);

        if( K50_QUANTITY < d) {
            return "Hết tiền rồi !";
        }
        result.k50 = d;

    return result;
  }

  console.log(withdraw2(750000));
