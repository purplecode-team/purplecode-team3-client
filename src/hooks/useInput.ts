import React, { useState, useCallback } from "react";

type OnChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue] as [string, OnChangeType, typeof setValue];
};

export default useInput;
