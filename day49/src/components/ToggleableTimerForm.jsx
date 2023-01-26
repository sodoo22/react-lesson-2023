import { useState } from "react";
import TimerForm from "./TimerForm";

export default function ToggableTimerForm({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleFormSubmit(timer) {
    onFormSubmit(timer);
    setIsOpen(false);
  }
  function handleFormOpen() {
    setIsOpen(true);
  }
  function handleFormClose() {
    setIsOpen(false);
  }

  return (
    <div>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <div>
          <button onClick={handleFormOpen} className="margin-auto">
            Click me
          </button>
        </div>
      )}
    </div>
  );
}
