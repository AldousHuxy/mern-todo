import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Navbar } from '../components/Navbar'
import Container from '@mui/material/Container'

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <Container sx={{ p: 3 }}>
                <Outlet />
            </Container>
            <TanStackRouterDevtools />
        </>
    ),
})