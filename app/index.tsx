import React, { useEffect, useState } from "react";
import "../global.css";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { authAPI } from "@/apis/auth.api";

const Index: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      setToken(storedToken);
    };
    fetchToken();
  }, []);
  const { isError, isSuccess } = useQuery({
    queryKey: ["auth"],
    queryFn: authAPI,
    enabled: !!token,
  });
  if (token === null) {
    return null;
  }
  if (!token || isError) {
    return <Redirect href={"/sign-in"} />;
  }
  if (isSuccess) {
    return <Redirect href={"/home"} />;
  }
  return null;
};

export default Index;
