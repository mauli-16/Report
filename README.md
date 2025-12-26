**Running the Project**

To run the project locally, simply clone the repository and install the dependencies.
Start the frontend using npm run dev, and run the backend server with node server.js.
You can also view the deploye project - https://report-delta-three.vercel.app/

**Data Source**

The student scores are stored as a simple JSON object inside the backend (server.js).
This data is served through a single API endpoint and is fetched by the frontend to display the assessment report.

**Feedback Logic**

The feedback shown on the report is generated using simple conditional logic.
Scores are grouped into ranges, and based on the student’s overall score, the appropriate feedback message is displayed automatically.
