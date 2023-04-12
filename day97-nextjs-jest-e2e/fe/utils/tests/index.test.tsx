import Home from "@/pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("render calculator", () => {
    render(<Home />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("adds to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("13");
  });

  it("subtract to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const subButton = screen.getByTestId("subtract");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 13 } });
    fireEvent.change(num2input, { target: { value: 8 } });

    fireEvent.click(subButton);

    expect(result).toHaveTextContent("5");
  });

  it("multiply to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const multiplyButton = screen.getByTestId("multiply");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 6 } });

    fireEvent.click(multiplyButton);

    expect(result).toHaveTextContent("30");
  });

  it("multiply to number", () => {
    render(<Home />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const divideButton = screen.getByTestId("divide");
    const result = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 20 } });
    fireEvent.change(num2input, { target: { value: 5 } });

    fireEvent.click(divideButton);

    expect(result).toHaveTextContent("4");
  });
});
