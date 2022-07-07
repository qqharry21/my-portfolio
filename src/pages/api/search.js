/** @format */
import { getProjectImages } from 'lib/cloudinary';
export const searchHandler = async (req, res) => {
  const results = await getProjectImages();
  res.status(200).json({ ...results });
};
