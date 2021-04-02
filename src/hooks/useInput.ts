import React, { useState, useCallback } from "react";

type OnChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useInput = (initialValue: string | boolean | number) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    const { target } = e;
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value;
    setValue(targetValue);
  }, []);
  return [value, handler, setValue] as [any, OnChangeType, typeof setValue];
};

export default useInput;
