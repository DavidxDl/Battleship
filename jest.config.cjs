/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

/* registerer = require('ts-node').register({
  compilerOptions: {
    module: 'CommonJS',
    allowCommonjsInEsmPackage: true // <-- name of this option TBD; this is an example.  Name could be allowLoadEsmAsCommonjs or allowRequireEsm or something like that
  },
}); */