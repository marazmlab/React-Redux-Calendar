export const LOAD_MEETINGS = 'LOAD_MEETINGS';
export const SAVE_MEETING = 'SAVE_MEETING';

export const loadMeetingsAction = (meetings) => ({
    type: LOAD_MEETINGS,
    payload: meetings,
});

export const saveMeetingAction = (meeting) => ({
    type: SAVE_MEETING,
    payload: meeting,
});