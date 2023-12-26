import { useState, type FC } from 'react'
import { Button, Container, FormControl, FormErrorMessage, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const containerLogin = {
    bg: '#000017',
    w: '100vw',
    h: '100vh',
    p: '30px'
}

interface LoginFormInput {
    email: string;
    password: string;
}

const Login: FC = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { handleSubmit, register, formState: { errors } } = useForm<LoginFormInput>();

    const onSubmitLogin = (data: LoginFormInput) => {
        console.log(data)
    }

    return (
        <VStack sx={containerLogin} align={'stretch'} justify={'center'} >
            <Container bg={'InfoBackground'} alignItems={'center'} maxW={'400px'} borderRadius={'10px'} p={'20px'} gap={'4px'} >
                <Heading textAlign={'center'} color={'#7928CA'} fontWeight={'bold'} >Welcome Back!</Heading>
                <Text py={4} textAlign={'center'}>Sign in to continue to Hms</Text>

                <form onSubmit={handleSubmit(onSubmitLogin)} autoComplete='off'>

                    <Stack spacing={4}>
                        <FormControl isInvalid={errors.email != null}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='' />
                                </InputLeftElement>

                                <Input type='email' placeholder='Ingrese su email...'
                                    {...register('email', { required: "El email es obligatorio." })}
                                />
                            </InputGroup>
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.password != null}>
                            <InputGroup size='md'>
                                <InputLeftElement pointerEvents='none'>
                                    <LockIcon color='b.300' />
                                </InputLeftElement>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Ingrese su contraseña...'
                                    {...register('password', { required: "La contraseña es obligatoria." })}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='md' onClick={handleClick} bg={'none'} colorScheme='whiteAlpha'
                                        color={'blackAlpha.900'}
                                    >
                                        {show ? < ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                        </FormControl>


                        <Button
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            variant='outline' type='submit' mt={4}
                            colorScheme='white'
                            color={'white'}
                        >
                            Iniciar Sesión
                        </Button>
                    </Stack>

                </form>

            </Container>
        </VStack>
    )
}

export default Login