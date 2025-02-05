import { getProfileAPI } from "@/apis/auth.api";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["get-Profile"],
    queryFn: () => getProfileAPI(),
  });
};
