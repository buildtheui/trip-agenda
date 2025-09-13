# GEMINI.md

## Project Overview

This is a React-based web application that displays a 15-day Euro trip itinerary. The application is built with Vite, uses React Router for routing, and is styled with Tailwind CSS. The entire trip itinerary is hardcoded in `app/data/itinerary.ts`.

The application has the following features:

*   **Interactive Itinerary:** Displays a day-by-day calendar of the trip. Users can click on a day to see detailed information about activities, accommodation, transportation, and tips.
*   **Trip Summary:** Provides a comprehensive overview of the trip, including:
    *   Total duration
    *   Countries and cities visited
    *   Total budget (which adjusts based on the number of travelers)
    *   Time distribution per country
    *   Key transportation details
    *   Budget breakdown
*   **Weather Integration:** Fetches and displays real-time weather information for each day of the trip.
*   **Responsive Design:** The application is designed to work on different screen sizes.

## Building and Running

### Prerequisites

*   Node.js and npm installed.

### Installation

1.  Install the dependencies:

    ```bash
    npm install
    ```

### Development

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:4321`.

### Production

1.  Build the application for production:

    ```bash
    npm run build
    ```

2.  Start the production server:

    ```bash
    npm run start
    ```

## Development Conventions

*   **Code Style:** The project uses Prettier for code formatting, which is run automatically on commit.
*   **Type Checking:** The project uses TypeScript for static type checking. You can run the type checker with the following command:

    ```bash
    npm run typecheck
    ```

*   **Component Structure:** Components are located in the `app/components` directory. Each component has its own file and is written in TypeScript with JSX (`.tsx`).
*   **Routing:** The application uses React Router for routing. The routes are defined in `app/routes.ts`.
*   **Data:** All the data for the trip is stored in `app/data/itinerary.ts`.
*   **Styling:** The project uses Tailwind CSS for styling. The Tailwind configuration is in `tailwind.config.js`.
