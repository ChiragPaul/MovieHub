
# MovieHub 🎬

A modern, responsive movie discovery application built with React. Explore popular movies, search for specific titles, and manage your personal favorites.

---

## 🌟 Features

- **Movie Discovery**: Browse popular movies from The Movie Database (TMDb)
- **Search**: Real-time movie search by title
- **Favorites Management**: Add/remove movies from a favorites list
- **Persistent Storage**: Favorites saved in localStorage
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Clean and intuitive interface

---

## 🚀 Demo

![MovieHub Demo](demo.gif)

---

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0  
- **Routing**: React Router DOM 7.6.3  
- **Build Tool**: Vite 7.0.0  
- **Styling**: CSS3  
- **State Management**: React Context API  
- **API**: The Movie Database (TMDb)  
- **Storage**: Browser localStorage  

---

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

````

---

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MovieHub.git
   cd MovieHub
``

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

   * Sign up at [TMDb](https://www.themoviedb.org/settings/api) to get your API key.
   * Add the API key in `src/services/api.js` or use environment variables.

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Go to: [http://localhost:5173](http://localhost:5173)

---

## 📖 Usage

* **Browse**: View trending movies on the homepage
* **Search**: Use the top search bar to find movies
* **Add to Favorites**: Click the heart icon on a movie card
* **View Favorites**: Navigate to the "Favorites" page
* **Remove from Favorites**: Click the heart again to remove

---

## 🔌 API Integration

MovieHub uses [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

### Endpoints Used

* `GET /movie/popular` — Fetches trending/popular movies
* `GET /search/movie` — Searches movies by title

---

## 🎨 Customization

### Styling

* Main styles are in `src/css/`
* Each component has optional styles
* Customize theme with CSS variables

### Extend Functionality

* Add components in `src/components/`
* Add new pages in `src/pages/`
* Use `MovieContext` to manage global state

---

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

* **Vercel**: Connect GitHub repo for auto-deployment
* **Netlify**: Upload `dist/` folder or connect repo
* **GitHub Pages**: Use GitHub Actions or gh-pages

---

## 📱 Responsive Design

Works seamlessly across:

* Desktop
* Tablets
* Mobile devices

---

## 🔒 Environment Variables

Use an `.env` file for sensitive info in production:

```
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 🤝 Contributing

1. Fork this repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📝 License

Licensed under the [MIT License](LICENSE).

---

## 🐛 Known Issues

* No major issues reported. Submit any bugs via [GitHub Issues](https://github.com/yourusername/MovieHub/issues).

---

## 🔮 Future Enhancements

* [ ] Movie details page (cast, crew, synopsis)
* [ ] User authentication and cloud sync
* [ ] Personalized movie recommendations
* [ ] Filtering by genre, year, and rating
* [ ] Movie trailer integration
* [ ] Light/Dark mode toggle

---

## 📞 Support

If you run into problems:

* Check [GitHub Issues](https://github.com/yourusername/MovieHub/issues)
* Open a new issue with steps to reproduce and screenshots

---

## 🙏 Acknowledgments

* [TMDb](https://www.themoviedb.org/) for the API
* [React](https://reactjs.org/) for the frontend framework
* [Vite](https://vitejs.dev/) for the build tool

---

**Made with ❤️ and React**
