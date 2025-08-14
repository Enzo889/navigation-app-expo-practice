import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md" | "lg" | "full";
}

const CustomBtn = ({
  children,
  color = "primary",
  size = "medium",
  rounded = "sm",
  className,
  onPress,
}: Props) => {
  const btnColor = {
    primary: "bg-primary-700",
    secondary: "bg-secondary-700",
    tertiary: "bg-tertiary-700",
  }[color];

  const btnSize = {
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  }[size];

  const btnRounded = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];
  return (
    <Pressable
      onPress={onPress}
      className={`${btnColor} ${btnSize} ${btnRounded} ${className} items-center justify-center active:opacity-85  `}
    >
      <Text className="text-white text-center font-geist-mono-medium"> {children} </Text>
    </Pressable>
  );
};
export default CustomBtn;
