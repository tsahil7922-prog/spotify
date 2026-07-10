import apiEndPointsConst from "../constants/apiEndPointsConst";
import { apiConfigBase } from "./apiConfigBase";

const allMusicApi = {
  getAllMusic: () => {
    return apiConfigBase.get(`${apiEndPointsConst.HOME_URL_END_POINT}`);
  },
};

export default allMusicApi;
