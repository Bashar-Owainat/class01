import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render(){
        return(
            <div>
            <HornedBeast imgUrl={"https://i.pinimg.com/originals/29/8f/f5/298ff54cc47418f2a7dcd9fcb1258729.jpg"}/>
            <HornedBeast imgUrl={"https://hdwallpapers.cat/wallpaper/horned-beast-rock-fantasy-abstract-7xUJ.jpg"} />
            </div>
        )

    }
}

export default Main;