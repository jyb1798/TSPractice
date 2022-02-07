let age: number = 24;

let userName: string[];

let hobbie: number[];

let manyHobbie: {
  name: string;
  age: number;
};

// manyHobbie = {
//   employee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// 유형추론

let course = "React-Ts";

// course = 12

// 하나 이상의 타입이 한 변수에 저장되어야 할 때

let wecodeCourse: string | number = "React-Ts";

wecodeCourse = 12;

type PersponPeople = string | number;

type Perspons = {
  name: string;
  age: number;
}[];

// 함수 + type

function add(a: string, b: number): string {
  return a + b;
}

console.log(add(1, 1));

// 함수 + void(함수에 return이 없을 때)

function Iall(value: any) {
  console.log(value);
}

// Generic

function manyHobbies(array: any[], value: any) {
  const newArry = [value, ...array];
  return newArry;
}

const demoarry = [1, 2, 3];

const newMany = manyHobbies(demoarry, 1);

function manys<T>(arry: T[], value: T) {
  const newArry = [value, ...arry];
  return newArry;
}

const demoarrys = [1, 2, 3];

const newManys = manys(demoarry, 1);
