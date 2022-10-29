import CardVideo from "./CardVideo";
import styles from "../styles/grid.module.css";

const ListadoCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className={`${styles.grid}`}>
        {data?.map((item) => (
            <CardVideo key={item.etag} info={item} />
        ))}
      </div>
    </div>
  );
};

export default ListadoCard;
