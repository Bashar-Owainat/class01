import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeastModal from './BeastModal';
//import Form from './Form';
import Form from 'react-bootstrap/Form'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beastName: '',
            description: '',
            img: '',
            horns:'',
            filteredSearch: '',
            displayModal: false
        }
    }

    handleClose = () => {
        this.setState({
            displayModal: false
        })
    }

    fillData = (title) => {


        let data = HornedData.find(e => e.title === title);

        console.log(data.image_url)
        this.setState({

            beastName: data.title,
            description: data.description,
            img: data.image_url,
            horns:data.horns,
            displayModal: true
        })
    }
     
    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({
        filteredSearch: e.target.value
        })
        
        }

      
        // filteredHorns = () => {
        //     return this.state.horns.filter(horn => {
        //         return horn.filteredSearch;
        //     })
        // }

    render() {

        return (
            <>
             <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1"  >One</option>
                <option value="2" >Two</option>
                <option value="3">Three</option>
                <option value="100" >Wow...</option>
                
            </Form.Select>
    
        

                {this.state.displayModal &&
                    <BeastModal
                        display={this.state.displayModal}
                        handleClose={this.handleClose}
                        beastTitle={this.state.beastName}
                        image_url={this.state.img}
                        description={this.state.description}
                        horns={this.state.horns}
                        handleSearch={this.handleSearch}
                    />
                }
                {


                    HornedData.map((element, index) => {
                        return (
                            <HornedBeast
                                image_url={element.image_url}
                                title={element.title}
                                description={element.title}
                                keyword={element.keyword}
                                horns={element.horns}
                                key={index}
                                fillData={this.fillData}
                                
                            />
                        )
                    })



                }


            </>




        )

    }
}

export default Main;