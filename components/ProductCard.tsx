import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ProductCard = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="bg-white rounded-2xl p-4 mb-4 shadow-md border border-gray-100"
    >
      <View className="flex-row items-center">
        {/* Product Image */}
        <Image
          className="w-24 h-24 rounded-xl"
          source={{ uri: props.image }}
        />

        {/* Details */}
        <View className="flex-1 ml-4">
          <Text className="text-xl font-semibold text-gray-800">
            {props.name || "No Name"}
          </Text>

          <Text className="text-2xl font-extrabold text-blue-600 mt-2">
            ${props.price?.toFixed(2) || "0.00"}
          </Text>

          {/* Add to Cart button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-3 bg-blue-600 py-2 px-4 rounded-xl self-start"
          >
            <Text className="text-white font-semibold text-sm">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
