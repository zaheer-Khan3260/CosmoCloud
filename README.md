# CosmoCloud

CosmoCloud is a project leveraging the power of Vite + React, Tailwind CSS, and React Router DOM to manage employee data seamlessly. This project integrates with CosmoCloud to provide a comprehensive solution for handling various aspects of employee management.

## Features

- **Frontend**: Built with Vite + React for a fast and modern user experience.
- **Styling**: Utilizes Tailwind CSS for efficient and responsive design.
- **Routing**: React Router DOM is used for seamless navigation.
- **Backend Integration**: Integrates with CosmoCloud to handle employee data.
- **User Interface**: Follows UX/UI design principles for an intuitive interface.

## Installation

### Prerequisites

- Node.js and npm installed
- Git installed
- CosmoCloud account and API keys

### Steps

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/zaheer-Khan3260/CosmoCloud.git
    cd CosmoCloud
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add your CosmoCloud project and environment IDs.
    ```sh
    VITE_PROJECT_ID=your_project_id
    VITE_ENVIRONMENT_ID=your_environment_id
    ```

4. **Start the Development Server**:
    ```sh
    npm run dev
    ```

## Usage

- **Running the Application**: Use `npm run dev` to start the development server.
- **Building for Production**: Use `npm run build` to create a production build.

## Employee Management

This application provides a user-friendly interface for managing employee details including name, address, contact method, and contact value. It supports CRUD operations with seamless integration to the CosmoCloud backend.

### API Integration

- **Create Employee**: Adds a new employee to the database.
- **Read Employee**: Retrieves employee details.
- **Update Employee**: Modifies existing employee details.
- **Delete Employee**: Removes an employee from the database.

