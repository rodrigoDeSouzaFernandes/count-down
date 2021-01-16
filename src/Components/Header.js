import React from "react";
import Countdown from "./Countdown";
class Header extends React.Component {
    render(){
        return(
            <div>
                <Countdown futureDate="2022-05-05 00:00:00"/>
            </div>
        );
    }
}
export default Header;
