# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Post.create([{
    date: Faker::Date.between(60.days.ago, 51.days.ago),
    context: Faker::Job.key_skill,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(180, 3.0)
    }])
end

10.times do
  Post.create([{
    date: Faker::Date.between(50.days.ago, 41.days.ago),
    context: Faker::StarWars.quote,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(180, 3.0)
    }])
end

10.times do
  Post.create([{
    date: Faker::Date.between(40.days.ago, 31.days.ago),
    context: Faker::Superhero.power,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(180, 3.0)
    }])
end

10.times do
  Post.create([{
    date: Faker::Date.between(30.days.ago, 21.days.ago),
    context: Faker::ChuckNorris.fact,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(175, 3.0)
    }])
end

10.times do
  Post.create([{
    date: Faker::Date.between(20.days.ago, 11.days.ago),
    context: Faker::Simpsons.quote,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(170, 3.0)
    }])
end

10.times do
  Post.create([{
    date: Faker::Date.between(10.days.ago, Date.today),
    context: Faker::FamilyGuy.quote,
    food: Faker::Food.dish,
    workout: Faker::Team.sport,
    weight: Faker::Number.normal(165, 3.0)
    }])
end
