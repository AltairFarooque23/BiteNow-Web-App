const Restaurant = require('../Models/Restaurants');

const searchRestaurants = async (searchTerm) =>{
    try {
      const results = await Restaurant.find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          // { 'menu$.**': { $regex: searchTerm, $options: 'i' } },  
        ],
      });
      return results;
    } catch (error) {
      console.log(error);
      return ["No results found"]
    }
  }

module.exports = {searchRestaurants};