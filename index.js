//1-misol

/*
let student = {
  name : 'David Rayy',
  sclass : 'VI',
  rollno : 12,
}
for ( let key in student){
  console.log(key)
}*/

// 2-misol

/*let student = {
  name : 'David Rayy',
  sclass : 'VI',
  rollno : 12,
}

for ( let key in student){
  delete student.rollno
  console.log(key)
}*/

// 3-misol

/*function propertySoni(object) {
  return Object.keys(object).length;
}

let student = {
  name : "David Rayy",
	sclass : "VI",
	rollno : 12 
};

console.log(propertySoni(student)); */

// 4-misol

/*function Person1(ism, daromat, xarajat) {
  this.ism = ism;
  this.daromat = daromat;
  this.xarajat = xarajat;
  this.getMonthlyIncome = function() {
      return this.daromat - this.xarajat;
  }
}

let person1 = new Person1('John', 1000, 200);

let daromad = person1.getMonthlyIncome();

console.log(person1.ism + "'ning xarajatdan tashqari daromadi $" + daromad);*/


// 5-misol

/*let car = {
  rusumi: 'nexia 3',
	rangi: 'Mokry',
  start: function () {
    console.log('vrum vrum');
  },
  drive : function () {
    console.log('driving');
  },
  stop: function () {
    console.log('stopping');
  }
}
car.start(); // "vrum vrum" chiqadi consoleda

car.drive(); // "driving" chiqadi consoleda

car.stop(); // "stopping" chiqadi consoleda*/

//6-misol

/*let obj = {
  1: '1-qoshiladi',
  2: '2-qoshiladi',
  3: '3-qoshiladi',
};

for (let key in obj) {
  obj[key] = 'yangi qiymat qoshildi';
}

console.log(obj);*/