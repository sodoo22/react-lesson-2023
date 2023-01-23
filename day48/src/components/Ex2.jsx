export default function FindEvenOdd() {
  const arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

  function findEven(arr) {
    return arr.filter((a) => a % 2 === 0);
  }
  function findOdd(arr) {
    return arr.filter((a) => a % 2 !== 0);
  }

  const evenNumbers = findEven(arr);
  const oddNumbers = findOdd(arr);

  return (
    <div>
      <h1>Find even odd</h1>
      <h3>Even numbers</h3>
      {evenNumbers &&
        evenNumbers.map((n) => {
          return <p>{n}</p>;
        })}
      <h3>Odd numbers</h3>
      {oddNumbers &&
        oddNumbers.map((n) => {
          return <p>{n}</p>;
        })}
    </div>
  );
}
