import React from 'react';
import { Timeline } from 'antd';

export function Experience () {
    return (
        <div className='Experience'>
            <h2>Experience</h2>
            <br />
            <Timeline mode="alternate">
                <Timeline.Item>
                    <h4>Software Engineer @ Trend Micro</h4>
                    Taipei Taiwan
                    <br/>
                    <br/>
                    - Develop microservices that aim for 15k queries per second to provide real-time email analysis
                    <br/>
                    - Work on cloud infrastructure & data pipeline to achieve email behavior analysis
                    <br/>
                    - Migrate legacy services from Chef to Kubernetes
                    <br/>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ NuLand</h4>
                    Tallinn Estonia
                    <br/>
                    <br/>
                    - Developed frontend UI for blockchain web application using React
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ Sunbird Software</h4>
                    Taipei Taiwan
                    <br/>
                    <br/>
                    - Migrated enterprise DCIM software from ExtJS to AngularJS
                </Timeline.Item>

                <Timeline.Item color="grey">
                    <h4>Englich Corner TA @ Taipei Tech</h4>
                    Taipei Taiwan
                </Timeline.Item>

                <Timeline.Item color="grey">
                    <h4>Kitchen Hand @ Tea Garden</h4>
                    Canning Vale Western Australia
                </Timeline.Item>

                <Timeline.Item color="grey">
                    <h4>Cooker @ JC Product</h4>
                    Osborne Park Western Australia
                </Timeline.Item>

                <Timeline.Item color="grey">
                    <h4>Waiter @ 四平街富霸王豬腳</h4>
                    Taipei Taiwan
                </Timeline.Item>

                <Timeline.Item color="grey">
                    <h4>Work Exchange @ 烏石港北堤衝浪民宿</h4>
                    Ilan  Taiwan
                </Timeline.Item>
            </Timeline>
        </div>
    )
} 