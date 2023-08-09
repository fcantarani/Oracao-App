import { PlusSquareIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Textarea, useDisclosure } from "@chakra-ui/react"

export default function CreateType() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>

            <Flex marginBottom={'4'}>
                <Spacer />
                <Box>
                    <Button onClick={onOpen} leftIcon={<PlusSquareIcon />} colorScheme='green' size='sm'>
                        Criar
                    </Button>
                </Box>
            </Flex>

            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar Tipo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Tipo</FormLabel>
                            <Input name='title' placeholder='Título' size={'sm'} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea
                                name='description'
                                placeholder='Descrição da categoria'
                                size={'sm'}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cor</FormLabel>
                            <Input
                                type={'color'}
                                name='color'
                                size={'sm'}
                            />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" size={'sm'} mr={3} onClick={onClose}>Cancelar</Button>
                        <Button colorScheme='blue' size={'sm'}>
                            Salvar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}