let ageID = document.getElementById('age')

let thisYear = new Date()
let myYear = 2003;
let myAge;

if(thisYear.getMonth() >= 2 && thisYear.getDate() >= 9){
    myAge = thisYear.getFullYear() - myYear
} else {
    myAge = thisYear.getFullYear() - myYear - 1
}

ageID.innerHTML = `${myAge}y`