import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from'./HornedData.json';
import BeastModal from './BeastModal';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        beastName:'',
        displayModal: false
        }
    }

    beastName = () => {
        this.setState({
            beastName: this.props.title ,
            displayModal: true
        })
    }
    handleClose = () => {
        this.setState({
            displayModal: false
        })
    }
    render(){

        return(
             <div>
                 {
                     HornedData.map((element, index) => {
                         return (
                             <><HornedBeast
                                 image_url={element.image_url}
                                 title={element.title}
                                 description={element.title}
                                 keyword={element.keyword}
                                 horns={element.horns}
                                 key={index}
                                 display={this.beastname}
                                 Close={this.handleClose} /><Button variant='info' onClick={this.beastName}> show Modal </Button></>   
                                
                                 
                                 
                         )
                     })
                 }
           
              
           <BeastModal
           display={this.state.displayModal}
           handleClose={this.handleClose}
           beatTitle={this.state.beastName}/>
            
            
            </div>
        )

    }
}

export default Main;