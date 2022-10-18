import { useState, useEffect } from "react";

import axios from "axios";

import Heading from "../components/Heading";
import ListadoCard from "../components/ListadoCard";
import Footer from "../components/Footer";

const Inicio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "/trash-taste.json";
      const res = await axios.get(url);
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <div>
      <div>
        <Heading c={false}/>
        <ListadoCard data={data} />
        <Footer />
      </div>
    </div>
  );
};

export default Inicio;
