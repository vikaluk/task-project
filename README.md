# Task Project – Playwright Testing

## Setup

1. **Install Node.js**  
   Make sure you have [Node.js](https://nodejs.org/) (v16 or newer) installed.

2. **Install dependencies**  
   In your project root, run:
   ```sh
   npm install
   ```

3. **Install Playwright browsers**  
   Playwright needs to download browser binaries:
   ```sh
   npx playwright install
   ```

## Environment Variables

- If you need to set environment-specific variables (like the base URL), create a `.env` file in the root of your project:
  ```
  BASE_URL=https://your-app-url.com
  ```
- The project uses `dotenv` to securely load environment variables in `playwright.config.ts`.

## Running the Tests

- **Run all tests:**
  ```sh
  npx playwright test
  ```

- **Run tests with UI (headed mode):**
  ```sh
  npx playwright test --headed
  ```

- **View HTML test report:**
  After running tests, open the report:
  ```sh
  npx playwright show-report
  ```

## Code Quality

- **Linting:**  
  This project uses [ESLint](https://eslint.org/) for code quality and [Prettier](https://prettier.io/) for consistent formatting.
- **Run linting:**
  ```sh
  npx eslint .
  ```
- **Run formatting:**
  ```sh
  npx prettier --write .
  ```
- Ensure all files are properly linted and formatted before submission.

## File Structure

- `tests/example.spec.ts` – Contains Playwright test cases.
- `playwright.config.ts` – Playwright configuration file.

## Notes

- The tests use the base URL from the `.env` file. If not set, update your `.env` or `playwright.config.ts`.
- All selectors are based on the current DOM structure. If the UI changes, you may need to update selectors in the tests.

## More Info

- [Playwright Docs](https://playwright.dev/docs/intro)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [Prettier Docs](https://prettier.io/docs/en/index.html)