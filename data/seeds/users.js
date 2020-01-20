
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Denise', password: 'password', role: 'Student' },
        {id: 2, username: 'John', password: 'password', role: 'Student'},
        {id: 3, username: 'Gabriel', password: 'password', role: 'Student' }
      ]);
    });
};
