import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, Stack, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import CreateCategory from "../../../components/Modal/CreateCategory";

export default function Category() {
    return (
        <>

            <CreateCategory />

            <Card>
                <CardBody>
                    <TableContainer >
                        <Table size='sm'>
                            <Thead>
                                <Tr bgColor="#88AABF" >
                                    <Th textColor="#FFF">Id</Th>
                                    <Th textColor="#FFF">Titulo</Th>
                                    <Th textColor="#FFF">Descrição</Th>
                                    <Th textColor="#FFF">Cor</Th>
                                    <Th textColor="#FFF">Criado em</Th>
                                    <Th textColor="#FFF">Ações</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                <Tr key='1'>
                                    <Td>1</Td>
                                    <Td>Titulo</Td>
                                    <Td>Descrição</Td>
                                    <Td><Tag size={'md'} variant='solid' colorScheme='blue'>Azul</Tag></Td>
                                    <Td>Criado em</Td>
                                    <Td>
                                        <Stack spacing={2} direction='row' align='center'>
                                            <Button leftIcon={<DeleteIcon />} colorScheme='red' size='xs'>
                                                Apagar
                                            </Button>
                                            <Button onClick={() => console.log('editar')} leftIcon={<EditIcon />} colorScheme='telegram' size='xs'>
                                                Editar
                                            </Button>
                                        </Stack>
                                    </Td>
                                </Tr>

                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </>
    );
}