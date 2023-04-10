import Shipping from "../model/shipping.model.js";
export const allshiping = async (request, response, next) => {
    try {
        const shipping = await Shipping.find();
        response.json(shipping);
      } catch (err) {
        console.error(err.message);
        response.status(500).send(' internal Server Error');
      }
};
