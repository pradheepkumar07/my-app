const Mongoclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydatabase';

Mongoclient.connect(url, function(err,db){
    if(err) throw (err);
    var dbmy = db.db('mydatabase');
    var mydata = {name:'user1', email:'user1@userEvent.com'};

    dbmy.collection('mycollection').inserOne(mydata,function(err,res){
        if(err) throw (err);
        console.log('Document is inserted');
        db.close();
    })
})
