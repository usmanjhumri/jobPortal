import { Box, Container, Typography, Grid } from '@mui/material'
import PopularStyle from './PopularStyle';
import data from './PopularArray';
import './Popular.css'

const Popular = () => {
    return (
        <Box mt={6} pb={2}>
            <Typography variant='h4' sx={PopularStyle.category}>Popular Categories</Typography>
            <Typography sx={PopularStyle.expolre}>Explore our Job Portals to streamline your job search.
                From the cutting-edge world of Technology to the strategic realm of Finance</Typography>

            <Container maxWidth='lg' sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    {
                        data.map((dt, i) => {
                            return <Grid item md={4} sm={6} xs={12} key={i}>
                                <Box className="hoverBox" display='flex' alignItems='center' justifyContent='space-between' sx={{
                                    backgroundColor: '#fff',
                                    p: 2,
                                    height: '120px',
                                    '&:hover': {
                                        background: `url(https://care-job.vercel.app/_next/static/media/shape.db02af9b.png)`,
                                        transition: "all 0.5s ease"
                                    }
                                }}>
                                    <Box className="icon" sx={{
                                        color: '#26ae61',
                                        fontSize: '35px',
                                    }}> {dt.icon} </Box>
                                    <Box>
                                        <Typography variant='h6' sx={{
                                            color: '#1c2733',
                                            fontWeight: '700'

                                        }}> {dt.h1} </Typography>
                                        <Typography className='icon' sx={PopularStyle.subTitle}> {dt.p} </Typography>
                                    </Box>
                                    <Box className="arrowicon" sx={PopularStyle.arrowIcons}> {dt.arr} </Box>
                                </Box>

                            </Grid>
                        })
                    }
                </Grid>

            </Container>
        </Box>
    )
}

export default Popular