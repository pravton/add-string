const { add } = require('../index.js');

// test 1
test('"1,2,5" - expected result: "8"', () => {
  const string = "1,2,5";
  expect(add(string)).toEqual(8);
});

// test 2
test('"1\n,2,3" - Result: "6"', () => {
  const string = "1\n,2,3";
  expect(add(string)).toEqual(6);
});

// test 3
test('"1,\n2,4" - Result: "7"', () => {
  const string = "1,\n2,4";
  expect(add(string)).toEqual(7);
});

// test 4
test('"//;\n1;3;4" - Result: "8"', () => {
  const string = "//;\n1;3;4";
  expect(add(string)).toEqual(8); 
});

// test 5
test('"//$\n1$2$3" - Result: "6"', () => {
  const string = "//$\n1$2$3";
  expect(add(string)).toEqual(6); 
});

// test 6
test('"//@\n2@3@8" - Result: "13"', () => {
  const string = "//@\n2@3@8";
  expect(add(string)).toEqual(13); 
});

// test 7
test('"2,1001" - Result: "2"', () => {
  const string = "2,1001";
  expect(add(string)).toEqual(2); 
});

// test 8
test('"//***\n1***2***3" - Result: "6"', () => {
  const string = "//***\n1***2***3";
  expect(add(string)).toEqual(6); 
});

// test 9
test('"//$,@\n1$2@3" - Result: "6"', () => {
  const string = "//$,@\n1$2@3";
  expect(add(string)).toEqual(6); 
});

// test 10
test('"1, 10, -8, -5" - Result: "Negatives not allowed! -8,-5"', () => {
  const string = "1, 10, -8, -5";
  expect(add(string)).toEqual('Negatives not allowed! -8,-5'); 
});