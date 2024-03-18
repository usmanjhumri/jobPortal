import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../../components/SignUp/SignUpStyle';
// import './contactus.css'
import TextImg from '../../assets/hometextBG.png'
import '../Home/Home.css'


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
                    <Box>
                        <Typography>
                            CONTACT US
                        </Typography>
                        <Typography>
                            We Would Love To Hear From You!
                        </Typography>
                    </Box>
                    <Grid container sx={{ margin: "auto" }}>
                        <Grid item xs={12} md={4}>

                        </Grid>
                        {/* <Grid item xs={12} md={8}>hi this is usman latif</Grid> */}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs