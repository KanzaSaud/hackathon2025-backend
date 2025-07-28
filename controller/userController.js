import Feedback from "../model/feedbackModel.js";

export const create = async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    const { email } = newFeedback;

    const savedData = await newFeedback.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "Feedback submitted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const userData = await Feedback.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "Feedback data not found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

