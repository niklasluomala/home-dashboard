import React, {
    Component
} from 'react';
import './bussi.css';

class Bussi extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            servertime: "",
            status: "",
            sys: "",
            loading: true
        };
    }

    componentDidMount() {
        this.getSchedule();
        this.timer = setInterval(() => this.getSchedule(), 60000);
    }

    async getSchedule() {
        let results = fetch('http://data.foli.fi/siri/stops/446')
        .then(response => response.json())
        .then(json => {
            //console.log(json.sys);
            this.setState({ result: json.result.slice(0, 4), servertime: json.servertime, status: json.status, sys: json.sys, loading: false })
            //console.log(this.state);
        });
    }

    render() {
        return (
            <div class="Bussit">
                {this.state.result.map(e => (
                    <div class="Matka">
                        <div class="Ajat">
                            <div class="Linja">
                                {e.lineref}
                            </div>
                        </div>
                        <div class="Ajat">
                            <div class="Lähtö">
                                {new Date(e.originaimeddeparturetime * 1000)
                                    .toString()
                                    .substring(16, 21)}
                            </div>
                            <div class="Pysäkillä">
                                {new Date(e.expectedarrivaltime * 1000)
                                    .toString()
                                    .substring(16, 21)}
                            </div>
                        </div>
                        <div class="Ajat">
                            <div class="Arvio" id="yliopisto">
                                Yliopisto {new Date(e.originaimeddeparturetime * 1000 + 9*60000)
                                                .toString()
                                                .substring(16, 21)}
                            </div>
                            <div class="Arvio" id="kauppatori">
                                Kauppatori {new Date(e.originaimeddeparturetime * 1000 + 18*60000)
                                                .toString()
                                                .substring(16, 21)}
                            </div>
                            <div class="Arvio" id="poliisitalo">
                                Poliisitalo {new Date(e.originaimeddeparturetime * 1000 + 23*60000)
                                                .toString()
                                                .substring(16, 21)}
                            </div>
                        </div>
                    </div>
                ))}
            Päivitetty {new Date().toString().substring(16, 24)}
            </div>
        );
    }
}

export default Bussi;