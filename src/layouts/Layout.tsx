import { Box, Flex } from "@chakra-ui/react";
import Header from "@root/components/header/Header";
import Sidebar from "@root/components/sidebar/sidebar";
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Flex bg={'#1e293b'} color={'white'}>
            <Sidebar />

            <Box w={'100%'}>
                <Header />

                <Box bg={'#1d222e'} p={6} height={`calc(100vh - 64px)`}>  
                    {children}
                </Box>
            </Box>
        </Flex >
    )
}

export default Layout