import React from 'react';
import Form from '../Form/Form'
function Services(props) {
    const barColors = [
        {
            from: '#a9fff9',
            to: '#00c1d7'
        },
        {
            from: '#b6d6f7',
            to: '#0074ae'
        },
        {
            from: '#ffdab4',
            to: '#ffa700'
        },
        {
            from :'#ffb4f6',
            to: '#ce00ff'
        }
    ]
    const stats = props.services.stats.map((stat, index) => {
        let statPercentage = stat.amount / 10;
        return (
            <div key={index} className="progress-bar-container">
                <div className="stat-info">
                    <div className="stat-title">{stat.title}</div>
                    <div className="stat-percentage">{statPercentage}%</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-width" style={{ "width": `${statPercentage}%`, "background-image" : `linear-gradient(to right, ${barColors[index].from}, ${barColors[index].to})` }}></div>
                </div>
            </div>
        )
    })
    return (
        <div className="services">
            <div className="section-title">{props.services.title}</div>
            <div className="flexcontainer">
                <div className="flexcontainer-item stats">
                    <div className="graph-text">
                        {props.services.graphText}
                    </div>
                    {stats}
                </div>
                <div className="flexcontainer-item form">
                    <Form 
                        buttonText={props.services.buttonText}
                        formLabels={props.services.formLabels}
                        formText={props.services.formText}
                        formGraphText={props.services.graphText}
                    >
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Services

