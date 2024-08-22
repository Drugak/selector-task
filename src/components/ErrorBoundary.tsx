import React, { useState, useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

function ErrorBoundary({ children }: Props) {
  const [isError, setIsError] = useState(false);
  const lisnerFn = () => setIsError(true);

  useEffect(() => {
    window.addEventListener('error', lisnerFn);

    return () => {
      window.removeEventListener('error', lisnerFn);
    };
  }, []);

  return (isError ? <h1>Sorry, some error, we are working on it...</h1>: children);
}

export default ErrorBoundary;
