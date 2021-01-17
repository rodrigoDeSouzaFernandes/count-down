import React from "react";
import Countdown from "./Countdown";
class Footer extends React.Component {
    render(){
        return(
            <footer>
                <Countdown futureDate="2021-09-28 00:00:00"/>
            </footer>
        );
    }
}
export default Footer;
