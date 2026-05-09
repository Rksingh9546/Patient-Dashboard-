import { useEffect, useState } from "react";

import api from "./services/api";

import TopNavbar from "./components/TopNavbar";
import PatientsSidebar from "./components/PatientsSidebar";
import PatientProfile from "./components/PatientProfile";
import DiagnosisHistory from "./components/DiagnosisHistory";
import StatsCards from "./components/StatsCards";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

import "./styles/global.css";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {

    try {

      const response = await api.get("/");

      setPatients(response.data);

      const jessica = response.data.find(
        (p) => p.name === "Jessica Taylor"
      );

      setPatient(jessica);

    } catch (error) {

      console.log(error);
    }
  };

  if (!patient) {

    return (
      <div className="loading">
        Loading Dashboard...
      </div>
    );
  }

  return (

    <div className="app-container">

      <TopNavbar />

      <div className="dashboard-layout">

        <PatientsSidebar
          patients={patients}
        />

        <main className="main-content">

          <DiagnosisHistory
            patient={patient}
          />

          <StatsCards
            patient={patient}
          />

          <DiagnosticList
            patient={patient}
          />

        </main>

        <aside className="right-sidebar">

          <PatientProfile
            patient={patient}
          />

          <LabResults
            patient={patient}
          />

        </aside>

      </div>

    </div>
  );
}

export default App;