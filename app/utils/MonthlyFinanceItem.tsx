import { View, Text, StyleSheet } from 'react-native'

const MonthlyFinanceItem = ({ item }) => {
    let totalIncome = 0;
    let totalExpense = 0;
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.flex}>
                <View style={styles.income}>
                    <Text style={styles.title}>Income</Text>
                    {item.incomes.map(income => {
                        totalIncome += income.amount;
                        return (<View style={styles.row}>
                            <Text>{income.name} </Text>
                            <Text> {income.amount}</Text>
                        </View>)
                    })}
                    <View style={styles.row}>
                        <Text>Total </Text>
                        <Text style={{color: 'green'}}> {totalIncome}</Text>
                    </View>
                </View>
                <View style={styles.income}>
                    <Text style={styles.title}>Expense</Text>
                    {item.expenses.map(expense => {
                        totalExpense += expense.amount;
                        return (<View style={styles.row}>
                            <Text>{expense.name} </Text>
                            <Text> {expense.amount}</Text>
                        </View>)
                    })}
                    <View style={styles.row}>
                        <Text>Total </Text>
                        <Text style={{color: 'red'}}> {totalExpense}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#FFFFFF',
    },
    date: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    income: {
        flex: 1,
        marginRight: 24,
    },
    flex: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    row: {
        // width: '100%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
    }
});

export default MonthlyFinanceItem