import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import { animation } from "../helpers";
import useDisplay from "../hooks/useDisplay";
const Reproductor = () => {
  const { urlDisplay } = useDisplay();

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="flex flex-column justify-center items-center p-10"
    >
      <ReactPlayer controls={true} url={urlDisplay} width={1280} height={720} />
    </motion.div>
  );
};

export default Reproductor;
