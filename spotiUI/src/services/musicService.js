import allMusicApi from "../api/allMusicApi";
import useToast from "../hooks/useToast";

const musicService = {
  getAllMusic: async () => {
    try {
      const response = await allMusicApi.getAllMusic();
      return response;
    } catch (err) {
      useToast().showToaster("Error fetching music data", "error");
      console.error("Error in musicService.getAllMusic:", err);
    }
  },
};
export default musicService;
