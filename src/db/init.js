import mongoose from 'mongoose'
export function initDatabase() {
  // const DATABASE_URL = 'mongodb://172.17.0.2:27017/blog'
  const DATABASE_URL = process.env.DATABASE_URL
  mongoose.connection.on('open', () => {
    console.info('Successfully connected to database')
  })
  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
