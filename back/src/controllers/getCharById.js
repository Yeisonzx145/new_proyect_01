const axios = require('axios');
const URL = 'https://be-a-rym.up.railway.app/api'
const KEY = "ee756e97265b.7c726710de0e20db3208";

const getCharById = (req,res)=>{
    const {id} = req.params;
    
    axios
        .get(`${URL}/character/${id}?key=${KEY}`)
        .then((response)=>{
            const {id, name, species, image, gender} = response.data;
            res.status(200).json({id, name, species, image, gender})
        })
        .catch((error)=>{
            res.status(500).json({error:error.message});
        })
}
module.exports = getCharById;

// const axios = require('axios')

// const URL = 'https://be-a-rym.up.railway.app/api'
// const KEY = "ee756e97265b.7c726710de0e20db3208";
// const getCharById = (res,id)=>{
//     axios.get(`${URL}/character/${id}?key=${KEY}`)
//         .then((respon) => {
//             const {id, name, gender, species, image} = respon.data;
//             res.writeHead(200,{'Content-Type':'application/json'})
//             res.end(JSON.stringify({id, name, gender, species, image}))
//         })
//         .catch((error)=>{
//             res.writeHead(500,{'Content-Type':'text/plain'})
//             res.end(error.message)
//         })
// }
// module.exports = getCharById;