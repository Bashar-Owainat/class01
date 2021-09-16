import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeastModal from './BeastModal';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beastName: '',
            description: '',
            img: '',
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

        console.log()
        this.setState({

            beastName: data.title,
            description: data.description,
            img: data.image_url,
            displayModal: true
        })
    }

    render() {

        return (
            <>

              
                    <BeastModal
                        display={this.state.displayModal}
                        handleClose={this.handleClose}
                        beastTitle={this.state.beastName}
                        image_url={this.state.img}
                        description={this.state.description}
                    />
              
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