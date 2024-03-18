const HomeStyle = {
    mainBox: {
        backgroundImage: `url('https://care-job.vercel.app/_next/static/media/01.9a03b3fb.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        minHeight: "750px",
        width: '100%',

    },

    containerBox: {
        // position: 'absolute',
        top: '50%',
        left: '30%'
    },
    TypoColor: {
        color: 'white',
        transform: 'translate(-50%, -50%)',
    },
    SelectBox: {
        backgroundColor: 'white',
        borderRadius: '28px',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    findJobs: {
        borderRadius: '28px',
        px: 9,
        background: '#26ae61',
        textTransform: 'capitalize',
        display: 'flex',
        width: '100%',
        py: 2
    },
    dreamJobs: {
        fontSize: { md: "55px", xs: "30px" },
        fontWeight: 500,
        color: "#FFFFFF",
        lineHeight: 1.2,
    }
}
export default HomeStyle