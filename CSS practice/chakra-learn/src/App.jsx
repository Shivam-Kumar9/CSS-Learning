import { Box,Flex,Grid } from '@chakra-ui/react'
import React from 'react'

export default function App() {
  return (<Grid  >
             <Box m={0} p={2} color='gray.500' boxShadow={'1px 5px green'}  bgGradient="to-l" gradientFrom="red.300" gradientTo="blue.200">
             Context of chakra ui tutorial
            </Box>
            <Box fontFamily={'cursive'} textShadow={'1px 2px 3px'} fontSize={20}  w='300px'  borderWidth="2px"  borderColor='red.300' borderStyle={'dashed'} >
                Context of chakra ui tutorial
             </Box>
         </Grid>)
}
