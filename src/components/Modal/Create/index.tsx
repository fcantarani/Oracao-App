import { PlusSquareIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, useDisclosure } from "@chakra-ui/react"

export default function CreatePray() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>

            <Flex marginBottom={4}>
                <Spacer />
                <Box>
                    <Button onClick={onOpen} leftIcon={<PlusSquareIcon />} colorScheme='green' size='sm'>
                        Criar
                    </Button>
                </Box>
            </Flex>

            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}