const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
   return console.log('Unable to connect to the MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
      // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
      //   console.log(result);
      // });

  // deleteOne
      // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
      //   console.log(result);
      // });

  // findeOneAndDelete
      // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      //   console.log(result);
      // });

      // db.collection('Users').deleteMany({name: 'Jarrad Wild'}).then((result) => {
      //   console.log(result);
      // });

      db.collection('Users').findOneAndDelete({_id: new ObjectID("58c67bbb41d0dc758208b558")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
      });

  // db.close();
});
