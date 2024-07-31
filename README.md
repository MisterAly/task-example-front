# To-Do List Application

## Overview

This is a to-do list application built using the principles of Atomic Design. The project is structured to ensure reusability and maintainability of components.

## Project Structure

- **Atoms**: Basic building blocks such as buttons, input fields, and checkboxes.
- **Molecules**: Combinations of atoms, like task items.
- **Organisms**: Groups of molecules, such as the task list.
- **Templates**: Structures of organisms and atoms, like the task template.
- **Pages**: Complete pages that use templates, like the to-do page.

## Features

- Add tasks
- Mark tasks as completed
- Remove tasks
- Persist tasks using local storage
- Edit task names
- Responsive design
- CSS animations and transitions

## Technologies

- React
- TypeScript
- CSS

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.

## Additional Features

- Local storage to persist tasks.
- Animations and transitions for better user experience.
- Linting and formatting with ESLint and Prettier.
- Unit tests with Jest.

## Atomic Design Choices

- **Atoms**: Simple components that can be reused across the application.
- **Molecules**: Combinations of atoms that form more complex components.
- **Organisms**: Groups of molecules that form distinct sections of the application.
- **Templates**: Structures that combine organisms and atoms to form the layout of the application.
- **Pages**: Complete pages that use templates to display the full application.
