import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Container maxW='container.lg' marginTop={5} >
                <Outlet />
            </Container>
        </>
    );
}