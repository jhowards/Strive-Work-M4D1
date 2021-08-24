import {Jumbotron, Button} from 'react-bootstrap'


const Welcome = () =>{

    return(
            <Jumbotron className = "mt-3 welcomejumbo pt-3 pb-3">
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