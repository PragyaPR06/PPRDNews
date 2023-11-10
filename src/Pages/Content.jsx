import { useState, useEffect } from 'react';
import './Content.scss';
import VideoPlayer from '../Components/Videoplayer/Videoplayer';
import NewsCard from '../Components/Header/NewsCard';
import logo from './logo.png';

const url = "https://saurav.tech/NewsAPI/top-headlines/category/";

function Content() {
  const [articles, setArticles] = useState([]);
  const [curSelectedNav, setCurSelectedNav] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews("general");
  }, []);


  async function fetchNews(query) {
    setLoading(true);
    const res = await fetch(`${url}${query}/in.json`);
    const data = await res.json();
    setArticles(data.articles);
    setLoading(false);
  }

  const filteredData = (data, searchText) => {
    const filtered = data.filter((item) => {
      if (searchText.trim() === "") return true;
      const lower = searchText.toLowerCase();
      const article = item?.title?.toLowerCase();
      return article?.includes(lower);
    });
    return filtered;
  }

  function onNavItemClick(id) {
    fetchNews(id);
    setCurSelectedNav(id); // styling using the active class
  }

  function handleSearch() {
    if(searchText){
      setCurSelectedNav(null);
      const filteredNews = filteredData(articles, searchText);
      setArticles(filteredNews);
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
          <a href="/" onClick={reload} className="company-logo">
            <img src={logo} alt="company logo" />
          </a>
          <div className="nav-links">
            <ul className="nav-content">
              <li
                className={`hover-link nav-item ${curSelectedNav === "business" ? "active" : ""}`}
                id="business"
                onClick={() => onNavItemClick('business')}
              >
                Business
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "technology" ? "active" : ""}`}
                id="technology"
                onClick={() => onNavItemClick('technology')}
              >
                Technology
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "sports" ? "active" : ""}`}
                id="sports"
                onClick={() => onNavItemClick('sports')}
              >
                Sports
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "entertainment" ? "active" : ""}`}
                id="entertainment"
                onClick={() => onNavItemClick('entertainment')}
              >
                Entertainment
              </li>
              <li
                className={`hover-link nav-item ${curSelectedNav === "health" ? "active" : ""}`}
                id="health"
                onClick={() => onNavItemClick('health')}
              >
                Health
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <input
              id="search-text"
              type="text"
              className="news-input"
              placeholder="Type here..."
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

function reload() {
  window.location.reload();
}

export default Content;
