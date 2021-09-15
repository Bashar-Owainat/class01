import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            votes: 0,
            viweModal: false,
            beastName: '',
        }

    }
    
    voting = () => {
        this.setState({
            votes: this.state.votes +1
        })
    }

    openModal = () => {
        this.setState({
            beastName: this.props.title
        })
        this.props.close()
    }
    
    closeModal = () => {
        this.setState({
            viweModal: false
        })
        this.props.display()
    }

    render(){
        return(
            <div>
               
                            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description} 
                 ( votes : {this.state.votes})
                </Card.Text>
                <Button onClick={this.voting} variant="primary"> vote</Button>
            </Card.Body>
            </Card>

           </div>
            )

    }
}

export default HornedBeast;