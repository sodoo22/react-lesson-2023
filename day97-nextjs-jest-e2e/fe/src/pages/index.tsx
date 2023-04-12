import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  function add() {
    setResult(num1 + num2);
  }

  function subtract() {
    setResult(num1 - num2);
  }

  function multyply() {
    setResult(num1 * num2);
  }

  function divide() {
    setResult(num1 / num2);
  }

  return (
    <div className={styles.container}>
      <h1>day96</h1>
      <div data-testid="result" className={styles.result}>
        {result}
      </div>
      <input
        className={styles.input}
        type="text"
        value={num1}
        data-testid="num1"
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        className={styles.input}
        type="text"
        value={num2}
        data-testid="num2"
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button className={styles.button} data-testid="add" onClick={add}>
        Add
      </button>
      <button
        className={styles.button}
        data-testid="subtract"
        onClick={subtract}
      >
        Subtract
      </button>
      <button
        className={styles.button}
        data-testid="multiply"
        onClick={multyply}
      >
        Multiply
      </button>
      <button className={styles.button} data-testid="divide" onClick={divide}>
        Divide
      </button>
    </div>
  );
}
