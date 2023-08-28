// Components/StudentCard.js

import React from "react";
import PropTypes from "prop-types";
import "./StudentCard.css";

const StudentCard = ({
  id,
  name,
  registrationNumber,
  className,
  isPresent,
  toggleAttendance,
}) => {
  return (
    <div className={`student-card ${isPresent ? "present" : "absent"}`}>
      <h2>{name}</h2>
      <p>Registration: {registrationNumber}</p>
      <p>Class: {className}</p>
      <button onClick={() => toggleAttendance(id)}>
        {isPresent ? "Present" : "Absent"}
      </button>
    </div>
  );
};

StudentCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registrationNumber: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  toggleAttendance: PropTypes.func.isRequired,
};

export default StudentCard;
