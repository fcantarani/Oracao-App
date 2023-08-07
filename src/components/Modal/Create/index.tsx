import { PlusSquareIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Textarea, useDisclosure } from "@chakra-ui/react"




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
                    <ModalHeader>Cadastrando oração</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Título</FormLabel>
                            <Input name='title' placeholder='Título' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                name='description'
                                placeholder='Descrição detalhada do seu pedido'
                                size='sm'
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Categoria</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
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