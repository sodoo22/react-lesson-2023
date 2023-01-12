export default function UpdateArrays() {
  let a = [2, 3, 4, 5];

  console.log(a);

  a.push(6);
  console.log(a);

  a.unshift(1);
  console.log(a);

  a.pop();
  console.log(a);

  a.shift();
  console.log(a);

  a.splice(1, 1);
  console.log(a);

  const b = a.slice(1, 2);
  console.log(b);

  console.log(a.reverse());

  let c = [1, 3, 2, 5, 11, 12, 23, 100];
  console.log(c);
  c.sort((a, b) => a - b);
  console.log(c);

  let d = [1, 2];
  let e = [4, 5];
  const f = d.concat(e);
  console.log(f);

  e = [...d];
  console.log(e);

  console.log(c.filter((el) => el > 5));
  console.log(c.map((el) => el > 5));

  return (
    <div>
      <p>Arrays</p>
    </div>
  );
}
