 const Recipe = require('../models/Recipe')
 const mongoose = require('mongoose')

 const recipes = [
    {
        title: 'new',
        subtitle: 'new-one' ,
        ingredients: ['adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa'] ,
        directions: ['adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa','adsfasdfasd', 'adfdsaffdsa'] ,
        totalTime: '32 mins' ,
        prepTime: '40 mins',
        category: '6429bc0000bd40bbf5a9bc65',
        mealtype: '6429dea62d4c8bdeaea96e85',

 }
]

class RecipesSeeder extends Seeder {

  async shouldRun() {
    const usersCount =  await Recipe.count().exec();

    return recipesCount === 0;
  }

  async run() {
    return Recipe.create(recipes);
  }
}

export default UsersSeeder;


/*
 import { Seeder } from 'mongoose-data-seed';
import { User } from '../server/models';

const data = [{
  email: 'user1@gmail.com',
  password: '123123', password_confirmation: '123123',
  isAdmin: true
}, {
  email: 'user2@gmail.com',
  password: '123123', password_confirmation: '123123',
  isAdmin: false
}];

class UsersSeeder extends Seeder {

  async shouldRun() {
    const usersCount =  await User.count().exec();

    return usersCount === 0;
  }

  async run() {
    return User.create(data);
  }
}

export default UsersSeeder;
*/