import { useState } from "react";

const useToggleItems = (initialValue, initialPosition = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  const toggleState = () => {
    const nextIndex = (currentIndex + 1) % initialValue.length;
    setCurrentIndex(nextIndex);
  };

  return [initialValue[currentIndex], toggleState];
};

export default useToggleItems;
