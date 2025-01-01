import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './Blog.jsx'

export function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <Blog />
    </QueryClientProvider>
  )
}
