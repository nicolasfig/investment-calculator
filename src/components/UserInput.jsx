export default function UserInput({ onChangeInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={input.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", parseInt(event.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            value={input.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", parseInt(event.target.value))
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={input.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", parseInt(event.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={input.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
