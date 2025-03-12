# Reqres.in API CRUD Tests with Playwright

This project contains Playwright tests for performing CRUD operations on the **Reqres.in API** .

## Tech Stack

- Playwright
- Javascript
- Github Actions (To Run the test in remote)

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1.  **Install dependencies:**

    ```bash
    npm install
    ```

## Project Structure

Populo_Takehome_Test

    |--common-utils
            |--logging.js
            |--utils.js
    |--constans
            |--constants.js
    |--test-data
            |--testData.json
    |--tests
            |--tectcase.spec.js
    |--.github
            |--workflows
                |--playwright.yml
    |--playwright-report
    |--test-results
    |--pacakage.json
    |--node_modules
    |--readme.md
    |--.gitignore

## Hwo to Run Tests in Local

- To run all the tests, execute the following command

```bash
npx playwright test
```

- To run sepcific tests, execute the following command

```bash
npx playwright test <spec name>
npx playwright test 5_DeleteUser_DELETE.spec.js
```

- To run sepcific test, execute the following command

```bash
npx playwright test create.spec.js
```

## Test Report

- Test Report can be found in playwright-report -> index.html
- Sample Report [Open](sampleReport.html)

## Running Test in GitHub

I have pushed this code in my Github. The test can be run directly in Github using github action

- Repo : [populo_project](https://github.com/SouvikShome11/populo_project)
- job link : [run test](https://github.com/SouvikShome11/populo_project/actions/workflows/playwright.yml)
- clone the repo in your github account
- Open the cloned repo -> Go to Actions -> All Workflow -> Playwright Test -> Run Workflow
- Post test completion report can be found in Latest Job run-> Actifact section

## 🚀 About Me

I'm a Souvik Shome. Senior SDET/QA/ Automation Tester.
