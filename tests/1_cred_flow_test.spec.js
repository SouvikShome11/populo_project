import { test, expect } from '@playwright/test';
import { BASE_URL, ENDPOINTS } from '../constants/constants.js';
import utils from '../common-utils/utils.js';
import { setupReportFinalization } from './hooks.js';
import { logAnnotation } from '../common-utils/logging.js';

const reportPath = 'api-test-report.json';
const testDataPath = 'test-data/cred_flow_testData.json';

let testResults = [];
let userId;
setupReportFinalization(testResults);

test.describe.serial('Reqres.in - CRED flow - Test', () => {
  const testData = utils.readJsonFile(testDataPath);

  test(`Create User - POST`, async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINTS.USERS}`, {
      data: { name: testData.name, job: testData.job },
    });
    const body = await response.json();

    // utils.recordTestResult(
    //   testResults,
    //   `Other Test: ${data.name}`,
    //   response.status(),
    //   body
    // );

    expect(response.status()).toBe(201);
    expect(typeof body.id).toBe('string');
    userId = body.id;
  });

  test(`Fetch Created User - GET`, async ({ request }) => {
    const endpoint = utils.replacePathParams(ENDPOINTS.SINGLE_USER, {
      id: userId,
    });
    const response = await request.get(`${BASE_URL}${endpoint}`);

    try {
      expect(response.status()).toBe(200);
    } catch (error) {
      utils.errorPrinter(error);
      logAnnotation(
        'ERROR',
        `API call failed: Expected status 200, received ${response.status()}`
      );
    }
  });

  test(`Delete Created User - DELETE`, async ({ request }) => {
    const endpoint = utils.replacePathParams(ENDPOINTS.SINGLE_USER, {
      id: userId,
    });
    const response = await request.delete(`${BASE_URL}${endpoint}`);

    expect(response.status()).toBe(204);
  });
});
