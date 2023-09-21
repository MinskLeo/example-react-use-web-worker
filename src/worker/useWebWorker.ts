import { useCallback, useEffect, useState } from "react";

export interface IBaseWorkerResponse<T> {
  result: T;
  error?: any;
}

export const useWebWorker = <TResult, TWorkerPayload>(worker: Worker) => {
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<any>();
  const [result, setResult] = useState<TResult>();

  const startProcessing = useCallback(
    (data: TWorkerPayload) => {
      setRunning(true);
      worker.postMessage(data);
    },
    [worker]
  );

  useEffect(() => {
    const onMessage = (event: MessageEvent<IBaseWorkerResponse<TResult>>) => {
      console.log(event);
      setRunning(false);
      setError(event.data.error);
      setResult(event.data.result);
    };
    worker.addEventListener("message", onMessage);
    return () => worker.removeEventListener("message", onMessage);
  }, [worker]);

  return {
    startProcessing,
    running,
    error,
    result,
  };
};
