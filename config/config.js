const mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb://localhost:27017/', function(err, db) {
    if (err) throw err;
    module.exports.dbo = db.db('social_media');
});

module.exports = {
    url: 'mongodb://localhost:27017/social_media',
};
