import axios from "axios";

export const imageUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const apiKey = import.meta.env.VITE_IMAGEBB_API_URL;
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData);
    return data;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null; // or handle the error appropriately
  }
};
