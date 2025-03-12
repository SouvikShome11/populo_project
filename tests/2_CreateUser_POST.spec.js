import { test, expect } from '@playwright/test';
import { BASE_URL, ENDPOINTS } from '../constants/constants.js';
import utils from '../common-utils/utils.js';
import { setupReportFinalization } from './hooks.js';

const reportPath = 'api-test-report.json';
const testDataPath = 'test-data/post_request_testData.json';

let testResults = [];
setupReportFinalization(testResults);

test.describe('Reqres.in - Create User Test - POST', () => {
  const testData = utils.readJsonFile(testDataPath);

  for (const data of testData) {
    test(`Verify valid user request creates a new user successfully: ${data.name}`, async ({
      request,
    }) => {
      const response = await request.post(`${BASE_URL}${ENDPOINTS.USERS}`, {
        data: { name: data.name, job: data.job },
      });
      const body = await response.json();

      utils.recordTestResult(
        testResults,
        `Other Test: ${data.name}`,
        response.status(),
        body
      );

      expect(response.status()).toBe(201);
      expect(body).toHaveProperty('name', data.name);
      expect(body).toHaveProperty('job', data.job);
      expect(body).toHaveProperty('createdAt');
      expect(body).toHaveProperty('id');
      expect(typeof body.id).toBe('string');
    });
  }
});
