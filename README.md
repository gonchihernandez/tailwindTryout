![reactjs-vite-tailwindcss-boilerplate](https://user-images.githubusercontent.com/16243531/217138979-b854309c-4742-4275-a705-f9fec5158217.jpg)

# React Tailwindcss Boilerplate build with Vite

This is a boilerplate build with Vite, React 18, TypeScript, Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

# Feature Architecture

## Introduction

This document outlines the feature architecture for our React application. Feature architecture is an approach to organizing code around specific functionalities or user requirements. By structuring our codebase into features, we aim to improve maintainability, scalability, and team collaboration.

## Folder Structure

src/
  |- common/
  |    |- components/
  |    |- services/
  |    |- utilities/
  |
  |- features/
  |    |- Feature1/
  |    |     |- components/
  |    |     |- services/
  |    |     |- utilities/
  |    |
  |    |- Feature2/
  |    |     |- components/
  |    |     |- services/
  |    |     |- utilities/
  |    |
  |    |- ...
  |
  |- App.tsx
  |- index.tsx
  |- setupTests.ts


- **common**: This directory contains shared components, services, and utilities that can be used across different features. Keeping common elements separate helps avoid code duplication and improves reusability.

- **features**: Each feature has its own directory. Inside each feature directory, we have subdirectories for components, services, and utilities specific to that feature. This helps in organizing the code related to each feature and isolates the feature's logic.

- **App.tsx**: The main entry point of our application where we define the overall layout and routing.

- **index.tsx**: The entry point to our application where we render the root component and mount it to the DOM.

## Components

Components are the building blocks of our UI. They are organized into two main categories:

- **Common Components**: Located in the `common/components` directory, these are reusable components that can be used across different features. Examples include buttons, form inputs, alerts, etc.

- **Feature Components**: Located in the `features/FeatureName/components` directory, these are components specific to a particular feature. They represent the UI elements of that feature and are used to compose the user interface.

## Utilities

Utilities are helper functions and reusable utility modules that are used across the application. They are categorized as:

- **Common Utilities**: Located in the `common/utilities` directory, these are utility functions that can be used across different features. Examples include date formatting functions, string manipulation, etc.

- **Feature Utilities**: Located in the `features/FeatureName/utilities` directory, these utilities are specific to a particular feature and support the feature's unique requirements.

## Conclusion

By following this feature architecture, we aim to create a maintainable, scalable, and modular React application. Each feature is organized into its own directory, with components, services, and utilities specific to that feature. Reusable elements are kept in the common directory, ensuring code reusability and avoiding code duplication.

This architecture enables better team collaboration, as developers can focus on specific features independently and reduce the risk of conflicts. Additionally, it facilitates code sharing and promotes best practices throughout the application.


## Getting Started

### Install

clone the project the project.

```bash
git clone https://github.com/gonchihernandez/tailwindTryout
```

Access the project directory.

```bash
cd Gonzalo_Hernandez_challenge_react
```

Install dependencies.

```bash
yarn install
```

Serve with hot reload at <http://localhost:5173>.

```bash
yarn dev
```

### Lint

```bash
yarn lint
```

### Typecheck

```bash
yarn typecheck
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
```

View and interact with your tests via UI.

```bash
yarn test:ui
```

## License

This project is licensed under the MIT License.
