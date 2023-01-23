export default function Pascal() {
  const n = 5;
  function pascalTri(n) {
    var triangle = [];
    for (let i = 0; i < n; i++) {
      triangle[i] = new Array(i + 1);
      for (let j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    return triangle;
  }

  const pascals = pascalTri(n);
  let htmlElement = " ";
  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      htmlElement += "*";
      htmlElement += pascals[i][j];
    }
  }

  return (
    <div>
      <h1>Pascal</h1>
      <div>{`${htmlElement}`}</div>
    </div>
  );
}
