import React, { useState, useCallback } from "react";

type OnChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [string, OnChangeType, typeof setValue];
};

export default useInput;
