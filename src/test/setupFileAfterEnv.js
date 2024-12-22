import mongoose from 'mongoose'
import { initDatabase } from '../db/init'
import { beforeAll, afterAll } from '@jest/globals'

beforeAll(async () => {
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
})
