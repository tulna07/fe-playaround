import { useEffect } from "react";

const useComponentWillUnmount = (cb, ...args) => {
  useEffect(() => {
    return () => {
      cb(...args);
    };
  }, []);
};

export default useComponentWillUnmount;
