import fs from 'fs';
import path from 'path';

const utils = {
  readJsonFile(filePath) {
    try {
      const absolutePath = path.resolve(process.cwd(), filePath); // Use process.cwd() for flexibility
      const data = fs.readFileSync(absolutePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading or parsing JSON file: ${filePath}`, error);
      return null;
    }
  },
  replacePathParams(path, params) {
    let replacedPath = path;
    for (const key in params) {
      replacedPath = replacedPath.replace(`{${key}}`, params[key]);
    }
    return replacedPath;
  },

  recordTestResult(testResults, testName, status, data) {
    testResults.push({
      testName: testName,
      status: status,
      data: data,
    });
  },

  errorPrinter(error) {
    let errorMessage = '';
    console.error('An unknown error occurred:', error);
    errorMessage = `An unknown error occurred: ${error}`;
    return errorMessage;
    //throw error; // Re-throw the error to fail the test
  },
};

export default utils;
