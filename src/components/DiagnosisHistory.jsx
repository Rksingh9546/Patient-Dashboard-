import BloodPressureChart from "./BloodPressureChart";

function DiagnosisHistory({ patient }) {

  const history =
    patient?.diagnosis_history?.slice(0, 6);

  return (

    <section className="diagnosis-card">

      <h2>
        Diagnosis History
      </h2>

      <div className="chart-box">

        <div className="chart-header">

          <h3>
            Blood Pressure
          </h3>

          <span>
            Last 6 Months
          </span>

        </div>

        <BloodPressureChart
          data={history}
        />

      </div>

    </section>
  );
}

export default DiagnosisHistory;