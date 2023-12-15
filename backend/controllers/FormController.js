import formModel from "../model/Form.js";

export const createForm = async (req, res) => {
  const { type, desc } = req.body;
  try {
    const newForm = await formModel.create({
      type,
      desc,
    });
    const saveForm = await newForm.save();
    res.status(200).send({ saveForm });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const getData = async (req, res) => {
  try {
    const form = await formModel.find({});
    res.status(200).send({ form });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
