import axiosInstance from "../services/axios";

export const getTransactionsAPI = async () => {
  const response = await axiosInstance.get("/category/transactions");
  return response.data;
};

export const getTransactionDetailsAPI = async (id: string) => {
  const response = await axiosInstance.get(`/transaction/details?id=${id}`);
  return response.data;
};

export interface ITransaction {
  _id: string;
  description: string;
  amount: number;
  category: string;
}

export const editTransactionAPI = async (transaction: ITransaction) => {
  const response = await axiosInstance.put("/transaction", transaction);
  return response.data;
};
