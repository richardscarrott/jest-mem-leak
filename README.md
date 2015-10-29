## Jest memory leak

Reduced test case for https://github.com/facebook/jest/issues/584

The memory leak can be observed on my 8GB machine when running multiple processes but it still finishes. If running on a single process with `node node_modules/.bin/jest --runInBand` I've been able to get the process to reach the max memory and crash.
