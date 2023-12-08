import type { FC } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import Routing from '@root/router/Routing'

const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ChakraProvider>
        <CSSReset />
        <Routing />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
