This is the backend component of the project. It is responsible for handling API calls to OpenAI and processing the necessary data. It is built with NestJS and TypeScript.

## Getting Started

### Prerequisites

Before running the backend, make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB (running locally or accessible via a remote server)

### Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the backend directory.

```bash
cd backend
```

3. Install the dependencies.

```bash
npm install
```

### Configuration

1. Create a `.env` file in the backend directory.

```bash
touch .env
```

2. Add the following environment variables to the `.env` file:

```
OPENAI_API_KEY=<your-openai-api-key>
MONGODB_URI=<your-mongodb-uri>
```

Replace `<your-openai-api-key>` with your actual OpenAI API key.

Replace `<your-mongodb-uri>` with the URI of your MongoDB database.

### Running the Server

1. Start the MongoDB server.

```bash
mongod
```

2. Start the backend server.

```bash
npm run start
```

The backend server will run on `http://localhost:3000` by default.

## Testing

To run the tests for the backend, use the following command:

```bash
npm run test
```
