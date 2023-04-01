const axios = require('axios')
const URL = 'https://be-a-rym.up.railway.app/api'
const KEY = "ee756e97265b.7c726710de0e20db3208";

const getCharDetail = (req,res)=>{
    const {id} = req.params;
    axios.get(`${URL}/character/${id}?key=${KEY}`)
        .the((response)=>{
            const {id, name, species, image, gender,origin} = response.data;
            res.status(200).json({id, name, species, image, gender,origin})
        })
        .catch((error)=>{
            res.status(500).json({error:error.message});
        })
}
module.exports = getCharDetail;

// const getCharDetail = (res,id)=>{
//     axios.get(`${URL}/character/${id}?key=${KEY}`)
//     .then((respon) => {
//         const {id, name, gender, species, status, origen, image} = respon.data;
//         res.writeHead(200,{'Content-Type':'application/json'})
//         res.end(JSON.stringify({id, name, gender, species, image}))
//     })
//     .catch((error)=>{
//         res.writeHead(500,{'Content-Type':'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports = getCharDetail;