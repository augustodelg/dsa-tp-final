# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = Role.create(name: "admin")
user = Role.create(name: "user")
picante = Role.create(name: "Kevin Mitnick")
flag = Role.create(name: "flag{User_Boton}")


User.create(username: "admin", first_name: "admin", last_name: "admin", age: 999, password: "admin", role_id: admin.id)
User.create(username: "user", first_name: "user", last_name: "user", age: 0, password: "La FLAG es mia pero no te voy a decir donde la tengo", role_id: flag.id)
User.create(username: "picante", first_name: "Kevin", last_name: "Mitnick", age: "32", password: "picante", role_id: picante.id)
User.create(username: "etilgonza", first_name: "Gonzalo", last_name: "Caminos", age: 40, password: "AlaGrandeLePuseCuca", role_id: user.id)
User.create(username: "garmendia", first_name: "German", last_name: "Namreg", age: 25, password: "AlaGrandeLePuseCuca25", role_id: user.id)
User.create(username: "taca", first_name: "Augusto", last_name: "Ossorg Eld", age: 23, password: "AlaGrandeLePuseCucaElD", role_id: user.id)
User.create(username: "garmendia", first_name: "German", last_name: "Namreg", age: 25, password: "AlaGrandeLePuseCuca25", role_id: user.id)

