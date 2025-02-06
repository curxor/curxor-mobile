import axiosInstance from "@/services/axios";
export const getCategoryAPI = async () => {
  const response = await axiosInstance.get("/category");
  return response.data;
};

export interface ICategory {
  description: string;
  name: string;
  icon: string;
  type: string;
}

export const createCategoryAPI = async (category: ICategory) => {
  const response = await axiosInstance.post("/category/create", category);
  return response.data;
};
