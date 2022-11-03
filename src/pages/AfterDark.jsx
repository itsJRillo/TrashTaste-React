import { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import ListadoCardAF from "../components/ListadoCardAF";
import Footer from "../components/Footer";
import AnimatedPages from "../components/AnimatedPages";
import { motion } from "framer-motion";
import youtubeAPI from "../api/youtube";
import Reproductor from "../components/Reproductor";
import useDisplay from "../hooks/useDisplay";

const AfterDark = () => {
  const [dataAF, setDataAF] = useState([]);
  const {urlDisplay} = useDisplay();

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
      const res = await youtubeAPI.get("/search", {
        params: {
          channelId: "UCKaN3mt53ATqRjzalb2ALFQ",
          q: "Trash Taste AfterDark",
        },
      });
      setDataAF(res.data.items);
    };
    getData();
  }, []);

  dataAF.shift();

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="bg-dark top-0 overflow-auto"
    >
      <Heading c={true} />
      <AnimatedPages>
        {urlDisplay === "" ? null:  (<Reproductor/>)}
        <ListadoCardAF dataAF={dataAF} />
      </AnimatedPages>
      <Footer />
    </motion.div>
  );
};

export default AfterDark;
