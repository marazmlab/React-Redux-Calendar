const API_URL = 'http://localhost:3005/meetings';

export const fetchMeetings = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch meetings');
    }
    return response.json();
};

export const addMeeting = async (meeting) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meeting),
    });
    if (!response.ok) {
        throw new Error('Failed to add meeting');
    }
    return response.json();
};