const Assignment = () => {
  // -------------------------- (1) ------------------------------
  const Triangle = (l, b, h) => {
    return l * b * h;
  };

  const Circle = (pi, r) => {
    return pi * r;
  };

  const Rectangle = (l, b) => {
    return l * b;
  };
  // -------------------------- (2) ------------------------------
  let a = [1, 2, 3, 4, 5];
  let square = a.map((s) => {
    return s * s;
  });
  let cube = a.map((q) => {
    return q * q * q;
  });
  // -------------------------- (3) ------------------------------
  let b = [11, 22, 33, 44, 55];
  let display = b.map((b) => {
    return <li>{b}</li>;
  });
  // -------------------------- (4) ------------------------------
  const array = [1, 2, 3, 4, 5];
  const valueToFind = 3;

  const foundValue = array.find((element) => element === valueToFind);
  // -------------------------- (5) ------------------------------
  let array1 = [10, 20, 30, 40, 50, 60];

  let sum = array1.reduce((x, y) => {
    return x + y;
  });
  // -------------------------- (6) ------------------------------
  let arr = [11, 22, 33, 44, 55];
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  // -------------------------- (7) ------------------------------
  const leapyear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const year = 2024;
  if (leapyear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

  // -------------------------- (8) ------------------------------
  let merge = [...arr, ...a];
  // -------------------------- (10) ------------------------------
  let bb = ["mango", "orange", "mango", "apple", "apple", "pineapple", "apple"];

  const count = (arr) => {
    return arr.reduce((count, element) => {
      count[element] = (count[element] || 0) + 1;
      return count;
    }, {});
  };

  const result = count(bb);
  console.log(result);

  return (
    <>
      <div>
        <h2>(1)</h2>
        <h3>Area of Triangle is {Triangle(15, 25, 30)}</h3>
        <h3>Area of Circle is {Circle(3.14, 25)}</h3>
        <h3>Area of Rectangle is {Rectangle(10, 25)}</h3>
      </div>
      <div>
        <h2>(2)</h2>
        <h3>Square of Array is {square + ""}</h3>
        <h3>Cube of Array is {cube + ""}</h3>
      </div>
      <div>
        <h2>(3)</h2>
        <h3>
          <ul>{display}</ul>
        </h3>
      </div>
      <div>
        <h2>(4)</h2>
        <h3>Here the given Value {}</h3>
        <h3>Array: {array.join(", ")}</h3>
        <h3>Value to find: {valueToFind}</h3>
        {foundValue ? (
          <h3>Value found: {foundValue}</h3>
        ) : (
          <p>Value not found</p>
        )}
      </div>
      <div>
        <h2>(5)</h2>
        <h3>Sum of an given Array {sum}</h3>
      </div>
      <div>
        <h2>(6)</h2>
        <h3>Even Value is {even + ""}</h3>
        <h3>Odd Value is {odd + ""}</h3>
      </div>
      <div>
        <h2>(8)</h2>
        <h3>Merged array {merge + ""}</h3>
      </div>
      <hr />
    </>
  );
};

export default Assignment;
