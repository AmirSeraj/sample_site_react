import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    customButton: {
        borderRadius: 5,
        fontWeight: 'bold',
        transition: '#81ecec 0.3s, #636e72 0.3s',
        '&:hover': {
            backgroundColor: '#00cec9',
            // color: '#2d3436'
            color: theme.palette.common.white,
        }
    }
}))

const CustomButton = ({ label }) => {
    const classes = useStyles();
    return (
        <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.customButton}
        >
            {label}
        </Button>
    )
}

export default CustomButton;