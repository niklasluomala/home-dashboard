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

class turku extends React.Component {
    state = {
        timerange: new TimeRange([1425168000000, 1433116800000]),
        selection: null
    };

    handleTimeRangeChange = timerange => {
        this.setState({ timerange });
    };

    infoValues = () => {
        if (this.state.highlight) {
            return [
                {
                    label: "day min",
                    value: '${this.state.highlight.get("outerMin")}°C'
                },
                {  
                    label: "day temp",
                    value: '${this.state.highlight.get("innerTemp")}°C'
                },
                {
                    label: "day max",
                    value: '${this.state.highlight.get("outerMax")}°C'
                }
            ];
        }
        return null;
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Resizable>
                            <ChartContainer
                                utc={false}
                                timeRange={this.state.timerange}
                                enablePanZoom={true}
                                onBackgroundClick={() => this.setState({ selection: null })}
                                onTimeRangeChanged={this.handleTimeRangeChange}
                            >
                                <ChartRow height="300">
                                    <Charts>
                                        <BoxChart
                                            axis="temp"
                                            style={style}
                                            column="temp"
                                            series={series}
                                            info={this.infoValues()}
                                            infoWidth={130}
                                            infoHeight={75}
                                            highlighted={this.state.highlight}
                                            onHighlighChange={highlight =>
                                                this.setState({ highlight })
                                            }
                                            selected={this.state.selection}
                                            onSelectionChange={selection =>
                                                this.setState({ selection })
                                            }
                                        />
                                    </Charts>
                                    <YAxis
                                        id="temp"
                                        label="Temperature"
                                        min={0}
                                        max={40}
                                        width="70"
                                        format={n => Number(n).toFixed() + "°C"}
                                    />
                                </ChartRow>
                            </ChartContainer>
                        </Resizable>
                    </div>
                </div>
            </div>
        )
    }
}

export default { turku }