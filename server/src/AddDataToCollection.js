const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');


// use this only once , check collection in dashboard before doing this
async function InsertJsonToCollection(url){
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to the MongoDB Atlas database');
    
        const database = client.db('test');
        console.log("Connected to 'test' database")
        const collectionName = 'restaurants';
    
        // Read the JSON file
        const fileData = fs.readFileSync('./data/bitenow_restuarants_data.json');
        const jsonData = JSON.parse(fileData);
    
        // // Upload data to MongoDB
        // const documents = Object.entries(jsonData).map(([key, value]) => ({
        // _id: key,
        // data: value,
        // }));
  
        // Create a new collection and insert the data
        const collection = database.collection(collectionName);
        const result = await collection.insertMany(jsonData);
        console.log(`${result.insertedCount} documents inserted into the ${collectionName} collection`);
      } catch (error) {
        console.error('Error connecting to the MongoDB Atlas database', error);
      } finally {
        await client.close();
      }
}


module.exports = {InsertJsonToCollection}