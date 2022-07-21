import Article from '../components/Article/Article.jsx'
import News from '../data/news.json';
import {useParams} from 'react-router-dom';


function ArticlePage({getArticleByID}) {

  let {article_id} = useParams()
  const article = getArticleByID(article_id)

  return (
    <div>
      <Article {...article}/>
    </div>
  )
}

export default ArticlePage;
