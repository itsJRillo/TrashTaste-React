import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Heading from "../components/Heading";
import ListadoCard from "../components/ListadoCard";
import Reproductor from "../components/Reproductor";
import Footer from "../components/Footer";
import AnimatedPages from "../components/AnimatedPages";
import SpotifyEmbed from "../components/SpotifyEmbed";
import youtubeAPI from "../api/youtube";
import { animation } from "../helpers/";
import useDisplay from "../hooks/useDisplay";

const Inicio = () => {
  const [data, setData] = useState([]);
  const {urlDisplay} = useDisplay();

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
  
  data.shift()

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
        {urlDisplay === "" ? null:  (<Reproductor/>)}
        <ListadoCard data={data} />
      </AnimatedPages>
      <SpotifyEmbed />
      <Footer />
    </motion.div>
  );
};

export default Inicio;
