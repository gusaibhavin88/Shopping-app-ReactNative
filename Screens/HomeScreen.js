import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { categories, products, user } from "../data/index";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
import fonts from "../config/fonts";
import SafeViewAndroid from "../SafeViewAndroid";
import { useNavigation } from "@react-navigation/native";

const IMAGE_WITH = 170;
const IMAGE_HEIGHT = 250;

const HomeScreen = ({ navigation }) => {
  const [activeCatagaryIndex, setactiveCatagaryIndex] = useState(0);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
        style={{ flexDirection: "column", paddingHorizontal: Spacing * 1 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={user.image}
              style={{
                width: Spacing * 4,
                height: Spacing * 4,
                borderRadius: 20,
              }}
            ></Image>
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                fontSize: Spacing * 2,
                color: Colors.text,
                marginLeft: Spacing,
              }}
            >
              Hi, Bhavin Goswami
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="search"
                size={Spacing * 3}
                style={{ paddingHorizontal: Spacing }}
              ></Ionicons>
              <AntDesign name="shoppingcart" size={Spacing * 3}></AntDesign>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingVertical: 20 }}>
          <Text style={{ fontFamily: Font["poppins-bold"], fontSize: 35 }}>
            EXPLORE the best
          </Text>
          <Text style={{ fontFamily: Font["poppins-bold"], fontSize: 35 }}>
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.primary,
              }}
            >
              Collections{" "}
            </Text>
            for you
          </Text>
        </View>
        <Text
          style={{
            paddingBottom: 20,
            fontSize: 20,
            fontFamily: Font["poppins-semiBold"],
          }}
        >
          Categories
        </Text>
        <ScrollView horizontal>
          {[{ name: "All", id: 0 }, ...categories].map((data, index) => {
            return (
              <TouchableOpacity
                style={{ paddingHorizontal: Spacing * 1 }}
                key={data.id}
                onPress={() => setactiveCatagaryIndex(index)}
              >
                <Text
                  style={[
                    {
                      fontFamily: Font["poppins-regular"],
                      borderColor: Colors.border,
                      borderWidth: 1,
                      borderRadius: 10,
                      paddingHorizontal: 7,
                      padding: 5,
                    },
                    activeCatagaryIndex === index
                      ? { backgroundColor: Colors.primary }
                      : { backgroundColor: Colors.onPrimary },
                  ]}
                >
                  {data.name}{" "}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: Font["poppins-semiBold"] }}>
            Popular
          </Text>
          <Text>View All</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderColor: "red",
          }}
        >
          {products.map((product) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Productdetails", { product: product })
                }
              >
                <Image
                  style={{
                    height: IMAGE_HEIGHT,
                    width: IMAGE_WITH,
                    borderRadius: 20,
                  }}
                  source={product.image}
                ></Image>
                <Text
                  style={{
                    paddingTop: Spacing,
                    fontFamily: Font["poppins-semiBold"],
                    fontSize: Spacing * 1.2,
                  }}
                >
                  {product.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 0,
                    paddingBottom: 15,
                  }}
                >
                  <Text
                    style={{
                      paddingRight: 15,
                      fontFamily: Font["poppins-regular"],
                      color: Colors.gray,
                    }}
                  >
                    {" "}
                    $ {product.price}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font["poppins-regular"],
                      color: Colors.gray,
                    }}
                  >
                    • {product.brand}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
