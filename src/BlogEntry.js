import React, { useState } from 'react';
import ReactEmbedGist from 'react-embed-gist';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function BlogEntry(gist)  {
    const classes = useStyles();
    const [isClicked, setClicked] = useState(false);

    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary aria-controls="panel1a-content" onClick={() => setClicked(!isClicked)} expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{(!isClicked) ? gist.description : ""}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <ReactEmbedGist gist={`${gist.user}/${gist.id}`} />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <Divider />
        </div>
    );
}

  export default BlogEntry