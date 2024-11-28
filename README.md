# Dashboard Application

## Description

This project is a React application that includes a sidebar navigation and theming using Material-UI (MUI). The application supports both light and dark modes and includes various components such as a dashboard, settings, drag-and-drop functionality, and a text editor.

## Features

- **Sidebar Navigation**: A responsive sidebar that adapts to different screen sizes.
- **Theming**: Light and dark mode themes using MUI's `createTheme`.
- **Responsive Design**: Uses MUI's breakpoints to ensure the application is responsive.
- **Components**: Includes various components like Dashboard, Settings, Drag-and-Drop, and Text Editor.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: A popular React UI framework.
- **React Router**: For navigation between different pages.
- **NPM**: Node Package Manager for managing dependencies.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Blezix/DashboardLatest.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3.

## Project Structure

- `src/`: Contains the source code.
  - `index.js`: Entry point of the application.
  - `App.js`: Main application component.
  - `ThemeModeContext.js`: Context for managing theme mode.
  - `muiTheme.js`: Contains the theme configuration.
  - `components/`: Contains the various components used in the application.
    - `Sidebar.jsx`: Sidebar navigation component.
    - `DropFile.jsx`: Drag-and-drop file upload component.

## Theming

The project uses MUI's theming capabilities to support both light and dark modes. The themes are defined in `src/muiTheme.js`.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
