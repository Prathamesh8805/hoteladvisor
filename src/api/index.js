import axios from "axios";
 
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';  



 
export  const getPlacesData = async () =>
{
    try{
   const {data: { data } } = await axios.get(URL, options);
   const options = {
  
    params: {
      bl_latitude: 'sw.lat',
      bl_longitude: 'sw.lng',
      tr_longitude: 'ne.lat',
      tr_latitude: 'ne.lat',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'd01fb17b9bmsh977f418efeee4f8p12c4eejsn0aceda154cd3'
    }
  };
  
   
   return data;
    }catch(error){
console.log(error)
    }
}