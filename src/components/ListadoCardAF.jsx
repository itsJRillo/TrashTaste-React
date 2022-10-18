import { Grid } from "@mui/material";
import CardVideoAF from "./CardVideoAF";

const ListadoCardAF = ({ dataAF }) => {
  return (
    <div className="mx-0 px-10">
      <Grid container>
      {dataAF?.map((d) => (
          <CardVideoAF key={d.link} info={d} />
        ))}
      </Grid>
    </div>
  );
};

export default ListadoCardAF;