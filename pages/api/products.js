import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  const { method } = req

  //db Connect
  dbConnect();

  //Get method for read data from mongodb
  if (method === "GET") {
      try {

          const products = await Product.find();
          res.status(200).json(products)

          //work too
          /* await User.find()
              .then((users) => {
                  res.status(200).json(users)
              }) */
          
      } catch (err) {
          res.status(500).json(err)
      }
  }

  //Post method for insert data into mongodb
  if (method === "POST") {
      try {

          const product = await Product.create(req.body);
          res.status(201).json(product)

          // work too
          /* await User.create(req.body)
              .then((newUser) => {
                  res.status(201).json(newUser)
              }) */
          
      } catch (err) {
          res.status(500).json(err)
      }
  }
}