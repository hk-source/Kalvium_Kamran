// App.js

import React, { useState } from "react";
import "./App.css";
import StudentCard from "./Components/StudentCard"; // Import the StudentCard component
import students from "./Components/StudentData"; // Import your student data
import SearchBar from "./Components/SearchBar";
import FilterButtons from "./Components/FilterButtons";

const App = () => {
  const [attendanceData, setAttendanceData] = useState(
    students.map((student) => ({ ...student, isPresent: false }))
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleAttendance = (studentId) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.id === studentId
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
  };

  const filteredStudents = attendanceData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByFilter =
    filter === "all"
      ? filteredStudents
      : filteredStudents.filter(
          (student) => student.isPresent === (filter === "present")
        );

  return (
    <div className="app">
      <header className="header">
        <h1>Class Attendance System </h1>
        <p>{new Date().toDateString()}</p>
      </header>
      <SearchBar handleSearch={setSearchQuery} />
      <FilterButtons handleFilter={setFilter} /> {/* Add the FilterButtons */}
      <div className="attendance-list">
        {filteredByFilter.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            registrationNumber={student.registrationNumber}
            className={student.className}
            profileImg={student.profileImg}
            isPresent={student.isPresent}
            toggleAttendance={toggleAttendance}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
