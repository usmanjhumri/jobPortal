import { Box, Container, Grid } from "@mui/material";
import "./News&Blogs.css";


function NewsandBlogs() {
    return (
        <>
            <Box>
                <Container>
                    <Grid container sx={{ margin: "auto" }}>
                        <Grid item xs={12} md={4}>
                            <Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>Hi this is Usman Latif from chak jhumra</Grid>
                        <Grid item xs={12} md={4}>Hi this is Usman Latif from chak jhumra</Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    )
}

export default NewsandBlogs