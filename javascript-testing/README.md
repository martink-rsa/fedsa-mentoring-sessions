# JavaScript testing with Jest

## How to install Jest in a basic sandbox:

**Note:** Both the `npm` and `yarn` commands will be listed below. You must only choose one of the package managers and then stick to that project manager throughout your project.

1. Initialize a package.json file for your project. We are adding a the `-y` flag below which automatically answers yes to all questions in the initialization process. This speeds up the intialization as you don't have to do anything else and it will generate a `package.json` file for you.

npm:

```
npm init -y
```

or

yarn:

```
yarn init -y

```

2. Add Jes to the project:

npm:

```bash
npm install --save-dev jest
```

or

yarn:

```bash
yarn add --dev jest
```

3. Create a file called `.gitignore` in the root directory of your project and add the following line to it:

```
node_modules
```

4. Add a Jest script to package.json so it is easier to run our tests.

Open package.json, and then add a `scripts` field to `package.json` as follows. If you already have a scripts field, then add `test` to it. We are also adding a `watcher` for Jest so that we can have Jest rerun tests any time we save a file:

```json
{
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
  }
}
```

Your file will look similar to the following:

```json
{
  "name": "javascript-testing",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {
    "jest": "^27.1.1"
  },
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
  }
}
```

You can now run your Jest tests with the following commands:

npm:

```bash
npm test
# or
npm run test
```

yarn:

```bash
yarn test
```

You can also run the watcher with the following commands:

npm:

```bash
npm run test-watch

```

```bash
yarn test-watch
```

5. Create a test unit:

Create a `/src` directory in your root directory and then create an `index.test.js` file inside of that.

Lets add a test inside of `index.test.js`. It is going to check if the value of `1` is equal to `1`, which it is, so it will always pass. We have to have at least one test in a test file otherwise Jest will throw an error:

```js
it('checks that 1 is 1', () => {
  expect(1).toBe(1);
});
```

Save the file

6. Run the test:

Run the script we added to `package.json`:

npm:

```bash
npm test
# or
npm run test
```

yarn:

```bash
yarn test
```
