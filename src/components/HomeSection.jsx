import React from 'react';
import { Typography, SvgIcon } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import cutout from "../assets/cutout.png";
import headshot from "../assets/headshot.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

export default function HomeSection(props) {
    const classes = useStyles();
    const pic = {
        width: '15%',
        clipPath:"url(#myClip)",
    };
    return (
        <div style={{ height: "100vh" }}>
            <Grid container style={{ textAlign: 'center' }}>
                <Grid item xs={12}>
                    <img src={cutout} style={pic}></img>
                    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="myClip">
                                <polygon points="100,100 200,0 200,200" />
                            </clipPath>
                        </defs>
                    </svg>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center' variant='h4' style={{ fontWeight: 'bold' }}>
                        Joshua Luo
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    {/* Social Media */}
                </Grid>
                <Grid item xs={4}>
                    {/* Social Media */}
                </Grid>
                <Grid item xs={4}>
                    {/* Social Media */}
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary">See Resume</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined">Contact Me</Button>
                </Grid>
            </Grid>
        </div>
    );
}