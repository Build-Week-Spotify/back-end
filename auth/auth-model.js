const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    findByFilter,
    add,
    update
}

function find(){
    return db('users')
}

function findById(id){
    return db('users').where({id}).first()
}

function findByFilter(filter) {
    return db('users').where(filter).orderBy('id')
}

async function add(user) {
    // const [id] = await db('users').insert(user);
  
    // return findById(id);
    const [newUser] = await db('users').insert(user, '*');
  
    return newUser;
  }

  function update(changes, id){
    return db('users')
    .update(changes)
    .where({id})
}

// async function add(user) {
//     try{
//         const [id] = await db('users').insert(user, 'id')
//         return findById(id)
//     } catch(error) {
//         throw error
//     }
// }