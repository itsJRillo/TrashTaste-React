import CardVideoAF from "./CardVideoAF";
import styles from "../grid.module.css"

const ListadoCardAF = ({ dataAF }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className={`${styles.grid}`}>
        {dataAF?.map((d) => (
            <CardVideoAF key={d.link} info={d} />
        ))}
      </div>
    </div>
  );
};

export default ListadoCardAF;
