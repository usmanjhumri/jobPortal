import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../components/SignUp/SignUpStyle';
// import './contactus.css'
import TextImg from '../../assets/hometextBG.png'
import '../Home/Home.css'
import { FaMapMarkerAlt } from "react-icons/fa";


const ContactUs = () => {
    return (
        <>
            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <span className='circle'></span>
                            <span className='circle circle-yellow'></span>
                            <span className='shape-plus'>+</span>
                        </Box>
                        <Box sx={{
                            position: "absolute",
                            left: "16%",
                            top: "30%",
                            display: { md: "block", xs: "none" }
                        }}>
                            <Box component="img" maxWidth="100%" src={TextImg} />
                        </Box>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    Contact Us
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Contact Us</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Container>
            </Box>
            <Box>
                <Container className='containerBox'>
                    <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
                        <Typography>
                            CONTACT US
                        </Typography>
                        <Typography>
                            We Would Love To Hear From You!
                        </Typography>
                    </Box>
                    <Grid container sx={{ margin: "auto" }}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                gap: 2
                            }}>
                                <Box>

                                    <FaMapMarkerAlt style={{
                                        background: "#26ae61",
                                        fontSize: "40px",
                                        color: "#FFFFFF",
                                        border: "5px solid #51be81",
                                        borderRadius: "50%"
                                    }} />
                                </Box>
                                <Box>
                                    <Typography component='h4'>
                                        Location
                                    </Typography>
                                    <Typography sx={{
                                        maxWidth: "60%",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        lineHeight: "28px",
                                        color: "#667488"
                                    }}>
                                        205 Main Street, 2nd - Floor,
                                        D - Block, New York
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>hi this is usman latif</Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs