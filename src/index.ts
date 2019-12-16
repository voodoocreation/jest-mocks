export const filterCalls = (mock: jest.Mock, ...args: any[]) =>
  mock.mock.calls.filter((call: any) =>
    args.reduce((acc, curr, index) => acc && call[index] === curr, true)
  );

export const findCall = (mock: jest.Mock, ...args: any[]) =>
  mock.mock.calls.find((call: any) =>
    args.reduce((acc, curr, index) => acc && call[index] === curr, true)
  );

export const resolvedPromise = <T>(value: T) =>
  new Promise<T>(resolve => resolve(value));

export const rejectedPromise = (error: string | Error) =>
  new Promise<any>((_, reject) =>
    reject(typeof error === "string" ? new Error(error) : error)
  );

export const mockWithResolvedPromise = <T>(value: T) =>
  jest.fn(() => resolvedPromise(value));

export const mockWithRejectedPromise = (error: string | Error) =>
  jest.fn(() => rejectedPromise(error));
