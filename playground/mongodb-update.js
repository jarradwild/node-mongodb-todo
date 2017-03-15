const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
   return console.log('Unable to connect to the MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58c69575dcbaaf92ec01e8ca')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58c67cc392560f75860653b9')
  }, {
    $set: {
      name: 'Jarrad Wild'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
