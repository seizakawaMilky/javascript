const express = require('express')
const ProjectController = require('./controllers/projectController')
const TaskController = require('./controllers/taskController')
const UserController = require('./controllers/userController')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/projects', ProjectController.insert)
app.get('/projects', ProjectController.findAll)
app.put('/projects/:id', ProjectController.update)
app.delete('/projects/:id', ProjectController.delete)

app.post('/tasks', TaskController.insert)
app.get('/tasks', TaskController.findAll)
app.put('/tasks/:id', TaskController.update)
app.delete('/tasks/:id', TaskController.delete)

app.post('/users', UserController.insert)
app.get('/users', UserController.findAll)
app.put('/users/:id', UserController.update)
app.delete('/users/:id', UserController.delete)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})