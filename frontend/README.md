This is the frontend component of the project. It is responsible for the Chrome extension user interface and interaction. It is built with React, TypeScript, and other supporting libraries.

## Getting Started

### Prerequisites

Before running the frontend, make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the frontend directory.

```bash
cd frontend
```

3. Install the dependencies.

```bash
npm install
```

### Running the Development Server

```bash
npm run start
```

The development server will run on `http://localhost:3001` by default.

### Building the Extension

```bash
npm run build
```

This will generate a `dist` directory containing the build files for the Chrome extension.

### Loading the Extension

1. Open Google Chrome.
2. Go to `chrome://extensions`.
3. Enable Developer mode.
4. Click on "Load unpacked" and select the `dist` directory generated from the previous step.

The Chrome extension will be loaded and ready to use.

## Testing

To run the tests for the frontend, use the following command:

```bash
npm run test
```
