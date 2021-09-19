import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeastModal from './BeastModal';
import Form from 'react-bootstrap/Form'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beastName: '',
            description: '',
            img: '',
            horns:'',
            filteredSearch: 0,
             data:HornedData,
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

     FilterResult = (num) => {
        
         let newArr = HornedData.filter( element =>{
            
             if(num === 0){
                 return element;
               
             }
             else if (element.horns === num ){
                 return true;
             }
             else {
                 return false;
             }
            
         })
        
         return newArr;
        
     }
    handleSearch = (e) => {
        
        this.setState({
        filteredSearch: e.target.value,
        data:this.FilterResult(Number(e.target.value))
        })
        
        }

      

    render() {

        return (
            <>
             <Form.Select aria-label="Default select example" onChange={this.handleSearch}>
                <option value="0">All</option>
                <option value="1"  >One</option>
                <option value="2" >Two</option>
                <option value="3">Three</option>
                <option value="100" >Wow...</option>
                
            </Form.Select>
    
        

              
                    <BeastModal
                        display={this.state.displayModal}
                        handleClose={this.handleClose}
                        beastTitle={this.state.beastName}
                        image_url={this.state.img}
                        description={this.state.description}
                        horns={this.state.horns}
                        
                    />
     
                {

                 
                   this.state.data.map((element, index) => {
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