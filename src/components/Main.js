import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from'./HornedData.json';

class Main extends React.Component {
    
    render(){
        return(
             <div>
                 {
                     HornedData.map((element, index) => {
                         return (
                             <HornedBeast
                             image_url={element.image_url}
                             title={element.title} 
                             description={element.title}
                             keyword={element.keyword}
                             horns={element.horns}
                             key={index}  />
                         )
                     })
                 }
           

            
            </div>
        )

    }
}

export default Main;