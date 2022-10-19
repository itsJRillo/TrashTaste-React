import { Grid } from "@mui/material";
import CardVideoAF from "./CardVideoAF";

const ListadoCardAF = ({ dataAF }) => {
  return (
    <div className="m-0 w-50 p-10">
      <Grid container>
        {dataAF?.map((d) => (
          <CardVideoAF info={d} key={d.link} />
        ))}
      </Grid>
    </div>
  );
};

export default ListadoCardAF;
