import { Box, Container, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../SignUp/SignUpStyle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const About = () => {
    return (
        <>
            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    Login
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Login</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default About