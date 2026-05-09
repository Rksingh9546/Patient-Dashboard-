function PatientProfile({ patient }) {

  if (!patient) {
    return null;
  }

  return (

    <div className="profile-card">

      <img
        src={patient.profile_picture}
        alt={patient.name}
      />

      <h2>
        {patient.name}
      </h2>

      <div className="profile-info">

        <p>
          <strong>Date Of Birth</strong>
          <br />
          {patient.date_of_birth}
        </p>

        <p>
          <strong>Gender</strong>
          <br />
          {patient.gender}
        </p>

        <p>
          <strong>Phone</strong>
          <br />
          {patient.phone_number}
        </p>

        <p>
          <strong>Emergency Contact</strong>
          <br />
          {patient.emergency_contact}
        </p>

        <p>
          <strong>Insurance</strong>
          <br />
          {patient.insurance_type}
        </p>

      </div>

      <button className="profile-btn">
        Show All Information
      </button>

    </div>
  );
}

export default PatientProfile;