import React from 'react';

const BookingForm = () => {
    return (
        <form>
            <h1>Booking Form</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />

            <input type="submit" value="Book Now" />
        </form>
    );
};

export default BookingForm;