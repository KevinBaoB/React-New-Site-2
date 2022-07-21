import { useState } from "react";
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser";
import Article from "../Article/Article";

function ArticleGroup ({article}) {

  const [showArticle, setShowArticle] = useState(false);

  const handleTitleClick = (article_id) => { 
    console.log(article_id) 
    setShowArticle(!showArticle)
  }

    return ( 
        <div>
                <ArticleTeaser
                    id={article.id}
                    title={article.title}
                    date={article.created_date}
                    handleTitleClick={handleTitleClick}
                />
                <hr />
                {showArticle ? <Article {...article}/>: '' }
            
        </div>
     )
}
 
export default ArticleGroup;