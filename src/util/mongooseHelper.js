const mutipleMongooseToObject = function(mongooses){
    return mongooses.map((mongoose)=>mongoose.toObject());
}
const mongooseToObject = function(mongoose){
    return mongoose?mongoose.toObject():mongoose;
}
module.exports = {mutipleMongooseToObject, mongooseToObject}
