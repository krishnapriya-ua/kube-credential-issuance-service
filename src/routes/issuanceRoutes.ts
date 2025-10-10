import express from 'express'
const router = express()
import {IssueCredential} from '../controllers/issuanceController.js'

router.post('/issue',IssueCredential)

export default router