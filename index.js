// const money = 50;
// let food = money > 60 ? "Eat pizza" : "Alur dom";
// console.log(food);

// how to work sessionStorage and localStorage 
const person = {
    name: "Abdul",
    age: 31,
    study: 'BUET',
    wife:'some one',
    profession: 'Job Holder',
    village: 'Belkuchi',
    post: 'Belkuchi',
    postCode: 6740,
    thana: 'Belkuchi',
    district: "Sirajganj",
    division: 'Rajshahi',
    country: 'Bangladesh'
}

const convertJson = JSON.stringify(person);
localStorage.setItem('person', convertJson);
const getItem = localStorage.getItem('person')
const convertParse = JSON.parse(getItem);
const keys = Object.keys(convertParse);
console.log('keys', keys);
const values = Object.values(convertParse);
console.log('Values', values);
console.log(convertParse);

// set value and get value 
const convertValueJson = JSON.stringify(values);
localStorage.setItem('values', convertValueJson);
const getConvertValue = localStorage.getItem('values');
const parseGetConvertValue = JSON.parse(getConvertValue);
console.log('newValue', parseGetConvertValue);

// set keys and get keys 
const convertKeyJson=JSON.stringify(keys);
localStorage.setItem('newKeys',convertKeyJson);
const getKeysValue=localStorage.getItem('newKeys');
const parseKeys=JSON.parse(getKeysValue);
console.log('newKeys',parseKeys);