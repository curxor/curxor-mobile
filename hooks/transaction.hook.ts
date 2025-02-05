import {
  editTransactionAPI,
  getTransactionDetailsAPI,
  getTransactionsAPI,
  ITransaction,
} from "@/apis/transaction.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => getTransactionsAPI(),
  });
};
export const useTransactionDetails = (_id: string) => {
  return useQuery({
    queryKey: ["transactions", _id],
    queryFn: () => getTransactionDetailsAPI(_id),
  });
};
export const useEditTransaction = () => {
  return useMutation({
    mutationFn: (transaction: ITransaction) => {
      return editTransactionAPI(transaction);
    },
    mutationKey: ["edit-transactions"],
  });
};
