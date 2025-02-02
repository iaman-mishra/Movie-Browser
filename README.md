# Movie Browser

## Overview
The Movie Browser is a web application designed to provide users with an intuitive interface for searching and exploring movies. Utilizing the TMDB API, this application allows users to discover a wide range of films, view detailed information, and manage their favorite movies.

## Key Features
- **Dynamic Movie Search**: Users can search for movies by title, with results updating in real-time as they type.
- **Infinite Scrolling**: The application supports infinite scrolling to seamlessly display large sets of search results without page reloads.
- **Movie Details**: Each movie entry includes essential information such as the title, poster image, and release year.
- **Advanced Filtering**: Users can filter movies based on various criteria, including genre and release year (under development).
- **Favorites Management**: Users can save their favorite movies locally, enhancing their browsing experience (under development).
- **Accessibility and SEO**: The application is built with accessibility best practices in mind and is optimized for search engines.

## Technologies Used
- **React**: A powerful JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides a fast development environment.
- **TMDB API**: A public API that supplies movie data for the application.

## Installation Instructions
To set up the Movie Browser on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/iaman-mishra/Movie-Browser.git
   cd Movie-Browser
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Configure the TMDB API:
   - Sign up at [TMDB](https://www.themoviedb.org/) to obtain your API key.
   - Create a `.env` file in the root directory and add your API key:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

## Usage
To start the development server, run:
```bash
npm run dev
```

To build the project for production, use:
```bash
npm run build
```

To preview the production build, execute:
```bash
npm run preview
```

## Conclusion
The Movie Browser project aims to deliver a seamless movie browsing experience, leveraging modern web technologies and best practices in development. Contributions and feedback are welcome!
