import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Name', 'Price', 'QT', 'UPDATE', 'DELETE'],
      tableData: [
        ['1', '2', '3', '4', '5', '6'],
        ['a', 'b', 'c', 'd', 'e', 'f'],
        ['1', '2', '3', '4', '5', '6'],
        ['a', 'b', 'c', 'd', '5', '6'],
      ],
    };
  }
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity
        onPress={() => this._alertIndex(index)}
        style={styles.btnGroup}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={
                    cellIndex === 4 || cellIndex === 5
                      ? element(cellData, index)
                      : cellData
                  }
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
        <View>
          <TouchableOpacity style={styles.btnAdd}>
            <Text
              style={styles.txtAdd}
              onPress={() => this.props.navigation.navigate('Form')}>
              Add Book
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {height: 40, backgroundColor: '#537791'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {
    width: 58,
    height: 18,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    flexDirection: 'row',
  },
  btnText: {textAlign: 'center', color: '#fff'},
  btnGroup: {flex: 1, flexDirection: 'row'},
  btnAdd: {
    width: '40%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
