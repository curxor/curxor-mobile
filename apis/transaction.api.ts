import axios from "axios";

export const getTransactionsAPI = async () => {
  const response = await axios.get(
    "http://192.168.1.102:8888/api/v1/category/transactions",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data;
};
export const getTransactionDetailsAPI = async (id: string) => {
  const response = await axios.get(
    `http://192.168.1.102:8888/api/v1/transaction/details?id=${id}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data.data;
};
export interface ITransaction {
  _id: string;
  description: string;
  amount: number;
  category: string;
}
export const editTransactionAPI = async (transaction: ITransaction) => {
  const response = await axios.put(
    `http://192.168.1.102:8888/api/v1/transaction`,
    transaction,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data;
};
