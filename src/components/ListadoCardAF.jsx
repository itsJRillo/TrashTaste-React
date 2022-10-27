import CardVideoAF from "./CardVideoAF";
import styles from "../styles/grid.module.css"

const ListadoCardAF = ({ dataAF }) => {

  // Delete first item
  dataAF.shift();

  return (
    <div className="flex justify-center items-center p-10">
      <div className={`${styles.grid}`}>
        {dataAF?.map((item) => (
            <CardVideoAF key={item.etag} info={item} />
        ))}
      </div>
    </div>
  );
};

export default ListadoCardAF;
