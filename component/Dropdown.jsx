import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownComponent = () => {
    const [value, setValue] = useState(null); // State untuk menyimpan value yang dipilih
    const [isFocus, setIsFocus] = useState(false); // State untuk menangani focus pada dropdown

    const data = [
        { label: "BYOND Pay", value: "1" },
        { label: "OVO", value: "2" },
        { label: "Gopay", value: "3" },
        { label: "LinkAja", value: "4" },
        { label: "ShopeePay", value: "5" },
    ];

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]} // Gaya dropdown dengan border dinamis
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300} // Maksimal tinggi dropdown
                labelField="label" // Nama field untuk label
                valueField="value" // Nama field untuk value
                placeholder={!isFocus ? "Pilih E-Wallet" : "..."}
                value={value}
                onFocus={() => setIsFocus(true)} // Set focus saat dropdown dibuka
                onBlur={() => setIsFocus(false)} // Hapus focus saat dropdown ditutup
                onChange={(item) => {
                    setValue(item.value); // Set nilai yang dipilih
                    setIsFocus(false); // Hapus focus setelah memilih
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "gray",
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "black",
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default DropdownComponent;
