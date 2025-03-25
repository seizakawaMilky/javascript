const User = require('../models/user')

class UserController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body

        const user = new User(id, nome, email, senha)
        user.save()

        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.fetchAll()

        res.json(users)
    }

    static delete(req, res) {
        const { id } = req.params
        const excluido = User.deleteById(id)

        if (excluido) {
            res.status(200).json({ message: 'Usuário deletado' })
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }

    static update(req, res) {
        const { id } = req.params
        const { nome, email, senha } = req.body

        const atualizado = User.updateById(id, { nome, email, senha })

        if (atualizado) {
            res.status(200).json({ message: 'Usuário atualizado' })
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' })
        }
    }
}

module.exports = UserController
