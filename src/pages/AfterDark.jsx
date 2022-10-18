import {useState, useEffect} from "react";

import axios from "axios";

import Heading from "../components/Heading";
import ListadoCardAF from "../components/ListadoCardAF";
import Footer from "../components/Footer";

const AfterDark = () => {
  const [dataAF, setDataAF] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const urlAF = "/trash-taste-afterdark.json";
      const resAF = await axios.get(urlAF);
      setDataAF(resAF.data);
    };

    console.log(dataAF)

    getData();
  }, []);

  return (
    <div className="bg-dark">
      <Heading c={true}/>
      <ListadoCardAF data={dataAF} />
      <Footer />
    </div>
  );
};

export default AfterDark;
