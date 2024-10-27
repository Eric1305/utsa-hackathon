import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';


const Log = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');
  const [transactionType, setTransactionType] = useState('add'); // 'add' or 'subtract'
  const [moneyType, setMoneyType] = useState('cash'); // 'cash', 'EBT', 'gift cards'
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    if (transactionType === 'add') {
      setBalance(balance + parsedAmount);
      Alert.alert('Success', `Added $${parsedAmount} to your balance.`);
    } else {
      if (parsedAmount > balance) {
        Alert.alert('Error', 'Insufficient balance.');
        return;
      }
      setBalance(balance - parsedAmount);
      Alert.alert('Success', `Subtracted $${parsedAmount} from your balance.`);
    }

    setTransactions([
      ...transactions,
      { id: Math.random().toString(), amount: parsedAmount, location, type: transactionType, moneyType },
    ]);

    setAmount('');
    setLocation('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Money Log</Text>
        <Text style={styles.balance}>Current Balance: ${balance.toFixed(2)}</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholderTextColor="white" // Change placeholder color here
        />

        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="white" // Change placeholder color here
        />
         <TextInput
          style={styles.input}
          placeholder="Sublocation (optional)"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="white" // Change placeholder color here
        />

        <View style={styles.transactionContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTransactionType('add')}>
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTransactionType('subtract')}>
            <Text style={styles.buttonText}>Subtract Money</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moneyTypeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setMoneyType('cash')}>
            <Text style={styles.buttonText}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setMoneyType('EBT')}>
            <Text style={styles.buttonText}>EBT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setMoneyType('gift cards')}>
            <Text style={styles.buttonText}>Gift Cards</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logButton} onPress={handleTransaction}>
          <Text style={styles.buttonText}>Log Transaction</Text>
        </TouchableOpacity>

        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionRow}>
              <Text style={styles.locationText}>{item.location}</Text>
              <Text style={styles.transactionText}>
                {item.type === 'add' ? '+' : '-'}${item.amount} ({item.moneyType})
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={styles.transactionList}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#98B1B4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#133C55',
  },
  balance: {
    fontSize: 18,
    marginBottom: 20,
    color: '#133C55',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    width: '80%',
    color: '#133C55',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  moneyTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  locationText: {
    fontSize: 16,
    color: '#133C55',
  },
  transactionText: {
    fontSize: 16,
    color: '#133C55',
  },
  transactionList: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#50B093',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  logButton: {
    backgroundColor: '#26532B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Log;