import React from 'react';

class Btntimer extends React.Component {
    render() {
        return(
            <div>
                {(this.props.status === 0) ? 
                <button className="stopwatch-btn stopwatch-btn-green" 
                onClick={this.props.start}>Start</button> : ""
                }
                
                {(this.props.status === 1) ? 
                <div>
                    <button className="stopwatch-btn stopwatch-btn-green" 
                        onClick={this.props.stop}>Stop</button> 
                    <button className="stopwatch-btn stopwatch-btn-green" 
                        onClick={this.props.reset}>Reset</button> 
                 </div> : ""
                }
                 {(this.props.status === 2) ? 
                <div>
                    <button className="stopwatch-btn stopwatch-btn-green" 
                        onClick={this.props.resume}>Resume</button> 
                    <button className="stopwatch-btn stopwatch-btn-green" 
                        onClick={this.props.reset}>Reset</button> 
                 </div> : ""
                }
                
            </div>
        );
    }
}

export default Btntimer;
