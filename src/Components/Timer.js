import React from 'react';
import Controltime from './Controltime';

class Timer extends React.Component {

    render() {
        return(
            <main>
                <Controltime status={this.props.status}/>
                <span>{(this.props.time.m) >= 10 ? this.props.time.m : `0${this.props.time.m}`}</span>&nbsp;:&nbsp;
                <span>{(this.props.time.s) >= 10 ? this.props.time.s : `0${this.props.time.s}`}</span>&nbsp;:&nbsp;
                <span>{(this.props.time.ms) >= 10 ? this.props.time.ms : `0${this.props.time.ms}`}</span>
            </main>
        );
    }
}

export default Timer;
