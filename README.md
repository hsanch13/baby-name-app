# Getting Started with the Baby Name App

Welcome to the Baby Names App! This project is a simple React application that helps you explore, search, and add baby names. Whether you're expecting or just curious, this app provides a fun way to browse and manage potential baby names.

## Features

- Browse Baby Names: Explore a collection of baby names.
- Search Functionality: Filter names by typing in the search bar.
- Sort Options: Sort names by gender, popularity, or alphabetically.
- Add New Names: Submit your favorite baby names using a simple form.
- Responsive Design: Built with Semantic UI for a modern and responsive design.

### Installation

To run this project locally, follow these steps:

1. Clone the repository: git clone https://github.com/yourusername/baby-names-app.git

2. Navigate to the project directory: cd baby-names-app

3. Install the dependencies: npm install

4. Start your server: json-server --watch db.json

5. Start the development server in a new terminal: npm start. Type "y" for yes.

The app should now be running on http://localhost:3000.

### Usage

After installing and running the app, you can:

- Navigate to the home page to browse through baby names.
- Use the search bar to filter names.
- Sort the list using the provided buttons for alphabetical order, gender, and popularity.
- Add a new name by navigating to the "Add New Name" page and filling out the form.

### Components

This project is structured into the following components:

- App: The main component managing routes and state.
- WelcomePage: The landing page where users can browse and sort baby names.
- NameCollection: Displays a collection of name cards.
- NewNameForm: A form to add new baby names to the collection.
- NameCard: A card component that displays individual baby names.
- Search: A search component that filters names based on user input.

### Credits

- Semantic UI React: Used for styling and responsive design.
- React Router: Used for managing app routes.
- Baby Names Data: Data used in this app came from the United States Social Security Administration

If you find this project helpful, feel free to check out my [blog post](https://medium.com/@hayleysanchez/understanding-the-difference-between-filter-and-map-in-react-an-example-from-the-baby-names-app-c4a4700aa71e) where I discuss the development process in detail.
