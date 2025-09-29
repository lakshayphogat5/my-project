import React, { useState } from "react";

function App() {
  // Sample course data
  const [courses] = useState([
    { id: 1, courseName: "Data Structures", duration: "3 months" },
    { id: 2, courseName: "Operating Systems", duration: "4 months" },
    { id: 3, courseName: "Database Management", duration: "2 months" },
    { id: 4, courseName: "Computer Networks", duration: "3 months" },
    { id: 5, courseName: "Machine Learning", duration: "6 months" },
  ]);

  // Search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses by name
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>📘 Course List</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          margin: "15px 0",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      {/* Display courses */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <li
              key={course.id}
              style={{
                background: "#000000ff",
                margin: "10px 0",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{course.courseName}</h3>
              <p>Duration: {course.duration}</p>
            </li>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
