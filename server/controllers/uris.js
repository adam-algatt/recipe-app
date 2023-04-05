const Uri = require('../models/Uri')

 const createUri = async(req, res) => {
  console.log('create called');
  try {
    const newUri = await Uri.create({
      uriName: req.body.name
    })

    res.status(200).json({
      newUri
    })
  } catch (error) {
    res.status(400).json({
      'error': `${error}`
    })
  }
}

// const getAllUris = async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(400).json({
//             'error': `error`
//         })
//     }
// }


module.exports = createUri;