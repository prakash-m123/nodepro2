const mongodb=require('mongodb');
MongoClient=mongodb.MongoClient;

 let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://prakash:OIc4mMufrAuM2uv1@cluster0-fb3y5.mongodb.net/test?retryWrites=true&w=majority')
    .then(client=>{
        console.log('connected');
        _db=client.db();
        callback(client);
    })
    .catch(err=>{
        console.log(err);
    });
};
const getDb=()=>{
    if(_db){                                                                                                                                                   
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;



// const Sequelize=require('sequelize');

// const sequelize=new Sequelize('node','root','rootpassword',{
//     dialect:'mysql',
//     host:'localhost'
// });

// module.exports=sequelize;


// const mysql=require('mysql2');

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'rootpassword',
//     database:'node'
// });

// module.exports=pool.promise();