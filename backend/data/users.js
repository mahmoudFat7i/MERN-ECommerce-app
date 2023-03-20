import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'mahmoud',
        email: 'mahmoud@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'fathy',
        email: 'fathy@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users
