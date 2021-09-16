import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
           
        }

    }

    voting = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }
   
     handleSearch = () => {
        this.props.handleSearch(this.props.e)
     }   

    fillData = () => {
        this.props.fillData(this.props.title)
    }

    render() {
        return (
            <div>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.fillData} onChange={this.handleSearch} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description} <br />
                            ( votes : {this.state.votes}) <br />
                                    (horns : {this.props.horns})
                        </Card.Text>
                        <Button onClick={this.voting} variant="primary"> vote</Button>
                    </Card.Body>
                </Card>

            </div>
        )

    }
}

export default HornedBeast;