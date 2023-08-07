// https://color.adobe.com/pt/search?q=desert

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Button,
} from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import CreatePray from '../../components/Modal/Create';
import { ViewIcon } from '@chakra-ui/icons';

export default function Home() {

    interface PrayProps {
        id: number,
        title: string,
        description: string,
        category: string,
        created_at: string
    }

    const localData: PrayProps[] = [
        { id: 1, title: "A", description: "descrição do A", category: "Categoria 1", created_at: '2023-06-01' },
        { id: 2, title: "B", description: "descrição do B", category: "Categoria 2", created_at: '2023-06-01' },
        { id: 3, title: "C", description: "descrição do C", category: "Categoria 3", created_at: '2023-06-01' },
        { id: 4, title: "D", description: "descrição do D", category: "Categoria 4", created_at: '2023-06-01' },
        { id: 5, title: "E", description: "descrição do E", category: "Categoria 5", created_at: '2023-06-01' },
        { id: 6, title: "F", description: "descrição do F", category: "Categoria 6", created_at: '2023-06-01' },
        { id: 7, title: "G", description: "descrição do G", category: "Categoria 7", created_at: '2023-06-01' },
        { id: 8, title: "H", description: "descrição do H", category: "Categoria 8", created_at: '2023-06-01' },
        { id: 9, title: "I", description: "descrição do I", category: "Categoria 9", created_at: '2023-06-01' },
    ];

    return (
        <>
            <CreatePray />

            <Card>
                <CardBody>
                    <TableContainer>
                        <Table size='md'>
                            <Thead>
                                <Tr bgColor="#88AABF" >
                                    <Th textColor="#FFF">Id</Th>
                                    <Th textColor="#FFF">Título</Th>
                                    <Th textColor="#FFF">Descrição</Th>
                                    <Th textColor="#FFF">Categoria</Th>
                                    <Th textColor="#FFF">Criado em</Th>
                                    <Th textColor="#FFF">Ações</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    localData.map((PrayProps) => {
                                        return (
                                            <Tr key={PrayProps.id}>
                                                <Td>{PrayProps.id}</Td>
                                                <Td>{PrayProps.title}</Td>
                                                <Td>{PrayProps.description}</Td>
                                                <Td>{PrayProps.category}</Td>
                                                <Td>{PrayProps.created_at}</Td>
                                                <Td>
                                                    <Stack spacing={2} direction='row' align='center'>
                                                        <Button leftIcon={<ViewIcon />} colorScheme='purple' size='xs'>
                                                            Orar
                                                        </Button>
                                                    </Stack>
                                                </Td>
                                            </Tr>
                                        );
                                    }
                                    )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </>
    );
}