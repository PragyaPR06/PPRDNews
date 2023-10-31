import { useState, useEffect} from 'react';
import './Content.scss';
import VideoPlayer from '../Components/Videoplayer/Videoplayer';
import NewsCard from '../Components/Header/NewsCard';
import logo from './logo.png';

const API_KEY = "5643f86cadb046fba67d7fbfaf974c81";
const url = "https://newsapi.org/v2/everything?q=";

function Sports() {
  const [articles, setArticles] = useState([]);
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews("Sports");
  }, []);

  async function fetchNews(query) {
    setLoading(true);
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
    setLoading(false);
  }

  function onNavItemClick(id) {
    fetchNews(id);
    setCurSelectedNav(id);
  }

  function handleSearch() {
    if (searchText) {
      fetchNews(searchText);
      setCurSelectedNav(null);
    }
  }

  function handleClick(url) {
    window.open(url, '_blank');
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="App">
      <VideoPlayer />
      <nav className='Navbar'>
        <div className="container">
          <a href="../"className="company-logo">
            <img src={logo} alt="company logo" />
          </a>
          <div className="nav-links">
            <ul className="nav-content">
            <li
                className={`hover-link nav-item ${curSelectedNav === "Culture" ? "active" : ""}`}
                id="culture"
                onClick={() => onNavItemClick('culture')}
              >
                Culture
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "finance" ? "active" : ""}`}
                id="finance"
                onClick={() => onNavItemClick('finance')}
              >
                Finance
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "" ? "active" : ""}`}
                id="sports"
                onClick={() => onNavItemClick('sports')}
              >
                Sports
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "" ? "active" : ""}`}
                id="electronics"
                onClick={() => onNavItemClick('electronics')}
              >
                Electronics
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "" ? "active" : ""}`}
                id="politics"
                onClick={() => onNavItemClick('politics')}
              >
                Politics
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <input
              id="search-text"
              type="text"
              className="news-input"
              placeholder="Search Here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleEnterKey}
            />
            <button
              id="search-button"
              className="search-button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container" id="cards-container">
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            articles && articles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                className="news-link"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(article.url);
                }}
              >
                <NewsCard article={article} />
              </a>
            ))
          )}
        </div>
      </main>

      <footer>
        copyright@PPRD NEWS
      </footer>
    </div>
  );
}


export default Sports;
