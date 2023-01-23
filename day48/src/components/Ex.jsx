import { useEffect } from "react";
import { useState } from "react";

export default function Ex() {
  let array = [1, 2, 3, 4, 1];

  function filterNumbers(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumCount(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      //   console.log(i, "-- ".result.length);
      const resultObject = {
        i: result.length,
      };
      newArr = [...newArr, resultObject];
    }
    return newArr;
  }
  const numbers = findNumCount(array);
  console.log(numbers);

  return (
    <div>
      <h1>Ex</h1>
      {numbers &&
        numbers.map((el, index) => {
          return (
            <p>
              {index}-{el.i}
            </p>
          );
        })}
    </div>
  );
}
