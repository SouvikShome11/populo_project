import { test } from '@playwright/test';
import fs from 'fs';

const reportPath = 'api-test-report.json'; // Ensure this matches your report path

export const setupReportFinalization = (testResults) => {
  /*
  test.afterAll(async () => {
    let existingResults = [];
    if (fs.existsSync(reportPath)) {
      existingResults = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    }
    const combinedResults = existingResults.concat(testResults);
    fs.writeFileSync(reportPath, JSON.stringify(combinedResults, null, 2));
    console.log(`Test report updated: ${reportPath}`);
  });
  */
};
