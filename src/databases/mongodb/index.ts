import { MongoClient } from 'mongodb'

export default () =>
  MongoClient.connect('mongodb://mongodb:27017')
    .then(client => {
      console.log('Connected to MongoDB!')
      const db = client.db('db-fun')
      console.log('🗃️', db)
      client.close()
    })
    .catch(console.error)
