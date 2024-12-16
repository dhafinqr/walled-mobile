import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';


function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Home() {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // Ambil accessToken dari storage
        const value = await AsyncStorage.getItem("accessToken");
        if (value !== null) {
          // Fetch user profile dan transaction
          const res = await axios.get("https://6776-182-3-53-7.ngrok-free.app/profile", {
            headers: {
              Authorization: `Bearer ${value}`,
            },
          });
          const fetchedData = res.data.data;
          setUser(fetchedData.user); // Ambil data user
          setTransactions(fetchedData.transactions); // Ambil data transaksi
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image source={require("../../assets/avatar.png")} style={{ width: 50, height: 50 }} />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.fullname}</Text>
            <Text style={{ fontSize: 18 }}>{user.typeofaccount || "Personal Account"}</Text>
          </View>
        </View>
        <Image source={require("../../assets/suntoggle.png")} />
      </View>

      {/* Greeting Section */}
      <View style={{ backgroundColor: "#FAFBFD", paddingHorizontal: 20 }}>
        <View style={styles.greeting}>
          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
              Good Morning, {user?.fullname && user.fullname.split(" ")[0]}
            </Text>
            <Text style={{ fontSize: 18 }}>Check all your incoming and outgoing transactions here</Text>
          </View>
          <Image source={require("../../assets/sun.png")} style={{ width: 81, height: 77 }} />
        </View>

        {/* Account Number */}
        <View style={styles.accountnumber}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Account No.</Text>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>{user.id}</Text>
        </View>

        {/* Balance Box */}
        <View style={styles.balancebox}>
          <View>
            <Text style={{ fontSize: 20 }}>Balance</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Rp {user.balance}</Text>
          </View>
          <View>
            <View style={{ gap: 20 }}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome6 size={18} name="add" color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome size={18} name="send" color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Transaction History */}
        <ScrollView style={styles.transactionHistory}>
          <Text style={styles.transactionTitle}>Transaction History</Text>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <View>
                  <Text style={{ fontSize: 18 }}>{transaction.name}</Text>
                  <Text style={{ fontSize: 16 }}>{transaction.type}</Text>
                  <Text style={{ fontSize: 14, color: "#b3b3b3" }}>{transaction.date}</Text>
                </View>
                <Text style={{ fontSize: 18, color: transaction.debit ? "red" : "green" }}>
                  {transaction.debit ? "-" : "+"} Rp {transaction.amount}
                </Text>
              </View>
            ))
          ) : (
            <Text style={{ textAlign: "center", padding: 20 }}>No transactions found</Text>
          )}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    justifyContent: "space-between",
  },
  accountnumber: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#19918F",
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 10,
  },
  balancebox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: "#19918F",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionHistory: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    borderRadius: 10,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    borderBottomColor: "#b3b3b3",
    borderBottomWidth: 0.5,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});