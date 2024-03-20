import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>About Page</Typography>
            <Typography component="p">This is a Todo List Application using the following stack:</Typography>
            <Typography component="li">Frontend Library: React</Typography>
            <Typography component="li">Runtime: NodeJS</Typography>
            <Typography component="li">Server-Side Routing: ExpressJS</Typography>
            <Typography component="li">Database: MongoDB</Typography>
            <Typography component="li">Data Fetching/Caching: Tanstack Query</Typography>
            <Typography component="li">Request Handling: Axios</Typography>
            <Typography component="li">Client-Side Routing: Tanstack Router</Typography>
            <Typography component="li">UI Library: Material UI</Typography>
            <Typography component="li">Data Validation: Zod</Typography>
            <Typography component="p" paddingTop={3}>Developed by Justin Howard</Typography>
        </Paper>
    )
}