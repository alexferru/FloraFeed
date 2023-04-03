# FloraFeed 🌿📷

FloraFeed is a user-generated content platform that allows users to upload photos and information about plants they've found in their area to a centralized plant database. The platform includes features such as geolocation, search functionality, and user profiles.

## Features

- **User-Generated Content:** 📷 Users can upload photos of plants they've found in their area, along with the common name, scientific name, and a brief description of the plant.

- **Geolocation:** 🌎 The platform uses the geolocation feature of the user's device to tag the location of the plant on a map, allowing other users to see the location of the plant and how far it is from them.

- **Plant Information:** 🌿 The platform displays the information provided by the user along with the photo of the plant, allowing other users to view the plant's location and information to help them identify it.

- **User Profile:** 👤 Users can create a profile where they can view their contributions, such as the plants they've added to the database, and see their location on the map.

- **Mobile-Friendly Design:** 📱 The web app is mobile-friendly, allowing users to easily add plants to the database and search for plants on the go.

## Screenshots

### Splash Screen
![FloraFeed Splash Screen](/client/public/assets/Splash.jpeg)

### Login Page
![FloraFeed Login Page](/client/public/assets/Login.jpeg)

### Home Page
![FloraFeed Homepage](/client/public/assets/HomePage.jpeg)
![FloraFeed Homepage2](/client/public/assets/HomePage2.jpeg)

### Submit a Post
![FloraFeed Submit Page](/client/public/assets/SubmitPost.png)

### Discover Page
![FloraFeed Discover Page](/client/public/assets/Discover.jpeg)

### User Profile Page
![FloraFeed User Profile Page](/client/public/assets/UserProfile.jpeg)

## Technologies Used

- JavaScript
- HTML
- CSS
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A routing library for React.
- [Material-UI](https://mui.com/) - A React UI framework with a set of ready-to-use components.
- [Google Maps API](https://developers.google.com/maps) - A set of APIs provided by Google that allows for the integration of Google Maps.
- [Firebase](https://firebase.google.com/) - A cloud-based platform for building mobile and web applications.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
- [Exifr](https://github.com/MikeKovarik/exifr) - A JavaScript library for parsing image metadata.
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- [Jest](https://jestjs.io/) - A JavaScript testing framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - A simple and complete React testing utility.
- [Web Vitals](https://web.dev/vitals/) - A set of metrics that aim to capture the quality of user experience on the web.

## Installation and Usage

To install and run FloraFeed, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Create a `.env` file in the root directory of the project based on the provided `.env.example` file, and replace the placeholder values with your own API keys and credentials.
4. Start the development server using `npm start`.
5. Access the web app in your browser at `http://localhost:3000`.

### Environment Variables

FloraFeed uses environment variables to store sensitive configuration information such as API keys and authentication credentials that should not be checked into version control. A `.env.example` file has been provided as a template for the required environment variables. To configure your environment variables, copy the contents of `.env.example` into a new file called `.env` in the root directory of the
