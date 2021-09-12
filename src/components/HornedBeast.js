import React from 'react';

class HornedBeast extends React.Component {
    render(){
        return(
            <div>
                <h2>Horned Beast</h2>
               <img src={this.props.imgUrl} alt="horned beast" height='500px' width='700px' />
                <p>Horned Beast are herbivorous animals found throughout the Nature civilization. Surprisingly agile, they are mild-tempered herd animals with large horns. They have evolved into stocky creatures with a low center of gravity and use their speed to escape predators. When spooked, the herd can erupt into a deadly stampede</p>
           </div>
            )

    }
}

export default HornedBeast;