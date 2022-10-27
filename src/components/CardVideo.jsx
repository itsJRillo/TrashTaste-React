import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  createTheme,
  Link,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import { formatearFecha } from "../helpers/index";

const CardVideo = ({ info }) => {
  const url = "https://www.youtube.com/watch?v=" + info.id.videoId;
  const date = formatearFecha(info.snippet.publishedAt);

  console.log(url)

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
      h5: {
        color: "#3b135b",
        fontWeight: "bold",
      },
      body2: {
        color: "black",
        fontSize: "14",
      },
    },
  });

  return (
    <motion.div whileHover={{ scale: 0.95 }}>
      <Card style={styles.card} sx={{ maxWidth: 399 }}>
        <CardActionArea style={styles.cardAction}>
          <Link target="_blank" href={url}>
            <CardMedia
              style={styles.media}
              component="img"
              height="237"
              image={info.snippet.thumbnails.high.url}
              alt="thumbnail video"
            />
          </Link>
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom={true} variant="h5">
                {info.snippet.title}
              </Typography>
              <Typography variant="body2" color="">
                <span className="block text-xs text-purple font-bold">
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
