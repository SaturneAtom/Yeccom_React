import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';





const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)'
}));

function SwipeableEdgeDrawer(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(60% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{ textAlign: 'center', backgroundColor: "white", marginTop: "20px" }}>
                <Button
                    style={{
                        backgroundColor: "#3f51b5", color: "white",
                        fontSize: "13px", fontWeight: "bold", padding: "10px", borderRadius: "10px", fontFamily: "Roboto, sans-serif",
                    }}
                    onClick={toggleDrawer(true)}

                >
                    Produits</Button>
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        right: 0,
                        left: 0,
                    }}
                >
                    <Typography variant="h6" sx={{ p: 2 }}>
                        25 produits
                    </Typography>
                    <Puller />
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '80%',
                        overflow: 'visible',
                    }}
                >
                    <Skeleton
                        style={{ backgroundColor: "white" }}
                        variant="rectangular"
                        animation="wave"
                        width="100%"
                        height="auto"
                    >

                        <div style={{
                            display: "flex", flexDirection: "row",
                            padding: "10px"
                        }}>
                                <div style={{
                            display: "flex", flexDirection: "row",
                            padding: "10px"
                        }}>
                                    <Card sx={{ maxWidth: "150px", height: "150px", visibility: "visible", margin: "10px", }}>
                                        <CardMedia
                                            component="img"
                                            width="200px"
                                            image="https://larepublica.pe/resizer/Kr3zhhu5e0lXlwx0w9UFd8-tHrA=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/YUR6TURFBVAJPLJDSI7EDYJHCM.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                6 Oeufs
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ maxWidth: "150px", height: "150px", visibility: "visible", margin: "10px", }}>
                                        <CardMedia
                                            component="img"
                                            width="100%"
                                            image="https://nouvellesgastronomiques.com/wp-content/uploads/2022/01/lait6.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Lait
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>


                        </div>
                    </Skeleton>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {

    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;