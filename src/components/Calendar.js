import React from 'react';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

const Calendar = () => {
    return (
        <section className="calendar">
            <div className="calendar__form-container">
                <h2 className="calendar__title">ADD MEETING</h2>
                <CalendarForm />
            </div>
            <div className="calendar__info-container">
                <h2 className="calendar__title">SCHEDULE</h2>
                <CalendarList />
            </div>
        </section>
    );
};

export default Calendar;