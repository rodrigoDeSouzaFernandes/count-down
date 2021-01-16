import React from "react";
import Countdown from "./Countdown";
class Footer extends React.Component {
    render(){
        return(
            <footer>
                <Countdown futureDate="2022-05-05 00:00:00"/>
            </footer>
        );
    }
}
export default Footer;
