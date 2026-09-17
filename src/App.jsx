import { useState } from "react";
import Header from "./Components/Header";
import CourseSection from "./Components/CourseSection";
import AdmissionForm from "./Components/AdmissionForm";
import ApplicationDetails from "./Components/ApplicationDetails";
import "./App.css";

function App() {
  const [applicant, setApplicant] = useState(null);

  const handleApplicationSubmit = (data) => {
    setApplicant(data);
  };

  return (
    <div>
      <Header />

      <CourseSection />

      <AdmissionForm onSubmit={handleApplicationSubmit} />

      <ApplicationDetails applicant={applicant} />
    </div>
  );
}

export default App;