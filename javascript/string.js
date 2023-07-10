
// bài 1
function countWords(str) {
    if (str.trim().length === 0) {
      return 0;
    }
    let words = str.split(" ");
    
    return words.length;
  }
  
  let sentence = "easy frontend";
  let wordCount = countWords(sentence); 
  console.log(wordCount);

//   bài 2 
function statisticsWords(str) {

    let temp = {};

    if(str.trim().length === 0) {
        return 0;
    }

    let words = str.split(" ");
    for(let i = 0; i <= words.length; i++) {
        let word = words[i];

        if(temp[word]) {
            temp[word]++;
        } else {
            temp[word] = 1;
        }
    }

    return temp;

};
let wordStatistics = statisticsWords( "easy frontend is easy and fun");
console.log(wordStatistics);

// bài 3  Thống kê ký tự có trong câu


function statisticsCharacters(str) {

    let temp = {};

    for(let i = 0; i <= str.length - 1; i++) {

        let word = str[i];

        if(word === " ") {

            word = 'space';

        }

        if(temp[word]) {

            temp[word]++;

        } else {

            temp[word] = 1;

        }
    }
    return temp;
} 
console.log(statisticsCharacters('aa b cc '));

// bài 4 Ðếm số lượng email có trong câu
function countEmails(str) {
    let arrStr = str.split(" ");

    let checkChar = [];

    let index = 0;

    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i].includes("@")) {
            checkChar += arrStr[i] + " ";
        }
    }

    let split = checkChar.split(" ");
    console.log(split);

    for(let i = 0; i < split.length - 1; i++) {
        if(checkCondition(split[i])){
            index++;
        }
    }

    return index;
}

function checkCondition(str) {
    let firstThreeChars = str.slice(0, 3);
    let lastThreeChars = str.slice(-3);
  
    if (firstThreeChars.length >= 3 && lastThreeChars.length >= 3) {
      return true;
    } else {
      return false;
    }
}
  
console.log(countEmails('my email should be easy@frontend.com or easy@frontend.com.vn oreasy@frontend.vn'));

// bài 5 Ðếm số lượng url có trong câu

function countURLs(str) {

}


// bài 6  Hiển thị địa chỉ người dùng

function getDisplayedAddress(address) {
    let arrAddress = {};

    if(address.number) {
        arrAddress += address.number +" "
    }
    if(address.street) {
        arrAddress += address.street +" "
    }
    if(address.ward) {
        arrAddress += address.ward +" "
    }
    if(address.district) {
        arrAddress += address.district +" "
    }
    if(address.city) {
        arrAddress += address.city +" "
    }

    return arrAddress;

}

console.log(getDisplayedAddress({
    number: 123,
    street: 'Nguyen Cong Tru',
    ward: 'Ward 11',
    }));