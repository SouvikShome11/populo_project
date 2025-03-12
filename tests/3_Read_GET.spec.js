import { test, expect } from '@playwright/test';
import { BASE_URL, ENDPOINTS } from '../constants/constants.js';
import utils from '../common-utils/utils.js';
import { setupReportFinalization } from './hooks.js';

const reportPath = 'api-test-report.json';
const testDataPath = 'test-data/get_request_testData.json';

let testResults = [];
setupReportFinalization(testResults);

test.describe('Reqres.in - Read User - GET', () => {
  const testData = utils.readJsonFile(testDataPath);

  for (const data of testData) {
    if (data.id) {
      test(`should get user with id: ${data.id}`, async ({ request }) => {
        const endpoint = utils.replacePathParams(ENDPOINTS.SINGLE_USER, {
          id: data.id,
        });
        const response = await request.get(`${BASE_URL}${endpoint}`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty('data.first_name', data.first_name);
        expect(body).toHaveProperty('data.id', data.id);
      });
    }
  }
});
