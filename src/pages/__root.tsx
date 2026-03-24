import * as React from 'react'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { title: 'Início - SyntaxWear' }
    ]
  })
})

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
    </React.Fragment>
  )
}
