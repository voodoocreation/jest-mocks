import {
  filterCalls,
  findCall,
  mockWithRejectedPromise,
  mockWithResolvedPromise,
  rejectedPromise,
  resolvedPromise
} from "./index";

describe("Jest mocks", () => {
  describe("filterCalls", () => {
    it("returns the expected mock call", () => {
      const mockFunction = jest.fn((str: string) => str);

      mockFunction("First call");
      mockFunction("Other call");
      mockFunction("Other call");

      expect(filterCalls(mockFunction, "Other call")).toEqual([
        ["Other call"],
        ["Other call"]
      ]);
    });
  });

  describe("findCall", () => {
    it("returns the expected mock call", () => {
      const mockFunction = jest.fn((str: string) => str);

      mockFunction("First call");
      mockFunction("Second call");

      expect(findCall(mockFunction, "Second call")).toEqual(["Second call"]);
    });
  });

  describe("resolvedPromise", () => {
    it("returns a promise that instantly resolves with the provided data", async () => {
      const data = { test: true };

      expect(await resolvedPromise(data)).toEqual(data);
    });
  });

  describe("rejectedPromise", () => {
    it("returns a promise that instantly rejects with the provided error message string", async () => {
      let rejectedError;
      const message = "Rejected";

      try {
        await rejectedPromise(message);
      } catch (error) {
        rejectedError = error;
      }

      expect(rejectedError).toEqual(new Error(message));
    });

    it("returns a promise that instantly rejects with the provided error", async () => {
      let rejectedError;
      const error = new Error("Rejected");

      try {
        await rejectedPromise(error);
      } catch (error) {
        rejectedError = error;
      }

      expect(rejectedError).toEqual(error);
    });
  });

  describe("mockWithResolvedPromise", () => {
    it("creates an async mock function that instantly resolves with the provided data", async () => {
      const data = { test: "Successful" };
      const mock = mockWithResolvedPromise(data);

      expect(await mock()).toEqual(data);
      expect(mock).toHaveBeenCalledTimes(1);
    });
  });

  describe("mockWithRejectedPromise", () => {
    it("returns an async mock function that instantly rejects with the provided error message", async () => {
      let rejectedError;
      const message = "Rejected";
      const mock = mockWithRejectedPromise(message);

      try {
        await mock();
      } catch (error) {
        rejectedError = error;
      }

      expect(rejectedError).toEqual(new Error(message));
      expect(mock).toHaveBeenCalledTimes(1);
    });
  });
});
