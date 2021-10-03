import React from "react";
import "./RadarGraph.css";
import { useInView } from "react-intersection-observer";
import { Radar } from 'react-chartjs-2';


const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  const options = {
    options: {
        responsive: false
    }
  };
  

const RadarGraph = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });
    
    const config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
    };

    const renderContent = () => {
        return (
            <>
                <Radar data={data} options={options} className="radar__image"/>
            </>
        );
    };

    return (
        <div className={inView ? "radar radar--zoom" : "radar"} ref={ref}>
          {renderContent()}
        </div>
    );
};

export default RadarGraph;
