function StatsCards({ patient }) {

  const latest =
    patient?.diagnosis_history?.[0];

  return (

    <div className="stats-grid">

      <div className="stat-card blue">

        <div className="stat-icon">
          🫁
        </div>

        <h3>
          Respiratory Rate
        </h3>

        <h1>
          {latest?.respiratory_rate?.value} bpm
        </h1>

        <p>
          {latest?.respiratory_rate?.levels}
        </p>

      </div>

      <div className="stat-card pink">

        <div className="stat-icon">
          🌡️
        </div>

        <h3>
          Temperature
        </h3>

        <h1>
          {latest?.temperature?.value}°F
        </h1>

        <p>
          {latest?.temperature?.levels}
        </p>

      </div>

      <div className="stat-card purple">

        <div className="stat-icon">
          ❤️
        </div>

        <h3>
          Heart Rate
        </h3>

        <h1>
          {latest?.heart_rate?.value} bpm
        </h1>

        <p>
          {latest?.heart_rate?.levels}
        </p>

      </div>

    </div>
  );
}

export default StatsCards;