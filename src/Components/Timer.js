import React from 'react';
import Controltime from './Controltime';

class Timer extends React.Component {

    render() {
        return(
            <main>
                <Controltime status={this.props.status} threeMinutes={this.props.threeMinutes} fiveMinutes={this.props.fiveMinutes} tenMinutes={this.props.tenMinutes}/>
                {this.props.status !== 0 ?
                <div>
                    <span>{(this.props.time.m) >= 10 ? this.props.time.m : `0${this.props.time.m}`}</span>&nbsp;:&nbsp;
                    <span>{(this.props.time.s) >= 10 ? this.props.time.s : `0${this.props.time.s}`}</span>
                    {/* <span>{(this.props.time.ms) >= 10 ? this.props.time.ms : `0${this.props.time.ms}`}</span> */}
                </div> : ""}
            </main>
        );
    }
}

export default Timer;
