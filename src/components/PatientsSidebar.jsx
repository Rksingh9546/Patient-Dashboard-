function PatientsSidebar({ patients }) {

  return (

    <aside className="patients-sidebar">

      <div className="sidebar-header">

        <h2>
          Patients
        </h2>

      </div>

      <div className="patients-list">

        {patients.map((patient, index) => (

          <div
            key={index}
            className={
              patient.name === "Jessica Taylor"
                ? "patient-card active-patient"
                : "patient-card"
            }
          >

            <img
              src={patient.profile_picture}
              alt={patient.name}
            />

            <div>

              <h4>
                {patient.name}
              </h4>

              <p>
                {patient.gender},
                {" "}
                {patient.age}
              </p>

            </div>

          </div>

        ))}

      </div>

    </aside>
  );
}

export default PatientsSidebar;