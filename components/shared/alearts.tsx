import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleCheckIcon } from "lucide-react";


import React, { useEffect } from "react";

export const SuccessAlert = ({ success, setSuccess }) => {
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [success, setSuccess]);

  return (
    <Alert
      variant="default"
      className="relative bg-green-100 text-green-400 shadow-lg dark:bg-green-900 dark:text-green-300"
    >
      <button
        onClick={() => setSuccess(null)}
        className="absolute right-1 top-1 text-green-400 hover:text-green-600 dark:text-green-300"
      >
        ✕
      </button>
      <CircleCheckIcon className="size-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{success}</AlertDescription>
    </Alert>
  );
};

export const ErrorAlert = ({ error, setError }) => {
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [error, setError]);

  return (
    <Alert
      variant="default"
      className="relative bg-red-100 text-red-400 shadow-lg dark:bg-red-900 dark:text-red-300"
    >
      <button
        onClick={() => setError(null)}
        className="absolute right-1 top-1 text-red-400 hover:text-red-600 dark:text-red-300"
      >
        ✕
      </button>
      <CircleCheckIcon className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};