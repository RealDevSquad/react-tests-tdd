# React Learning Project with TDD 🧪

<!-- TODO [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ankush/Real-Dev-Squad/react-tests-tdd/blob/main/CONTRIBUTING.md) -->
[![Volta](https://img.shields.io/badge/Volta-Node.js%20version%20manager-blue)](https://volta.sh)
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D8.0.0-orange.svg)](https://pnpm.io)

## 📝 Overview

This project is designed to help developers learn and practice Test-Driven Development (TDD) with React. It provides a structured approach to building React components while following TDD principles. The project includes pre-written tests that you'll need to make pass by implementing the required functionality.

Your task is to create a simple React app that has working tests.

Clone this repo and submit PRs to your fork following the Git Flow conventions; we will not merge direct PRs to this repository.

## 🎯 Learning Objectives

- Understanding and implementing TDD in React
- Writing and running tests using Vitest and React Testing Library
- Building controlled components
- Implementing form validation
- Creating multi-step forms
- Understanding component composition

## Requirements

> **Note**
> This project uses volta, so please [set it up](https://docs.volta.sh/guide/getting-started). Also, read: [Why use Volta?](https://docs.volta.sh/guide/#why-volta)

Ensure that you follow the TDD approach to writing your code.
The tests are available and marked as `skip`. Enable your tests by removing the `.skip` from test or describe.

Ensure that your milestone tests are passing before submitting the PR

## 📋 Project Structure

```text
src/
├── components/     # React components
├── **/*.spec.jsx   # Spec test files
└── **/*.test.jsx   # Test files
```

## Running the code

1. Install dependencies:

  ```bash
  pnpm i
  ```

2. Run tests in watch mode:

  To enable watch mode tests, remove `.skip` from your tests and run:

  ```bash
  pnpm test
  ```

3. Optional: Run tests with UI:

  ```bash
  pnpm test:ui
  ```

## 🎯 Milestones

### Tall

- [ ] Create a controlled input component
    - Implement input validation
    - Handle user interactions
- [ ] Build a sign-up form composed component
    - Compose using the input components
    - Implement form validation
- [ ] Add Next button functionality
    - Enable/disable based on validation
    - Handle form submission

### Grande

- [ ] Create an OTP component
    - Implement OTP input fields
    - Add validation
- [ ] Implement multi-step form flow
    - Add navigation between steps
    - Handle state management

#### Milestone vocabulary

Starbucks has the following denotations for sizes:
```
Tall - Small glass
Grande - Regular glass
Venti - Big mug
Trenta - Biggest bucket
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git switch -c feature/<feature-name>`)
3. Follow the [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow
4. Commit your changes (`git commit -m 'Adds some amazing feature'`)
5. Push to the branch
6. Open a Pull Request in your own repo

## 📚 Learning Resources

### Video Tutorials

- Simple easy to understand video on (watch from 5:46:14): [TDD with React by Eve Porcello](https://youtu.be/K8MF3aDg-bM?t=20774)
- [Testing React by Kent C. Dodds](https://youtu.be/kCR3JAR7CHE)

### Documentation

- [React Testing Documentation](https://reactjs.org/docs/testing.html)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Additional Resources

- [Eve's TDD with React Resources](https://github.com/eveporcello/women-of-react-2020)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project.
- Special thanks to Eve Porcello and Kent C. Dodds for their excellent testing resources.
