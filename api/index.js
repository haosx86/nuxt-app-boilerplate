import express from 'express'

import usersRoute from './routes/users'

// Create express instnace
const app = express()

// Import API Routes
app.use('/users', usersRoute)

// Error handler
app.use((err, req, res) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(`${err}`)
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
