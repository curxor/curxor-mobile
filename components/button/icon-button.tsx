import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
interface LoginWithProps {
  onPress?: () => void;
  icon: string;
  color: string;
}
const IconButton: React.FC<LoginWithProps> = ({ onPress, icon, color }) => {
  return (
    <TouchableOpacity className="mt-2 mx-2" onPress={onPress}>
      <Feather name={icon} size={35} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
