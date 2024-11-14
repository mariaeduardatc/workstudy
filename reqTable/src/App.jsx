import courseData from "../reqs.json"

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse"
};

const thTdStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "left",
  width: "fit-content"
};

const App = () => {
  return (
      <div>
          <h1>Course Prerequisites</h1>
          <table style={tableStyle}>
              <thead>
                  <tr>
                      <th style={thTdStyle}>Course Code</th>
                      <th style={thTdStyle}>Course Title</th>
                      <th style={thTdStyle}>Prerequisites</th>
                  </tr>
              </thead>
              <tbody>
                  {courseData.course_offerings.map((course) => 
                  (course.course_type == "Major Core" || course.course_type == "Concentration") ? (
                      <tr key={course.id}>
                          <td style={thTdStyle}>{course.course_code}</td>
                          <td style={thTdStyle}>{course.course_title}</td>
                          <td style={thTdStyle}>{course.course_prerequisites}</td>
                      </tr>
                  ) : <></>)}
              </tbody>
          </table>
      </div>
  );
};

export default App
