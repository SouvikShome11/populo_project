import { test, expect } from '@playwright/test';
import { BASE_URL, ENDPOINTS } from '../constants/constants.js';
import utils from '../common-utils/utils.js';
import { setupReportFinalization } from './hooks.js';

const reportPath = 'api-test-report.json';
const testDataPath = 'test-data/delete_request_testData.json';

let testResults = [];
setupReportFinalization(testResults);

test.describe('Reqres.in - Delete User - DELETE', () => {
  const testData = utils.readJsonFile(testDataPath);

  for (const tData of testData) {
    if (tData.id) {
      test(`should update user details with id: ${tData.id}`, async ({
        request,
      }) => {
        const endpoint = utils.replacePathParams(ENDPOINTS.SINGLE_USER, {
          id: tData.id,
        });

        const response = await request.delete(`${BASE_URL}${endpoint}`);

        expect(response.status()).toBe(204);
      });
    }
  }
});
