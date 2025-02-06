import { getProfileAPI, signInAPI, verifyAuthAPI } from "@/apis/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["get-Profile"],
    queryFn: () => getProfileAPI(),
  });
};
export const useSignIn = () => {
  return useMutation({
    mutationKey: ["sign-in"],
    mutationFn: (email: string) => signInAPI(email),
  });
};
export interface IAuth {
  email: string;
  otp: string;
}
export const useAuthVerify = () => {
  return useMutation({
    mutationKey: ["auth-verify"],
    mutationFn: (data: IAuth) => verifyAuthAPI(data),
  });
};
