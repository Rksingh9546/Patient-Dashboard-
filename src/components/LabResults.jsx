function LabResults({ patient }) {

  return (

    <div className="lab-card">

      <h2>
        Lab Results
      </h2>

      {patient?.lab_results?.map(
        (result, index) => (

          <div
            key={index}
            className="lab-item"
          >

            <span>
              {result}
            </span>

            <span>
              ⬇
            </span>

          </div>
        )
      )}

    </div>
  );
}

export default LabResults;