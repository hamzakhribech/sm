import  { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = ({ timeTillDate, timeFormat }) => {
  const [countdown, setCountdown] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const diff = moment.duration(then - now);

      const days = diff.days();
      const hours = diff.hours();
      const minutes = diff.minutes();
      const seconds = diff.seconds();

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeTillDate, timeFormat]);

  const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
      <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
  );

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const mapNumber = (number, in_min, in_max, out_min, out_max) => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  };

  if (!countdown.seconds) {
    return null;
  }

  return (
    <div>
      <h1>Countdown</h1>
      <div className='countdown-wrapper'>
        {countdown.days && (
          <div className='countdown-item'>
            <SVGCircle radius={mapNumber(countdown.days, 30, 0, 0, 360)} />
            {countdown.days}
            <span>days</span>
          </div>
        )}
        {countdown.hours && (
          <div className='countdown-item'>
            <SVGCircle radius={mapNumber(countdown.hours, 24, 0, 0, 360)} />
            {countdown.hours}
            <span>hours</span>
          </div>
        )}
        {countdown.minutes && (
          <div className='countdown-item'>
            <SVGCircle radius={mapNumber(countdown.minutes, 60, 0, 0, 360)} />
            {countdown.minutes}
            <span>minutes</span>
          </div>
        )}
        {countdown.seconds && (
          <div className='countdown-item'>
            <SVGCircle radius={mapNumber(countdown.seconds, 60, 0, 0, 360)} />
            {countdown.seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
