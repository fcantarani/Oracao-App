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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import CreatePray from '../../components/Modal/CreatePray';

export default function Home() {
    const [praying, setPraying] = useState(false);

    interface Pray {
        id: number,
        title: string,
        description: string,
        category: string,
        created_at: string,
        hasPray: boolean
    }

    const localData: Pray[] = [
        { id: 1, title: "A", description: "descrição do A", category: "Categoria 1", created_at: '2023-06-01', hasPray: true },
        { id: 2, title: "B", description: "descrição do B", category: "Categoria 2", created_at: '2023-06-01', hasPray: false },
        { id: 3, title: "C", description: "descrição do C", category: "Categoria 3", created_at: '2023-06-01', hasPray: true },
        { id: 4, title: "D", description: "descrição do D", category: "Categoria 4", created_at: '2023-06-01', hasPray: true },
        { id: 5, title: "E", description: "descrição do E", category: "Categoria 5", created_at: '2023-06-01', hasPray: false },
        { id: 6, title: "F", description: "descrição do F", category: "Categoria 6", created_at: '2023-06-01', hasPray: false },
        { id: 7, title: "G", description: "descrição do G", category: "Categoria 7", created_at: '2023-06-01', hasPray: false },
        { id: 8, title: "H", description: "descrição do H", category: "Categoria 8", created_at: '2023-06-01', hasPray: true },
        { id: 2, title: "B", description: "descrição do B", category: "Categoria 2", created_at: '2023-06-01', hasPray: false },
        { id: 3, title: "C", description: "descrição do C", category: "Categoria 3", created_at: '2023-06-01', hasPray: true },
        { id: 4, title: "D", description: "descrição do D", category: "Categoria 4", created_at: '2023-06-01', hasPray: true },
        { id: 5, title: "E", description: "descrição do E", category: "Categoria 5", created_at: '2023-06-01', hasPray: false },
        { id: 6, title: "F", description: "descrição do F", category: "Categoria 6", created_at: '2023-06-01', hasPray: false },
        { id: 7, title: "G", description: "descrição do G", category: "Categoria 7", created_at: '2023-06-01', hasPray: false },
        { id: 8, title: "H", description: "descrição do H", category: "Categoria 8", created_at: '2023-06-01', hasPray: true },
        { id: 9, title: "I", description: "descrição do I", category: "Categoria 9", created_at: '2023-06-01', hasPray: true },
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
                                    localData.map((Pray) => {
                                        return (
                                            <Tr key={Pray.id}>
                                                <Td>{Pray.id}</Td>
                                                <Td>{Pray.title}</Td>
                                                <Td>{Pray.description}</Td>
                                                <Td>{Pray.category}</Td>
                                                <Td>{Pray.created_at}</Td>
                                                <Td>
                                                    <Stack spacing={2} direction='row' align='center'>
                                                        {praying == true ?
                                                            <Button onClick={() => setPraying(!praying)} leftIcon={<ViewIcon />} colorScheme='purple' size='xs'>
                                                                Começar a Orar
                                                            </Button>
                                                            :
                                                            <Button onClick={() => setPraying(!praying)} leftIcon={<ViewOffIcon />} colorScheme='orange' size='xs'>
                                                                Deixar de Orar
                                                            </Button>
                                                        }
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