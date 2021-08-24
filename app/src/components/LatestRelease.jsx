import {Row, Card, Col, Button} from 'react-bootstrap'
import data from './data/scifi.json'

const LatestRelease = () =>(
    <Row xs={1} md={3} xl={5} className="g-4 mx-2">
        {
            data.map(book => (
                <Col className="mb-3">
                <Card className=" mx-1 mb-1 h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    £{book.price}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{book.asin}</small>
                </Card.Footer>
            </Card>
            </Col>
            ))
        }
       
</Row>
)

export default LatestRelease