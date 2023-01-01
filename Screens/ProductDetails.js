import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SafeViewAndroid from "../SafeViewAndroid";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { colors, products } from "../data";
const ProductDetails = ({ route, navigation }) => {
  const [product] = useState(route.params.product);
  const [sizeindex, setsizeindex] = useState(0);
  const [colorindex, setcolorindex] = useState(0);
  console.log(product);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
        style={{ flexDirection: "column", paddingHorizontal: Spacing * 2 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="arrow-back"
            size={Spacing * 3}
            onPress={() => navigation.goBack()}
          ></Ionicons>
          <Text
            style={{ fontFamily: Font["poppins-bold"], fontSize: Spacing * 2 }}
          >
            Product Details
          </Text>
          <SimpleLineIcons
            name="basket-loaded"
            size={Spacing * 3}
          ></SimpleLineIcons>
        </View>
        <View style={{ alignItems: "center", paddingTop: Spacing * 1.5 }}>
          <Image
            source={product.image}
            style={{
              height: 450,
              width: 350,
              borderRadius: 20,
            }}
          ></Image>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: Spacing,
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 3,
              fontFamily: Font["poppins-bold"],
              color: Colors.text,
            }}
          >
            {product.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {colors.map((color, index) => {
              return (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    {
                      backgroundColor: color.code,
                      height: Spacing * 2,
                      width: Spacing * 2,
                      borderRadius: Spacing,
                      justifyContent: "space-around",
                      marginRight: 5,
                    },
                    colorindex === index
                      ? { borderWidth: 3, borderColor: Colors.gray }
                      : { borderWidth: 1, borderColor: Colors.gray },
                  ]}
                  onPress={() => setcolorindex(index)}
                ></TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <Text>{product.description}</Text>
        </View>
        <View style={{ marginTop: Spacing }}>
          <Text style={{ alignItems: "center" }}>
            ★ {""} {product.rating} {"   "} {product.reviews} reviews
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {product.sizes.map((product, index) => {
            return (
              <TouchableOpacity
                key={product.id}
                onPress={() => setsizeindex(index)}
              >
                <Text
                  style={[
                    {
                      borderWidth: 1,
                      borderColor: Colors.border,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      paddingVertical: 7,
                      marginRight: 10,
                      marginTop: Spacing,
                    },
                    sizeindex === index
                      ? { backgroundColor: Colors.primary }
                      : { backgroundColor: Colors.onPrimary },
                  ]}
                >
                  {product.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 3,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            $ {product.price} .00
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.primary,
              borderWidth: 1,
              borderRadius: Spacing * 2.5,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <SimpleLineIcons
              name="basket-loaded"
              size={Spacing * 3}
              color={Colors.background}
            ></SimpleLineIcons>
            <Text
              style={{
                marginLeft: Spacing,
                color: Colors.background,
                fontFamily: Font["poppins-regular"],
              }}
            >
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
