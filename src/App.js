import React, { useMemo, useState } from "react";
import { numberAndOperators } from "./help/numberAndOperators";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  //function
  const reset = () => {
    setData("");
  };
  const result = () => {
    setData((data) => eval(data));
  };
  const remove = () => {
    setData((data) => data.toString().slice(0, -1));
  };

  //useMemo
  const but = useMemo(() => {
    return numberAndOperators.map((number, i) => (
      <button key={i} onClick={() => setData((data) => data + number)}>
        {number}
      </button>
    ));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="bottom">
          <form name="calc">
            <input type="text" name="text" id="screen" value={data} readOnly />
          </form>

          <div className="buttn">
            {but}
            <button onClick={() => remove()} name="del" className="del">
              del
            </button>
            <button onClick={() => reset()} className="reset">
              reset
            </button>
            <button onClick={() => result()} className="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
