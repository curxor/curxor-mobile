import {
  createCategoryAPI,
  getCategoryAPI,
  ICategory,
} from "@/apis/category.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoryAPI(),
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ["create-category"],
    mutationFn: (category: ICategory) => createCategoryAPI(category),
  });
};
