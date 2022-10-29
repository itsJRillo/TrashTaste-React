import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Heading from "../components/Heading";
import ListadoCard from "../components/ListadoCard";
import Footer from "../components/Footer";
import AnimatedPages from "../components/AnimatedPages";
import SpotifyEmbed from "../components/SpotifyEmbed";
import youtubeAPI from "../api/youtube";
import { animation } from "../helpers/";

const Inicio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await youtubeAPI.get("/search", {
        params: {
          channelId: "UCcmxOGYGF51T1XsqQLewGtQ",
          q: "Trash Taste",
        },
      });
      setData(res.data.items);
    };
    getData();
  }, []);

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      <Heading c={false} />
      <AnimatedPages>
        <ListadoCard data={data} />
      </AnimatedPages>
      <SpotifyEmbed />
      <Footer />
    </motion.div>
  );
};

export default Inicio;
