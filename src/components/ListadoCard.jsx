import { Grid } from "@mui/material";
import CardVideo from "./CardVideo";

const ListadoCard = ({ data }) => {
  return (
    <div className="mx-0 px-10">
      <Grid container>
        {data?.map((d) => (
          <CardVideo key={d.link} info={d} />
        ))}
      </Grid>
    </div>
  );
};

export default ListadoCard;
