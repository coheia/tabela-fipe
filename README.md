## Readme

This project is a React application built with TypeScript. It uses Material-UI for the user interface components and Cypress for end-to-end testing.

![ezgif-3-e753533829](https://github.com/coheia/tabela-fipe/assets/5176595/85248aa9-66fa-45f3-b2ed-20c9bd7b4265)

Table of Contents

- [Readme](#readme)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
  - [Cypress Tests](#cypress-tests)

Prerequisites
-------------

Before you begin, ensure you have installed [Node.js](https://nodejs.org/) (v20 or later).

Installation
------------

Clone the repository:

```bash
git clone https://github.com/coheia/tabela-fipe.git
cd tabela-fipe
```

Install dependencies:

```bash
npm install
```

Running the Application
-----------------------

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

Running Tests
-------------

### Cypress Tests

To run Cypress tests, first ensure the application is running.

In another terminal, run Cypress:

```bash
npm run cypress:web
```

This will open the Cypress Test Runner. You can also run Cypress tests in headless mode:

```bash
npm run cypress:headless
```
