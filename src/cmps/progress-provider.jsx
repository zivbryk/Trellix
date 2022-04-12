import { useState, useEffect, useCallback } from "react";
export const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [timeout, setTimeout] = useState(undefined);
  const [value, setValue] = useState(0);

  const myFunc = useCallback(() => {
    const timeoutTmp = window.setTimeout(() => {
      setValue(valueEnd);
    }, 400);
    setTimeout(timeoutTmp);
  }, [setValue]);

  useEffect(() => {
    myFunc();
    return function cleanup() {
      // Side-effect cleanup
      window.clearTimeout(timeout);
    };
  }, [myFunc]);

  useEffect(() => {
    if (valueStart) setValue(valueStart);
  }, [valueStart]);

  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return <div>{children(value)}</div>;
};
