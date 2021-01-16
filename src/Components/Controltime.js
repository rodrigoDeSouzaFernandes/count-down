import React from 'react'

class Controltime extends React.Component {
    render(){
        return(
            <div className="input-container">
                {(this.props.status === 0) ?
                <div>
               <button type="select" className="set-time-btn stopwatch-btn-green">3:00</button>
               <button type="select" className="set-time-btn stopwatch-btn-yellow">5:00</button>
               <button type="select" className="set-time-btn stopwatch-btn-red">10:00</button> 
               </div> : ""}
            </div>
        );
    }
}
export default Controltime;