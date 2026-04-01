const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const User = require('./src/UserModel');
const Exercise = require('./src/ExerciseModel');
require('dotenv').config();

// Banco de dados 
const mongoUri = process.env.MONGO_URI; 
mongoose.connect(mongoUri);

// Middleware de BodyParser
app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post("/api/users", (req, res) => {
  let usernameBody = req.body.username

  User.findOne({username: usernameBody})
    .then(doc => {
      // Se encontrar o user
      if (doc) {
        return res.json({username: doc.username, _id: doc._id});
      }

      //Se não encontrar o user
      User.create({username: usernameBody})
        .then( doc => {
          doc.save()
          res.json({username: doc.username, _id: doc._id})
        })
        .catch( err => console.log("Erro ao criar user: ", err))
      
    })
    .catch(err => console.log("Erro ao procurar username:", err));
});

app.get("/api/users", (req, res) => {
  // Lista de todos os users
  User.find({})
    .then(users => res.send(users))
    .catch(err => console.log("Erro ao carregar lista de users:", err))
});

// Adicionar exercício
app.post("/api/users/:_id/exercises", (req, res) => {
  // Pegar variáveis do body
  let idBody = req.params._id;
  let descriptionBody = req.body.description;
  let durationBody = req.body.duration;
  let dateBody = req.body.date || new Date();

  // Criar exercício
  Exercise.create({
    user: idBody,
    description: descriptionBody,
    duration: durationBody,
    date: dateBody
  })
    .then( doc => {
      doc.save();
      
      doc.populate('user').
        then( doc => res.json({
          username: doc.user.username,
          description: doc.description,
          duration: doc.duration,
          date: doc.date.toDateString(),
          _id: doc.user._id
        }))
    })
    .catch( err => console.log(err));
  
});

// Acessar lista log de exercícios
app.get("/api/users/:_id/logs", async (req, res) => {

  const queryFrom = req.query.from;
  const queryTo = req.query.to;
  const queryLimit = req.query.limit;
  const paramsId = req.params._id;

  // Descobrir user
  let userFound = await User.findById(paramsId);

  if (!userFound) return res.json({error: "User not found"});

  // Descobrir exercícios do user
  let filters = {user: paramsId};

  if (queryFrom || queryTo) {
    filters.date = {};
    if (queryFrom) filters.date.$gte = queryFrom;
    if (queryTo) filters.date.$lte = queryTo;
  }

  let exercises = await Exercise.find(filters).limit(queryLimit);
  
  let formattedLog = exercises.map(ex =>{ 

    return ({
      description: ex.description,
      duration: ex.duration,
      date: ex.date.toDateString()
    })
  });

  console.log(formattedLog)
  // Mostrar o log na página
  res.json({
    username: userFound.username,
    count: exercises.length,
    _id: paramsId,
    log: formattedLog
  })
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

