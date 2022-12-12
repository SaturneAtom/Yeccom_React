import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import SwipeableEdgeDrawer from './drawers/SwipeableEdgeDrawer';
import TextRating from './notes/TextRating';
import { useSelector } from 'react-redux'

import MouseOverPopover from '../utils/home_infos/MouseOverPopover';



function Media(props) {
  const { loading = false } = props;

  const data = useSelector(state => state.posts.posts)
  const homeData = data.map((item) => (
    <div key={item._id} style={{ marginBottom: "45px" }}>
      <Card sx={{ maxWidth: "100%", m: 2, height: "auto",
      boxShadow: "10px 10px 10px 5px rgba(0,2,2,0.2)",
    }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              <Avatar
                size="large"
                alt="Ted talk"
                src={item.avatar}
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MouseOverPopover />
              </IconButton>

            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              item.name
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
             item.adress.city
            )
          }
        />

        {
          loading ? (
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia
              component="img"
              width="100%"
              image={item.banner}
              style={{ maxWidth: "600px", objectFit: "cover", justifyContent: "center", alignItems: "center", display: "flex", objectPosition: "center" }}
              height="auto"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p" style={{marginTop:"15px" }}>
              {
                "Vaches à lait et vaches à viande élevées en plein air dans le respect de l'environnement et de la nature."
              }
            </Typography>
          )}
          <SwipeableEdgeDrawer />
          <div style={{ height: "20px" }} />
          <div style={{
            display: "flex",
            float: "right",
          }}>
            
            <TextRating />
          </div>
          <div style={{ height: "20px" }} />
        </CardContent>
      </Card >
    </div>
  ))
  return (
    <div>
      {homeData}
    </div>
  );
}

export default function Facebook() {
  return (
    <div>
      <Media />
    </div>
  );
}
