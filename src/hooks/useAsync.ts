import { useState, useCallback } from 'react';

/**
 * エラー処理のためのカスタムフック
 * @returns 
 */
export const useAsync = <T = any>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (asyncExecutor: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncExecutor();
      setData(result);
      return result;
    } catch (e) {
      setError(e as Error);
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, data, execute };
};