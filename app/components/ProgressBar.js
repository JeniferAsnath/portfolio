import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="lg:w-[24vh] w-[10vh] lg:px-4">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: '#4db8ff',
            textColor: '#4db8ff',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
      <h3 className="lg:text-xl text-center font-semibold py-2">{title}</h3>
    </div>
  );
};

export default ProgressBar;
