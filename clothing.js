// import dbConnect from "./dbConnect.js"


// export function getAllClothes(req, res) {
//     const db = dbConnect()
//     db.collection('clothes').get()
//     .then(collection => {
//         const listOfClothes = collection.docs.map(doc => doc.data())
//         res.send(listOfClothes)
//     })
//     .catch(err => res.status(501).send({ success: false, message: err}))
// }