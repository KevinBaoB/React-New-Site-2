import ArticleList from '../components/ArticleList/ArticleList.jsx'
// import News from '../data/news.json';

function HomePage({multipleArticles}) {
  
  // const handleTitleClick = (article_id) => { 
  //   console.log(article_id) 
  //   setShowArticle(!showArticle)
  // }

  return (
    <div>
      <h1>Home</h1>
      <ArticleList 
        multipleArticles={multipleArticles} 
        // handleTitleClick={handleTitleClick} 
      />
    </div>
  );
}

export default HomePage;
