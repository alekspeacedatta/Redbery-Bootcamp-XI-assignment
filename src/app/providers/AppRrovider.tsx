import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const client = new QueryClient()

const AppProvider = ({ children }: Props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default AppProvider