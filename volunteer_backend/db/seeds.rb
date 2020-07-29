# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Task.destroy_all
Classification.destroy_all

#Users
andrew = User.create(username:"Andrew", password:"123", state: "NY", city: "Garden City", profile_pic: "https://boygeniusreport.files.wordpress.com/2015/08/darth-vader.jpg?quality=70&strip=all&w=1564" )
scott = User.create(username:"Scott", password:"123", state: "NY", city: "Garden City", profile_pic: "https://www.danezon.com/wp-content/uploads/2019/11/Star-Wars-Leather-Luke-Skywalker-Bespin-Jacket-510x638.jpg")
kelly = User.create(username:"Kelly", password:"123", state: "NY", city: "Garden City", profile_pic: "https://i.pinimg.com/474x/36/4d/03/364d03a9747b410bd5ec88f98f8a1e01--easy-halloween-costumes-awesome-costumes.jpg")
sara = User.create(username:"Sara", password:"123", state: "NY", city: "Garden City", profile_pic: "https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F01%2FSTARWARS_EP3_008_L-936x482-850x482.jpg")

#Classifications
food = Classification.create(name:"Food")
housework = Classification.create(name:"Housework")
errand = Classification.create(name:"Errand")
personal = Classification.create(name:"Personal")
transportation = Classification.create(name:"Transportation")
miscellaneous = Classification.create(name:"Miscellaneous")

#Tasks No TASK_DOER
andrewTask1 = Task.create(description:"Andrew needs help getting groceries", task_creator_id: andrew.id, classification_id: food.id, state: "NY", city: "Garden City")
scottTask1 = Task.create(description:"Scott is sick and can't walk his dog", task_creator_id: scott.id, classification_id: housework.id, state: "NY", city: "Garden City")
kellyTask1 = Task.create(description:"Kelly is stuck in the hospital. Needs real food.", task_creator_id: kelly.id, classification_id: errand.id, state: "NY", city: "Garden City")
saraTask1 = Task.create(description:"Sara is unable to mow her lawn.", task_creator_id: sara.id, classification_id: personal.id, state: "NY", city: "Garden City")

#Tasks Yes TASK_DOER

andrewTask2 = Task.create(description:"Andrew needs help building the lego Death Star", task_creator_id: andrew.id, task_doer_id: scott.id, classification_id: transportation.id, state: "NY", city: "Garden City", status: 2)
scottTask2 = Task.create(description:"Scott just needs attention", task_creator_id: scott.id, task_doer_id: kelly.id, classification_id: miscellaneous.id, state: "NY", city: "Garden City", status: 2)
kellyTask2 = Task.create(description:"Kelly needs transportation somewhere.", task_creator_id: kelly.id,  task_doer_id: sara.id, classification_id: food.id, state: "NY", city: "Garden City", status: 2)
saraTask2 = Task.create(description:"Sara fell down a well.", task_creator_id: sara.id,  task_doer_id: andrew.id, classification_id: housework.id, state: "NY", city: "Garden City", status: 2)




p "Seed data loaded"
