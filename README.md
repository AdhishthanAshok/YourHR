# YourHR - Job Search Service

YourHR is a web application designed to help job seekers find ideal job roles based on their qualifications and preferences. This project involves creating a responsive website where users can sign up and submit their resumes.

## Project Overview

YourHR allows job seekers to:
- Sign up with their personal information.
- Upload their resumes in PDF format.
- View a confirmation of successful sign-up.

The application includes a basic UI and is implemented using a full-stack approach with a responsive design.

## Technologies Used

### Frontend
- **React.js** for building user interfaces.
- **Tailwind CSS** for styling.

### Backend
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** for database storage.
- **Cloudinary** for storing and managing resume files.

### Others
- **JWT (JSON Web Tokens)** for user authentication.
- **Multer** for handling file uploads.
- **CORS** for cross-origin resource sharing.

## Features

- **Sign Up Form**: Collects user information and allows file upload.
- **Resume Upload**: Users can upload their resumes, which are securely stored in Cloudinary.
- **User Authentication**: Provides authentication via JWT.

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud) for database storage.
- Cloudinary account for file storage.

### Cloning the Repository
1. Clone the repository to your local machine:
    ```bash
    https://github.com/AdhishthanAshok/YourHR.git
    ```
2. Navigate to the project directory:
    ```bash
    cd YourHR
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the backend directory and add your environment variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    DB_NAME=your_database_name
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    JWT_SECRET=your_jwt_secret
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the frontend directory and add your API base URL:
    ```env
    REACT_APP_API_BASE_URL=https://your-api-url
    ```
4. Start the frontend development server:
    ```bash
    npm start
    ```

## Running the Application

- **Backend**: Ensure the backend server is running. It will listen on [http://localhost:4000](http://localhost:4000).
- **Frontend**: Ensure the frontend development server is running. It will be accessible at [http://localhost:3000](http://localhost:3000). Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

The application can be deployed to a free hosting platform such as Vercel for the frontend and Heroku for the backend. Make sure to update the environment variables and API URLs accordingly for deployment.

## Documentation

For detailed API documentation and architectural overview, refer to the following sections in the repository:
- `/backend/README.md` - Backend setup and API endpoints.
- `/frontend/README.md` - Frontend setup and components.

## Contribution

Feel free to fork the repository and contribute by creating pull requests. For any issues or feature requests, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, you can reach out to:
- **Adhishthan Ashok** - [adhishthanashok@gmail.com](mailto:adhishthanashok@gmail.com)
- **Repository URL** - [GitHub Repository](https://github.com/AdhishthanAshok/YourHR)

Thank you to !

*Team Kudosware*
