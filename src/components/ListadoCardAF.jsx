import { Grid, Box} from "@mui/material";
import CardVideoAF from "./CardVideoAF";

const ListadoCardAF = ({ dataAF }) => {
  return (
    <Box className="flex items-center p-10">
      <Grid container columns={{ xs: 2, sm: 4, md: 8, lg: 10}}>
        {dataAF?.map((d) => (
          <Grid minWidth={399} item xs={10} sm={2} md={2} lg={2} key={d.link}>
            <CardVideoAF info={d} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListadoCardAF;
