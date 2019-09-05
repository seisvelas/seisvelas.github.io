import React from 'react';
import Blog from './Blog.js'
import logo from './logo.svg'; // I should prolly find a new favicon lol
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import ReactEmbedGist from 'react-embed-gist';

const useStyles = makeStyles({
  card: {
    maxWidth: "35%",
    marginBottom: "10px"
  },
  root: {
    flexGrow: 1,
  }
});

function App() {
  const classes = useStyles();
  const [content, setContent] = React.useState(0);

  // si no tienes >16.8 no servirá
  console.log(React.version);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{backgroundColor: "rgba(12, 14, 16, 0.84)"}}>
        <Typography component="div">
        <Grid container justify="center">
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="50%"
          image="https://i.imgur.com/OH2mv8o.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h1">
            Alejo V.
          </Typography>
          <Typography variant="subtitle1">
            <b>Ingeniero de datos.</b><p />
            Trabajo en SQL, Elixir, y Kubernetes.<p />
            Estudiando Álg. Lin. y Estád. Bayesiana<p />
            Jugando en los sueños lúcidos, los comics, y la exploración urbana
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Container maxWidth="20%">
    </Container>
    </Grid>
    <Paper style={{marginTop: "5%"}} className={classes.root}>
      <Tabs
        value={content}
        onChange={(e, v)=>{console.log(v, "heyy");setContent(v)}}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Writing" />
        <Tab label="Who?" />
      </Tabs>
    </Paper>
    <Divider />

          {(content === 0) ? (<Blog user='seisvelas' />)
           : (<div><ReactEmbedGist gist={`seisvelas/64899130591e38ec795593484fd94c6c`} /></div>)
          }

        </Typography>
        <center><div style={{paddingTop : "30px", backgroundColor: "rgba(255, 255, 255, 0.4)",fontSize: "16px", width:"70%"}}>Hice esta página con React Hooks, Markdown, y el Gist API.<div></div>Lée el código <a href="https://github.com/seisvelas/ghpage" style={{color: "black", fontWeight: "bold"}} target="_blank">aquí</a></div></center>

      </Container>
    </React.Fragment>
  );
}

export default App;
