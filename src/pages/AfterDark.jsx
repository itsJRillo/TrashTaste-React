import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import ListadoCardAF from "../components/ListadoCardAF";
import Footer from "../components/Footer";
import AnimatedPages from "../components/AnimatedPages";
import { motion } from "framer-motion";

const AfterDark = () => {
  const [dataAF, setDataAF] = useState([]);

  const animation = {
    initial:{
      opacity: 0
    },
    animate:{
      opacity: 1
    },
    exit:{
      opacity: 0
    }
  }

  useEffect(() => {
    const getData = async () => {
      const urlAF = "/trash-taste-afterdark.json";
      const resAF = await axios.get(urlAF);
      setDataAF(resAF.data);
    };

    getData();
  }, []);

  return (
    <motion.div variants={animation} initial="initial" animate="animate" exit="exit" className="bg-dark top-0 overflow-auto">
      <Heading c={true} />
      <AnimatedPages>
        <ListadoCardAF dataAF={dataAF} />
      </AnimatedPages>
      <Footer />
    </motion.div>
  );
};

export default AfterDark;
