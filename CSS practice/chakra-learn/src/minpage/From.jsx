 
import "./App.css";
import {
  Field,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" p="10">
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
          <VStack spacing={2} align="flex-start">
            <Heading>Your Details</Heading>
            <Text>If you already have an account click here to log in</Text>
          </VStack>

          <SimpleGrid columns={2} columnGap={3} rowGap={4}>
            <GridItem colSpan={1}>
              <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input placeholder="Enter first name "></Input>
              </Field.Root>
            </GridItem>

            <GridItem colSpan={1}>
              <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input placeholder="Enter last name "></Input>
              </Field.Root>
            </GridItem>

            <GridItem colSpan={2}>
              <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <textarea placeholder="Enter your address... "></textarea>
              </Field.Root>
            </GridItem>

            <GridItem colSpan={1}>
              <Field.Root>
                <Field.Label>City Name</Field.Label>
                <Input placeholder="Enter last name "></Input>
              </Field.Root>
            </GridItem>
            <GridItem colSpan={1}>
              <Field.Root>
                <Field.Label>Country</Field.Label>
                <select placeholder="Select Country" width="100%">
                  {/* <option value='' selected disabled>Select Country</option> */}
                  <option value="India">India</option>
                  <option value="China">China</option>
                </select>
              </Field.Root>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox.Root>
                <Checkbox.Control />
                <Checkbox.HiddenInput />
                <Checkbox.Label>Ship to the billing adress</Checkbox.Label>
              </Checkbox.Root>
            </GridItem>

                        <GridItem colSpan={2}>
         <Button w='full'>Place Items</Button>     
            </GridItem>
          </SimpleGrid>
        </VStack>

        <VStack
          bg="gray.200"
          w="full"
          h="full"
          p={10}
          spacing={10}
          align="flex-start"
        ></VStack>
      </Flex>
    </Container>
  );
}

export default App;
