import { vitest } from 'vitest';

export const mockedFetch = (resolveData: any) => {
  return vitest.fn().mockResolvedValueOnce({
    json: () => resolveData,
    ok: true,
  });
};
