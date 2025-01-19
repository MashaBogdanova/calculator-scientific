# Calculator

**Author:** Maria Bogdanova  
**GitHub Profile:** [Link to rprofile](https://github.com/MashaBogdanova)  
**Project GitHub Repository:** [Link to repository](https://github.com/MashaBogdanova/calculator-scientific)  
**Task documentation:** [Link to task](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view?pli=1)  

## Features
- Basic arithmetic operations: addition, subtraction, multiplication, division.
- Advanced operations: percentage, sign change, square, cube, x to the power of y, 10 to the power of x, 1 / x, square root, cube root, yth root, factorial.
- Memory operations: MC, M+, M-, MR.
- Theme toggle: light and dark modes.
- The application design incorporates the Command pattern.
- The application includes a comprehensive suite of tests to ensure functionality, reliability, and maintainability.

---

## Technologies Used
- **JavaScript**
- **TypeScript**
- **SCSS**
- **Webpack**
- **ESLint**
- **Prettier**
- **Husky**
- **Jest**

---

## Folder Structure
The code is organized in the `src` folder, with the following structure:

- **`src`**
  - **`index.ts`** and **`index.html`**: Core entry files for the application.
  - **`assets/`**: Includes png icons.
  - **`commands/`**: Contains TypeScript files - command interface and concrete commands.
  - **`config/`**: Includes TypeScript file with buttons configuration.
  - **`constants/`**: Includes TypeScript file with text constants.
  - **`core/`**: Contains TypeScript files - client, invoker and receiver.
  - **`styles/`**: Contains SCSS files for styling the application.
  - **`UI/`**: Contains TypeScript files with UI components.
  - **`utils/`**: Includes TypeScript utility files used throughout the app.
  - **`__tests__/`**: Includes TypeScript test files.

---

## Setup and Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:MashaBogdanova/calculator.git
   
2. Install dependencies:
   ```bash
   npm install
   
3. Build the project:
   ```bash 
   npm run build
   
4. Start the development server:
   ```bash
   npm run start

---

# Available Scripts

Below is a list of all scripts defined in the project and their purpose:

- **Build the project**  
Builds the application for production using Webpack. Outputs the optimized code into the `dist` folder.
   ```bash
   npm run build
  
- **Start the development server**  
Runs the application in development mode using Webpack Dev Server. Includes hot module reloading for easier development.
   ```bash
   npm run start
  
- **Lint the code**  
Analyzes all JavaScript and TypeScript files in the src folder for potential issues based on ESLint rules.
   ```bash
   npm run lint
  
- **Lint and fix issues automatically**  
Runs the ESLint linter and attempts to automatically fix issues in JavaScript and TypeScript files.
   ```bash
   npm run lint:fix
  
- **Format code**  
Formats all JavaScript, TypeScript, SCSS, and HTML files in the src folder using Prettier.
   ```bash
   npm run format
  
- **Prepare Git hooks**  
Sets up Husky to manage Git hooks, such as pre-commit or pre-push hooks, for ensuring code quality.
   ```bash
   npm run prepare
  
- **Run all test files**  
  Executes all test files in the project to ensure code functionality and correctness.
   ```bash
   npm run test
