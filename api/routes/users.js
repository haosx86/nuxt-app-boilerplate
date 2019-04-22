import { Router } from 'express'
import bodyParser from 'body-parser'
import { wrap as asyncMiddleware } from 'async-middleware'

import usersDataset from '../models/usersModel'

// const jsonParser = bodyParser.json()

const router = Router()

router.get('/', asyncMiddleware(async (req, res) => {
  res.status(200).json(
    await usersDataset.find({})
  )
}))

export default router
