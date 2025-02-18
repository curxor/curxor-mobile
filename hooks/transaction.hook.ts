import {
  deleteTransactionAPI,
  editTransactionAPI,
  getTransactionDetailsAPI,
  getTransactions,
  getTransactionsAPI,
  ITransaction,
} from "@/apis/transaction.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTransactions = (getTransactions: getTransactions) => {
  return useQuery({
    queryKey: ["transactions", getTransactions],
    queryFn: () => getTransactionsAPI(getTransactions),
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
export const useDeleteTransaction = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return deleteTransactionAPI(id);
    },
    mutationKey: ["delete-transactions"],
  });
};
