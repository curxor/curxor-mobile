import axios from "axios";

export const signInAPI = (email: string) => {
  const response = axios.post("");
};

export const getProfileAPI = async () => {
  const response = await axios.get(
    "http://192.168.1.102:8888/api/v1/user/profile?startDate=2025-02-02&endDate=2025-02-28",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data.data;
};
