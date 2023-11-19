import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Icon01 from '../assets/icon-01.svg'
import Icon02 from '../assets/icon-02.svg'
import Icon03 from '../assets/icon-03.svg'
import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";

const Features = () => {
    return (
        <Box width="100vw" minHeight="430px" height="auto" sx={{ backgroundColor: '#fff' }}>
            {/* <Respo> */}
            <ResponsiveContainer>
                <Box display="flex" flexDirection={{ sm: 'row', xs: 'column' }}  alignContent="center" justifyContent="center">
                    <Box width={{ sm: "33%", xs: '100%' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={4} mt={10} p="0 10px">
                        <img width={48} height={48} src={Icon01} />
                        <Typography variant="h4" fontWeight="bold" fontSize={22} textAlign="center">Fast work turnaround</Typography>
                        <Typography p="0 5px" textAlign="center">سرعت عجیب  باورنکردنی در تحویل پروژه. این یک متن تستی است لطفا ببینید  و بررسی کنید.</Typography>
                    </Box>
                    <Box width={{ sm: "33%", xs: '100%' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={4} mt={10} p="0 10px">
                        <img width={48} height={48} src={Icon02} />
                        <Typography variant="h4" fontWeight="bold" fontSize={22} textAlign="center">
                            Receive on time
                        </Typography>
                        <Typography p="0 5px" textAlign="center">سرعت عجیب  باورنکردنی در تحویل پروژه. این یک متن تستی است لطفا ببینید  و بررسی کنید.</Typography>
                    </Box>
                    <Box width={{ sm: "33%", xs: '100%' }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={4} mt={10} p="0 10px">
                        <img width={48} height={48} src={Icon03} />
                        <Typography variant="h4" fontWeight="bold" fontSize={22} textAlign="center">Fixed Price Projects</Typography>
                        <Typography p="0 5px" textAlign="center">سرعت عجیب  باورنکردنی در تحویل پروژه. این یک متن تستی است لطفا ببینید  و بررسی کنید.</Typography>
                    </Box>
                </Box>
            </ResponsiveContainer>
            {/* </Container> */}
        </Box>
    )
}

export default Features;