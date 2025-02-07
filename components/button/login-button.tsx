import { Link, LinkProps } from "expo-router";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
interface LoginWithProps {
  href: LinkProps["href"];
  icon: string;
}
const LoginWith: React.FC<LoginWithProps> = ({ href, icon }) => {
  return (
    <Link className="mt-2 mx-2" href={href}>
      <AntDesign name={icon} size={35} color="black" />
    </Link>
  );
};

export default LoginWith;
