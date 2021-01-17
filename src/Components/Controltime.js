import React from 'react'

class Controltime extends React.Component {

    render(){
        return(
            <div className="input-container">
                {(this.props.status === 0) ?
                <div>
               <button onClick={this.props.threeMinutes}  className="set-time-btn stopwatch-btn-green">3:00</button>
               <button onClick={this.props.fiveMinutes}  className="set-time-btn stopwatch-btn-yellow">5:00</button>
               <button onClick={this.props.tenMinutes}  className="set-time-btn stopwatch-btn-red">10:00</button> 
               </div> : ""}
            </div>
        );
    }
}
export default Controltime;