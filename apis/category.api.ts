import axios from "axios";

export const getCategoryAPI = async () => {
  const response = await axios.get(
    "http://192.168.1.102:8888/api/v1/category",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data;
};
export interface ICategory {
  description: string;
  name: string;
  icon: string;
  type: string;
}
export const createCategoryAPI = async (category: ICategory) => {
  const response = await axios.post(
    "http://192.168.1.102:8888/api/v1/category/create",
    category,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data;
};
