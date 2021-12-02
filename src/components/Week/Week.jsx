import React from 'react';
import styles from './Week.module.scss';
import './Week.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Week = ({week, dayClick, currentDate, selectedDate }) => {
    
    const todayHandle = (a, b) => {
        if (!a || !b) return false;
        return (
          a.getFullYear() === b.getFullYear() &&
          a.getMonth() === b.getMonth() &&
          a.getDate() === b.getDate()
        );
    }
    
    return (
        <li className={styles.Week}>
            {week.map((day, index) => {       
                if (day) {
                    return  (
                        <p
                            key={day.getTime()}
                            className={classnames('Day', {
                                'Today': todayHandle(day, currentDate),
                                'Selected': todayHandle(day, selectedDate)
                            })}
                            onClick={() => dayClick(day)}
                        >
                            {day.getDate()}
                        </p>
                    )
                } else {
                    return <p key={index}>{''}</p> 
                }
            })}
        </li> 
    )
}

Week.propTypes = {
    week: PropTypes.array,
    dayClick: PropTypes.func,
};

export default Week;