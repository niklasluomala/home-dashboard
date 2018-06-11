import React, {
    Component
} from 'react';
import './saa.css';

import { 
    TimeSeries, 
    TimeRange, 
    IndexedEvent, 
    Collection 
} from 'pondjs';

import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    BoxChart,
    Resizable,
    LineChart
} from 'react-timeseries-charts';

const API_KEY = process.env.OWMAPIKEY;

class Saa extends Component {
    constructor() {
        super();
        this.state = {
            city: [], 
            cnt: "", 
            cod: "",
            list: [],
            message: ""
        };
        
        weather: [
        ];
    }

    componentDidMount() {
        this.getWeather();
        //this.timer = setInterval(() => this.getWeather(), 60000);
    }

    getWeather() {
        let results = fetch('http://api.openweathermap.org/data/2.5/forecast?id={API_KEY}')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({city: json.city, cnt: json.cnt, cod: json.cod, list: json.list, message: json.message});
            console.log(this.state);
        });
    }

    render() {
        /*events = this.state.data.map(item => {
            const timestamp = dt_txt;

            const {
                date,
                projected_min_temp,
                projected_max_temp
            } = item;

            return new IndexedEvent(date, {
                temp: [
                    +projected_min_temp,
                    +actual_temp,
                    +projected_max_temp
                ]
            }, false);
        });
        */

        //const series = new TimeSeries({ name, new Collection(events) });

        return(/*
            <div>
                <ChartContainer timeRange={series1.timerange()} width={800}>
                    <ChartRow height="200">
                        <YAxis id="axis1" label="AUD" min={0.5} max={1.5} width="60" type="linear" format="$,.2f" />
                    </ChartRow>
                </ChartContainer>
            </div>*/
        <div>
        </div>);
    }

}

export default Saa;