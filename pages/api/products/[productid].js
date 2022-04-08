import Product from '../../../models/Product';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  const { method } = req
  const { productid } = req.query

  //db Connect
  dbConnect();

  //Get method for read data from mongodb
  if (method === "GET") {
      try {
          const product = await Product.findOne({_id: productid});
          res.status(200).json(product)

          //work too
          /* await User.find()
              .then((users) => {
                  res.status(200).json(users)
              }) */
          
      } catch (err) {
          res.status(500).json(err)
      }
  }
}