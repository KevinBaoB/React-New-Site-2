import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom';


function ArticleTeaser({id, title, date }) {
  
  return (
    <Container>  
        <Row>
            <Col>
                <h2> 
                  <Link to={`/articles/${id + 1}`} >{title}</Link>
                </h2>
            </Col>
            <Col>
                <p>
                    {date}
                </p>
            </Col>
            <hr/>
        </Row>
    </Container>
    
  )
}

export default ArticleTeaser;
