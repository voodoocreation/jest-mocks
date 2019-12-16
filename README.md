Jest Mocks
==========

A set of useful mocks and helpers for the Jest unit testing framework.


Available helpers
-----------------

### `filterMockCalls(mock, ...args)`
Returns an array of calls from the provided Jest Mock, where `args` matches the args the mock was
called with.


### `findMockCall(mock, ...args)`
Returns the first matching call from the provided Jest Mock, where `args` matches the args the mock
was called with.


### `resolvedPromise(value)`
Returns a `Promise` that will instantly resolve with the provided `value`.


### `rejectedPromise(error)`
Returns a `Promise` that will instantly be rejected with the provided `error`.


### `mockWithResolvedPromise(value)`
Returns an `async` Jest Mock that will instantly resolve with the provided `value` when called.


### `mockWithRejectedPromise(error)`
Returns an `async` Jest Mock that will instantly be rejected with the provided `error` when called.
