import { useState, useEffect } from "react";

import axios from "axios";
import Heading from "../components/Heading";
import ListadoCard from "../components/ListadoCard";
import Footer from "../components/Footer";
import AnimatedPages from "../components/AnimatedPages";
import { motion } from "framer-motion";
import SpotifyEmbed from "../components/SpotifyEmbed";

const Inicio = () => {
  const [data, setData] = useState([]);

  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    const getData = async () => {
      const url = "/trash-taste.json";
      const res = await axios.get(url);
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Heading c={false} />
      <AnimatedPages>
        <ListadoCard data={data} />
      </AnimatedPages>
      <SpotifyEmbed/>
      <Footer />
    </motion.div>
  );
};

export default Inicio;
