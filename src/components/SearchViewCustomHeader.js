import React, { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Dimensions, View,Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors, Images } from "../constants";


const SearchViewCustomHeader = (props) => {
    
    const refRBSheet = useRef();
  
    return (
      <>
        <View style={styles.customHeaderContainer}>
          <View style={styles.seachInputSection}>
            <Ionicons name="search-outline" color={Colors.TAB_ICON_COLOR} size={20} />
            <TextInput
              placeholder="rechercher.."
              style={styles.searchInput}
            ></TextInput>
          </View>
          
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              background: "rgba(76, 175, 80, 0.9)",
            },
            draggableIcon: {
              backgroundColor: Colors.TAB_ICON_COLOR,
            },
            container: {
              backgroundColor: "white",
              borderTopStartRadius: 12,
              borderTopEndRadius: 12,
              height: 0.7 * Dimensions.get("window").height,
            },
          }}
        >
          <View style={styles.bottomSheetMenu}>
            <ScrollView>
              <View style={styles.bottomSheetMenuHeader}>
                
                  <Text style={styles.bottomSheetMenuHeaderTitle}>Filtres</Text>
                <Text
                  style={{ ...styles.bottomSheetMenuHeaderTitle, color: "grey" }}
                >
                  Réinitialiser
                </Text>
              </View>
              <View style={styles.bottomSheetItem}>
                <Text style={styles.bottomSheetItemTitle}>Trier Par</Text>
                
              </View>
              <View style={styles.bottomSheetItem}>
                <Text style={styles.bottomSheetItemTitle}>Prix</Text>
                <View style={styles.priceInputSection}>
                  <TextInput
                    placeholder="Minimum"
                    style={styles.priceInput}
                  ></TextInput>
                  <TextInput
                    placeholder="Maximum"
                    style={styles.priceInput}
                  ></TextInput>
                </View>
              </View>
            </ScrollView>
          </View>
        </RBSheet>
      </>
    );
  };

  const styles = StyleSheet.create({
    customHeaderContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 55,
      paddingTop: 10,
      paddingStart: 10,
      paddingEnd: 10,
      paddingBottom: 10,
    },
    seachInputSection: {
      backgroundColor: "#e8e8e8",
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingStart: 8,
      paddingEnd: 8,
      borderRadius: 20,
      marginEnd: 10,
    },
    searchInput: {
      width: Dimensions.get("window").width - 140,
      fontSize: 16,
    },
    bottomSheetMenu: {
      flex: 1,
      paddingStart: 20,
    },
    bottomSheetMenuHeader: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
    },
    bottomSheetMenuHeaderTitle: {
      fontSize: 18,
      fontWeight: "600",
    },
    bottomSheetItem: {
      marginTop: 10,
    },
    bottomSheetItemTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    horizontalItemTextDefault: {
      color: "black",
      backgroundColor: "#E6E7EC",
    },
    horizontalItemTextSelected: {
      color: "#3086F4",
      backgroundColor: "#E7F3FF",
    },
    horizontalItemText: {
      fontSize: 16,
      fontWeight: "700",
      borderRadius: 15,
      padding: 6,
      margin: 8,
    },
    priceInputSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 5,
    },
    priceInput: {
      color: "grey",
      borderRadius: 4,
      height: 50,
      width: 170,
      borderWidth: 2,
      borderColor: "grey",
      padding: 10,
      marginStart: 5,
    },
  });
  
  export default SearchViewCustomHeader;