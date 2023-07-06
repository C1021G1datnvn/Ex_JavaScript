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
        if (Math.abs(parseInt(numberString[i]) - parseInt(numberString[i - 1])) !== x) {
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

// đang sai 


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

