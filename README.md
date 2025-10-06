# MovieHub 🎬

A modern, responsive movie discovery application built with React that allows users to explore popular movies, search for specific films, and manage their favorite movies list.

## 🌟 Features

- **Movie Discovery**: Browse through popular movies from The Movie Database (TMDb)
- **Movie Search**: Search for movies by title with real-time results
- **Favorites Management**: Add and remove movies from your personal favorites list
- **Persistent Storage**: Favorites are saved locally using localStorage
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface

## 🚀 Demo

<!-- Add a demo GIF if available -->

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.6.3
- **Build Tool**: Vite 7.0.0
- **Styling**: CSS3 with custom stylesheets
- **State Management**: React Context API
- **API**: The Movie Database (TMDb) API
- **Local Storage**: Browser localStorage for data persistence

## 📁 Project Structure

```
MovieHub/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.jsx
│   │   │   └── NavBar.jsx
│   │   ├── contexts/
│   │   │   └── MovieContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Favorites.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── css/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/MovieHub.git
   cd MovieHub
   ```

2. **Navigate to the frontend directory**

   ```bash
   cd frontend
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up API Key**

   - Sign up at [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)
   - Get your API key
   - Update the API key in `src/services/api.js`

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📖 Usage

1. **Browse Movies**: The home page displays popular movies from TMDb
2. **Search Movies**: Use the search bar to find specific movies
3. **Add to Favorites**: Click the heart icon on any movie card to add it to favorites
4. **View Favorites**: Navigate to the favorites page to see your saved movies
5. **Remove from Favorites**: Click the heart icon again to remove movies from favorites

## 🔌 API Integration

This project uses The Movie Database (TMDb) API to fetch movie data. The API provides:

- Popular movies endpoint
- Movie search functionality
- High-quality movie posters and details

**API Endpoints Used:**

- `GET /movie/popular` - Fetch popular movies
- `GET /search/movie` - Search movies by query

## 🎨 Customization

### Styling

- Main styles are located in `src/css/`
- Each component has its own CSS file
- Modify CSS variables for theme customization

### Adding New Features

- Add new pages in `src/pages/`
- Create new components in `src/components/`
- Extend the MovieContext for additional state management

## 🚀 Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Deployment Options

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder to Netlify
- **GitHub Pages**: Use GitHub Actions to deploy to GitHub Pages

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile phones

## 🔒 Environment Variables

For production deployment, consider using environment variables for sensitive data:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- None at the moment. Please report any bugs you encounter.

## 🔮 Future Enhancements

- [ ] Movie details page with cast and crew information
- [ ] User authentication and cloud sync for favorites
- [ ] Movie recommendations based on preferences
- [ ] Advanced filtering options (genre, year, rating)
- [ ] Movie trailers integration
- [ ] Dark/Light theme toggle

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/MovieHub/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about the issue

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

**Made with ❤️ and React**

_Don't forget to ⭐ this repository if you found it helpful!_
