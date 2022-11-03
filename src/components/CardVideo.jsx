import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import { formatearFecha } from "../helpers/index";
import useDisplay from "../hooks/useDisplay";

const CardVideo = ({ info }) => {
  const {setURLDisplay} = useDisplay();
  const url = "https://www.youtube.com/watch?v=" + info.id.videoId;
  const date = formatearFecha(info.snippet.publishedAt);

  const styles = {
    media: {
      width: 399,
      height: 237,
    },
    card: {
      margin: "15px 15px 15px 15px",
      backgroundColor: "#fff",
    },
    cardAction: {
      cursor: "default",
    },
  };

  const theme = createTheme({
    typography: {
      h4: {
        color: "#3b135b",
        fontWeight: "bold",
      },
      body2: {
        color: "#303030",
        fontSize: "30",
      },
    },
  });

  return (
    <motion.div whileHover={{ scale: 0.95 }} onClick={() => setURLDisplay(url)}>
      <Card style={styles.card} sx={{ maxWidth: 399 }}>
        <CardActionArea style={styles.cardAction}>
            <CardMedia
              style={styles.media}
              component="img"
              height="237"
              image={info.snippet.thumbnails.high.url}
              alt="thumbnail video"
            />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom={true} variant="h4">
                {info.snippet.title}
              </Typography>
              <Typography variant="body2" className="text-xl">
                <span className="block text-xl text-purple font-bold">
                  Publicado el:
                </span>
                {date}
              </Typography>
            </ThemeProvider>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default CardVideo;
