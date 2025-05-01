import React from 'react';
import { connect } from 'react-redux';
import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';

class Calendar extends React.Component {
    apiUrl = 'http://localhost:3005/meetings';

    componentDidMount() {
        fetch(this.apiUrl)
            .then((resp) => resp.json())
            .then((data) => {
                this.props.loadMeetings(data);
            });
    }


    render() {
        return (
            <section>
                <CalendarList meetings={ this.props.meetings } />
                <CalendarForm saveMeeting={ this.props.sendMeeting }/>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    meetings: state.meetings,
});

const mapDispatchToProps = {
    loadMeetings: loadMeetingsAction,
    sendMeeting: saveMeetingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);