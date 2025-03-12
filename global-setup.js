import fs from 'fs';
import path from 'path';

async function globalSetup() {
  const reportPath = path.resolve(process.cwd(), 'api-test-report.json'); // Construct the full path

  try {
    if (fs.existsSync(reportPath)) {
      fs.unlinkSync(reportPath);
      console.log(`Deleted existing report file: ${reportPath}`);
    } else {
      console.log(`Report file does not exist: ${reportPath}`);
    }
  } catch (error) {
    console.error(`Error deleting report file: ${reportPath}`, error);
  }
}

export default globalSetup;
