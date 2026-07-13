import allMusicApi from "../api/allMusicApi";
// import useToast from "../hooks/useToast";

const musicService = {
  getAllMusic: async () => {
    try {
      const response = await allMusicApi.getAllMusic();
      return response;
    } catch (err) {
      // useToast().showToaster("Error fetching music data", "error");
      console.error("Error in musicService.getAllMusic:", err);
    }
  },

  uploadMusic: async (formData) => {
    try {
      const response = await allMusicApi.uploadMusic(formData);
      console.log("Response from musicService.uploadMusic:", response);
      return response;
    } catch (err) {
      // useToast().showToaster("Error uploading music", "error");
      console.error("Error in musicService.uploadMusic:", err);
    }
  },
};
export default musicService;
