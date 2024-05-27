## Readme

This project is a React application with TypeScript, Material-UI, Context API and Cypress for end-to-end testing.

![ezgif-3-e753533829](https://github.com/coheia/tabela-fipe/assets/5176595/85248aa9-66fa-45f3-b2ed-20c9bd7b4265)

Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Create the .env File](#create-the-env-file)
- [Configure Environment Variables](#configure-environment-variables)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)

Prerequisites
-------------

Before you begin, ensure you have installed [Node.js](https://nodejs.org/) (v20 or later).

Installation
------------

Clone the repository:

```sh
git clone https://github.com/coheia/tabela-fipe.git
cd tabela-fipe
```

Install dependencies:

```sh
npm install
```

Create the .env File
--------------------

To configure the environment variables for your project, you need to create a `.env` file in the root directory of the project. Follow these steps:

1.  Locate the `.env-example` file in the root directory.
2.  Copy the contents of `.env-example` to a new file named `.env`.

You can do this using the command line:

```sh
cp .env-example .env
```

Alternatively, you can manually create a new file named `.env` and copy the contents of `.env-example` into it.

Configure Environment Variables
-------------------------------

Open the `.env` file in a text editor and update the environment variables as needed. The `.env-example` file contains placeholders for each variable that you need to set. Make sure to replace the placeholder values with the actual values required for your project.

Running the Application
-----------------------

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

Running Tests
-------------

### Cypress Tests

To run Cypress tests, first ensure the application is running.

In another terminal, run Cypress:

```sh
npm run cypress:web
```

This will open the Cypress Test Runner. You can also run Cypress tests in headless mode:

```sh
npm run cypress:headless
```

**Note:** It is recommended to run the tests with the built version of the application to ensure that they are tested in a production-like environment. To do this, first build the application and then serve it:

- Build the application:
```sh
npm run build
```

- Serve the built application:
```sh
npm start
```

- In another terminal, run the Cypress tests as described above.
This ensures that the tests are run against the production build of the application, providing a more accurate representation of how the application will behave in production.
