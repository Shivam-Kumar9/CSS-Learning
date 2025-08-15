import { Box,Button,Flex,Grid, Heading , AspectRatio , Image, Badge } from '@chakra-ui/react'
import React from 'react'
 
export default function App() {
  const data = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$435",
  reviewCount: 34,
  rating: 4.5,
}
   return (<>
          <Box maxW={'sm'} borderWidth={'1px'} borderRadius={'lg'} overflow={'hidden'}>
              <Image src={data.imageUrl} alt={data.imageAlt} />
              <Box p={'6'}>
                <Box display={'flex'} alignItems={'baseline'}>
                   <Badge borderRadius={'full'} px='3' colorPalette={'teal'}> new </Badge>  
                 </Box>
                 <Box color={'gray.500'} fontWeight={'semibold'} letterSpacing={'wide'} fontSize={'xs'} textTransform={'uppercase'} ml={'2'}>
                  {data.beds} Beds & bull {data.baths} baths
                 </Box>
                 <Box mt={'1'} fontFamily={'semibold'} as='h4' lineHeight={'tight'} noOfLines={1}>
                  {data.title}
                  </Box>
                  <Box>
                    {data.formattedPrice}
                  <Box as={'span'} color={"gray.600"} fontSize={'sm'}>
                  /wk
                  </Box>
                  </Box>
                 
              </Box>

          </Box>  
         </>)
}
