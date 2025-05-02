import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeetings } from '../providers/api';
import { loadMeetingsAction } from '../actions/calendar';

const CalendarList = () => {
    const meetings = useSelector((state) => state.meetings);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMeetings()
            .then((data) => dispatch(loadMeetingsAction(data)))
            .catch((error) => console.error('Failed to fetch meetings:', error));
    }, [dispatch]);

    const renderMeetingsList = () => {
        return meetings.map((item) => (
            <li key={item.id}>
                {item.date} {item.time} = {' '}
                <a href={`mailto:${item.email}`}>
                    {item.firstName} {item.lastName}
                </a>
            </li>
        ));
    };

    return <ul className="calendar__list">{renderMeetingsList()}</ul>;
};

export default CalendarList;