import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contato/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contato/"!</div>
}
