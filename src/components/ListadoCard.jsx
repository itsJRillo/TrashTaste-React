import { Grid, Box } from "@mui/material";
import CardVideo from "./CardVideo";
import styles from "../grid.module.css";

const ListadoCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className={`${styles.grid}`}>
        {data?.map((d) => (
            <CardVideo key={d.link} info={d} />
        ))}
      </div>
    </div>
  );
};

export default ListadoCard;
