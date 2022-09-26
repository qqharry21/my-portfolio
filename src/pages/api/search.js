/** @format */
import { getProjectImages } from 'src/lib/cloudinary';
export const searchHandler = async (req, res) => {
  const results = await getProjectImages();
  res.status(200).json({ ...results });
};
