import {Jumbotron, Button} from 'react-bootstrap'


const Welcome = () =>{

    return(
            <Jumbotron className = "mt-3 welcomejumbo">
            <h1>James's Book Shop</h1>
            <p>
                Welcome to my shop.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
            </Jumbotron>
    )
}

export default Welcome