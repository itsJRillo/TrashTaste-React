import Heading from "./components/Heading";
import ListadoCard from "./components/ListadoCard";
import ListadoCardAF from "./components/ListadoCardAF";

import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [dataAF, setDataAF] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const url = "/trash-taste.json";
      // const urlAF = "";
      const res = await axios.get(url);
      // const resAF = await axios.get(urlAF);

      setData(res.data);
      // setDataAF(resAF.data);
    };

    getData();
  }, []);

  return (
    <div>
      {checked === false ? (
        <div>
          <Heading setChecked={setChecked} checked={checked} />
          <ListadoCard data={data} />
          <Footer/>
        </div>
      ) : (
        <div>
          <Heading setChecked={setChecked} checked={checked} />
          <ListadoCardAF data={dataAF} />
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
