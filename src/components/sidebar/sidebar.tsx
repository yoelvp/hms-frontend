import { Box, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Header from "./header";
import NavLink from "./nav-link";

const Sidebar: FC = () => {
    return (
        <Box w={'250px'} h={'max-content'}>

            <Header />

            <Stack overflowY={'scroll'} p={6} height={`calc(100vh - 64px)`}>
                <nav>
                    <ul>
                        <li>
                            <NavLink href="#" label="Clientes" />
                        </li>
                        <li>
                            <NavLink href="#" label="Clientes" />
                        </li>
                        <li>
                            <NavLink href="#" label="Clientes" />
                        </li>
                        <li>
                            <NavLink href="#" label="Clientes" />
                        </li>
                        <li>
                            <NavLink href="#" label="Clientes" />
                        </li>
                        
                    </ul>
                </nav>
            </Stack>
        </Box>
    )
}


export default Sidebar