import apiEndPointsConst from "../constants/apiEndPointsConst";
import { apiConfigBase } from "./apiConfigBase";

const authApi = {
  register: (userData) => {
    return apiConfigBase.post(
      `${apiEndPointsConst.REGISTER_URL_END_POINT}`,
      userData,
    );
  },
  login: (credentials) => {
    return apiConfigBase.post(
      `${apiEndPointsConst.LOGIN_URL_END_POINT}`,
      credentials,
    );
  },
};

export default authApi;
