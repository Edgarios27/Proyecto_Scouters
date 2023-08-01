import mongoose from 'mongoose'
const url = 'mongodb://127.0.0.1:27017/Scouters'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', () => {console.log(' Estas Conectado a MongoDB y lo sabes')})
db.on('error', () => {console.log('Error al conectar a Mongo DB')})

export default db



