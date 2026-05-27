import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projetos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projetos/"!</div>
}
