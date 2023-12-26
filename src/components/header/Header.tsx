import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, WrapItem } from "@chakra-ui/react";
import { FC } from "react";


const Header: FC = () => {
    return (
        <Flex w={'full'} gap={2} px={10} py={4} alignItems={'center'} justifyContent={'space-between'} shadow={'xs'}>
            <button>
                <HamburgerIcon fontSize={"3xl"} />  
            </button>


            <Flex alignItems={'center'}>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button} padding={0}
                                bg={'none'}
                                _hover={{ bg: 'none' }}  // Establece el fondo a none en estado hover
                                _active={{ bg: 'none' }}
                                h={'full'}
                            >
                                <WrapItem>
                                    <Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>
                            </MenuButton>


                            <MenuButton isActive={isOpen} as={Button} padding={0}
                                bg={'none'}
                                _hover={{ bg: 'none' }}  // Establece el fondo a none en estado hover
                                _active={{ bg: 'none' }}
                                h={'full'}
                                color={'white'}
                                rightIcon={<ChevronDownIcon />}
                            >
                                Admin

                            </MenuButton>


                            <MenuList bg={'#1e293b'} minWidth={'150px'} borderColor={"slategrey"} mt={'15px'}>

                                <MenuItem bg={'none'} _hover={{ bg: '#2d3448' }}>Profile</MenuItem>
                                <MenuItem bg={'none'} onClick={() => alert('Kagebunshin')}
                                    _hover={{ bg: '#2d3448' }}
                                    transitionDuration={'.1s'}
                                > Settings</MenuItem>

                                <Box borderTop={'1px'} borderColor={"slategrey"}>
                                    <MenuItem bg={'none'} color={'red'} onClick={() => alert('Kagebunshin')}
                                        _hover={{ bg: '#2d3448' }}
                                    >Logout</MenuItem>
                                </Box>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
        </Flex >
    )
}

export default Header