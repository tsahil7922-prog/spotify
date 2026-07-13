import apiEndPointsConst from "../constants/apiEndPointsConst";
import { apiConfigBase } from "./apiConfigBase";

const allMusicApi = {
  getAllMusic: () => {
    return apiConfigBase.get(`${apiEndPointsConst.HOME_URL_END_POINT}`);
  },

  getAllAlbums: () => {
    return apiConfigBase.get(
      `${apiEndPointsConst.GET_ALL_ALBUMS_URL_END_POINT}`,
    );
  },

  uploadMusic: (formData) => {
    return apiConfigBase.post(
      `${apiEndPointsConst.UPLOAD_MUSIC_URL_END_POINT}`,
      formData,
    );
  },
};

export default allMusicApi;
