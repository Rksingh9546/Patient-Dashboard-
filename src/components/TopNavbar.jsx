function TopNavbar() {

  return (

    <header className="top-navbar">

      <div className="logo">
        Tech.Care
      </div>

      <nav className="nav-links">

        <span>Overview</span>

        <span className="active-nav">
          Patients
        </span>

        <span>Schedule</span>

        <span>Message</span>

        <span>Transactions</span>

      </nav>

      <div className="doctor-info">

        <strong>
          Dr. Jose Simmons
        </strong>

        <p>
          General Practitioner
        </p>

      </div>

    </header>
  );
}

export default TopNavbar;