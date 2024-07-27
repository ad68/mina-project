const baseURL = "https://api.tazminmashin.com/";
export const api = {
  auth: {
    sendOtp: baseURL + "tazmin/notification/send-otp",
    loginOrSignup: baseURL + "tazmin/users/login-or-signup",
  },
  plate: {
    getPlates: baseURL + "tazmin/tazmin-mashin/license-plate/search-with-pagination?pageNo=0&pageSize=8",
    add: baseURL + "tazmin/tazmin-mashin/license-plate/add",
    delete: baseURL + "tazmin/tazmin-mashin/license-plate/delete/",
    edit: baseURL + "tazmin/tazmin-mashin/license-plate/edit/"
  },
};
