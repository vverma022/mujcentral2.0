import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CircleCheckIcon } from "lucide-react";


export const SuccessAlert = ({ success, setSuccess }) => (
  <Alert
    variant="default"
    className="relative bg-green-100 text-green-400 dark:bg-green-900 dark:text-green-300 shadow-lg"
  >
    <button
      onClick={() => setSuccess(null)}
      className="absolute top-1 right-1 text-green-400 dark:text-green-300 hover:text-green-600"
    >
      ✕
    </button>
    <CircleCheckIcon className="h-4 w-4" />
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>{success}</AlertDescription>
  </Alert>
);

export const ErrorAlert = ({ error, setError }) => (
<Alert
variant="default"
className="relative bg-red-100 text-red-400 dark:bg-red-900 dark:text-red-300 shadow-lg"
>
<button
  onClick={() => setError(null)}
  className="absolute top-1 right-1 text-red-400 dark:text-red-300 hover:text-red-600"
>
  ✕
</button>
<CircleCheckIcon className="h-4 w-4" />
<AlertTitle>Error</AlertTitle>
<AlertDescription>{error}</AlertDescription>
</Alert>
);