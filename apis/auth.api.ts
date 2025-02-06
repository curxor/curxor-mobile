import { IAuth } from "@/hooks/auth.hook";
import axiosInstance from "@/services/axios";

export const signInAPI = (email: string) => {
  return axiosInstance.post("/auth/sign-in", { email });
};

export const verifyAuthAPI = (data: IAuth) => {
  return axiosInstance.post("/auth/verify", data);
};
export const getProfileAPI = async () => {
  const response = await axiosInstance.get(
    "/user/profile?startDate=2025-02-02&endDate=2025-02-28"
  );
  return response.data.data;
};
export const authAPI = async () => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data.data;
};
