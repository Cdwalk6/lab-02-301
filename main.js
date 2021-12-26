import HornedBeasts from './hornedBeast' ;
import React from "react";
import data from "./data.json";




const hornedBeastsArr = [...data];

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
        <>
          {hornedBeastsArr.map((hornedBeast) => {
            return (
              <HornedBeasts
                title={hornedBeast.title}
                imageUrl={hornedBeast.image_url}
                description={hornedBeast.description}
              />
            );
          })}
        </>
      );
    }
  }
          


    


export default Main;