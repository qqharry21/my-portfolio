/** @format */
const feedback = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Feedback sent successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Feedback could not be sent',
    });
  }
};

export default feedback;
