import'./NewsCard.scss';
 function NewsCard({article}) {
    return (
      <div className="card">
        <div className="card-header">
          <img src={article.urlToImage || 'https://via.placeholder.com/400x200'} alt="news-image" id="news-img" />
        </div>
        <div className="card-content">
          <h3 id="news-title">{`${article.title}...click to read more` || 'Title not available'}</h3>
          <h6 className="news-source" id="news-source">{article.source ? `${article.source.name} · ${new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}` : 'Source and Date not available'}</h6>
          <p className="news-desc" id="news-desc">{`${article.description}...click to READ MORE`|| 'Description not available'}</p>
        </div>
      </div>
    );
  }
  export default NewsCard;