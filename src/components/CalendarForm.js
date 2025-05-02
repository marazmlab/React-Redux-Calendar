import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeeting } from '../providers/api';
import { saveMeetingAction } from '../actions/calendar';

const CalendarForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
    });
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = [];
        if (!formData.date) errors.push('Popraw wprowadzoną datę');
        if (!formData.time) errors.push('Popraw wprowadzoną godzinę');
        if (!formData.firstName) errors.push('Wprowadź imię');
        if (!formData.lastName) errors.push('Wprowadź nazwisko');
        if (!/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(formData.email)) {
            errors.push('Wprowadź poprawny adres email');
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        addMeeting(formData)
            .then((newMeeting) => dispatch(saveMeetingAction(newMeeting)))
            .catch((error) => console.error('Failed to save meeting:', error));

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            time: '',
        });
        setErrors([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>{errors.map((err, index) => <li key={index}>{err}</li>)}</ul>
            <div>
                <label>
                    Data:{' '}
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Godzina:{' '}
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Imię:{' '}
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Nazwisko:{' '}
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:{' '}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleFieldChange}
                    />
                </label>
            </div>
            <div>
                <input type="submit" value="zapisz" />
            </div>
        </form>
    );
};

export default CalendarForm;