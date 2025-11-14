import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Alert } from "react-native";
import ProductCard from "./components/ProductCard";
import products from "./data";

export default function App() {
  return (
    <View className="flex-1 bg-gradient-to-br from-sky-200 to-blue-500 pt-16 pb-6">

      {/* Header Section */}
      <View className="w-11/12 mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <Text className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome 👋
        </Text>
        <Text className="text-center text-gray-600 text-base">
          Explore our products below!
        </Text>
      </View>

      {/* Product List */}
      <ScrollView
        className="flex-1 w-11/12 mx-auto mt-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60, // spacing สวยขึ้น
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onPress={() => Alert.alert("Product Pressed", `${product.name}`)}
          />
        ))}
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
