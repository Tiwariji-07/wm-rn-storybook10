import React, { useState, useEffect } from "react";

const RefreshWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  // Only render the children after the delay (forcing a "fresh" mount)
  return isMounted ? children : null;
};

export default RefreshWrapper;
