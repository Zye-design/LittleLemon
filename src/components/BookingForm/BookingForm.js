import React, { useState } from "react";
import Button2 from "../../components/Button2/Button2";
import "./BookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];

  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="reservation-container">
        <label htmlFor="date" className="containter-item-title">
          Date
        </label>
        <input
          aria-label="Input the date you would like to reserve for"
          type="date"
          id="date"
          name="date"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.date ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="time" className="containter-item-title">
          Time
        </label>
        <select
          aria-label="Select one of the avaible times"
          id="time"
          name="time"
          value={formValues.time}
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.time ? "error" : ""}
        >
          {availableTimes.map(time =>
            <option key={time}>
              {time}
            </option>
          )}
        </select>
      </div>
      <div className="reservation-container">
        <label htmlFor="people" className="containter-item-title">
          Number of people
        </label>
        <input
          aria-label="Number of people you would like to reserve for"
          type="number"
          id="people"
          name="people"
          min={minGuest}
          max={maxGuest}
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.people ? "error" : ""}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="occasion" className="containter-item-title">
          Occasion
        </label>
        <select
          aria-label="Select ocassion of your reservation"
          id="occasion"
          name="occasion"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.occasion ? "error" : ""}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="reservation-button">
        <Button2 aria-label="Send reservation on Click" title="Book a table" type="submit" />
      </div>
    </form>
  );
};

export default BookingForm;