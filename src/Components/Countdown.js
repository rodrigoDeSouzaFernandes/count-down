import React from 'react';
import moment, { duration } from 'moment'

class Countdown extends React.Component {
    state = {
        dias:0,
        horas:0,
        minutos:0,
        segundos:0,
    }

    setCountdown() {
        const futureDate = moment(this.props.futureDate);
        const today = moment();
        const clockDuration = duration(futureDate.diff(today));

        const dias = Math.floor(clockDuration.asDays());
        const horas = clockDuration.hours();
        const minutos = clockDuration.minutes();
        const segundos = clockDuration.seconds();

        this.setState({
            dias,
            horas,
            minutos,
            segundos,
        });
    }

    addZeros(value) {
        value = String(value);
        while(value.length < 2) {
            value = `0${value}`
        }
        return value;
    }

    componentDidMount() {
        this.setCountdown();
        this.interval = setInterval(() => {
            this.setCountdown();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
  render() {
    return(
      <div className="countdown">
          <span className="countdown-init-message">Não desanime! faltam apenas: </span>
          <div className="countdown-segment">
            {Object.keys(this.state).map((key, i) => (
                <div>
                    <span className="countdown-segment-number">
                        {this.addZeros(this.state[key])}
                    </span>
                    <span className="countdown-segment-caption">
                        {key.toUpperCase()}
                    </span>
                </div>
            ))}
            
            </div>
            <span className="countdown-end-message">para a formatura da turma 08 na Trybe! \O/ </span>
      </div>
    );
  }
}

export default Countdown;