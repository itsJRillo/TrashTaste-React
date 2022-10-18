import {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, createTheme, Link, ThemeProvider } from "@mui/material";

const CardVideo = ({ info }) => {
  const url = "https://www.youtube.com" + info.link;
  const [shadow, setShadow] = useState(1)

  const styles = {
    media: {
      width:399,
      height:237
    },
    card: {
      margin: "15px 15px 15px 15px",
      backgroundColor: "#fff",
      "& :hover":{
        transform: "scale(1.1)"
      }
    },
    cardAction:{
      cursor: "default"
    }
  };

  const theme = createTheme({
    typography:{
      h5:{
        color:"#3b135b",
        fontWeight:"bold",
      },
      body2:{
        color:"black",
        fontSize: "14"
      }
    }
  })

  return (
    <Card style={styles.card} sx={{ maxWidth: 399}}>
      <CardActionArea style={styles.cardAction}>
        <Link target="_blank" href={url}>
          <CardMedia
            style={styles.media}
            component="img"
            height="237"
            image={info.thumbnail}
            alt="thumbnail video"
          />
        </Link>
        <CardContent>
        <ThemeProvider theme={theme}>
          <Typography gutterBottom={true} variant="h5">
            {info.title}
          </Typography>
          <Typography variant="body2" color="">
            {info.visuals}
          </Typography>
        </ThemeProvider>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardVideo;
