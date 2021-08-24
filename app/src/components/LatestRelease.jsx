import {Row, Card, Col, Button} from 'react-bootstrap'
import data from './data/scifi.json'

const LatestRelease = () =>(
    <Row xs={1} md={3} xl={5} className="mx-2">
        {
            data.map(book => (
                <Col key={book.asin} className="mb-3">
                <Card className=" mx-1 mb-1 h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="priceText">
                    £{book.price}
                </Card.Text>
                
                </Card.Body>
                <Card.Footer>
                <Button className="purchaseButton" variant="success"><span className="iconify mr-2 mb-1" data-icon="fa-solid:shopping-basket" data-width="15" data-height="15"></span>Purchase</Button>{' '}
                <small className="text-muted d-block">#{book.asin}</small>
                </Card.Footer>
            </Card>
            </Col>
            ))
        }
       
</Row>
)

export default LatestRelease