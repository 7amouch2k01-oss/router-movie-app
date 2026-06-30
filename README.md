# Movie App

This project is a small React movie application built with Vite. It lets users browse a collection of movies, filter them by title and rating, add new movies, and open a details page for each one.

## How it works

- The app starts from the main entry point in the src folder and renders the home route.
- A shared movie context stores the movie list so different components can read and update it without passing props manually.
- The home page shows:
  - a form to add a new movie,
  - a search input to filter movies by title,
  - a rating filter to show only movies above a selected score,
  - a grid of movie cards.
- Each movie card includes a link to a details view where the user can see more information and a trailer.

## Main folders

- src/components: reusable UI components such as movie cards, search filters, and the add-movie form.
- src/context: the global movie state provider.
- src/data: the initial sample movie dataset.
- src/pages: the home page and the movie details page.

## Run the app locally

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the local URL shown in the terminal to view the app.
