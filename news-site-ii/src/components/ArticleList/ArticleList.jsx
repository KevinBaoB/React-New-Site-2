import ArticleGroup from "../ArticleGroup/ArticleGroup"
import ArticleTeaser from "../ArticleTeaser/ArticleTeaser"
import { useState } from 'react';

 
function ArticleList({multipleArticles}) {

  const [showArticle, setShowArticle] = useState(false);

    return (
        <div>
        {multipleArticles.map((article) => (
            <ArticleTeaser key={article.id} {...article} />
   
           ))
         }
         </div>
    )
    
}

export default ArticleList