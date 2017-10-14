import React from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, Alert, NavigatorIOS, ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as GLOBAL from './Globals';

GLOBAL.COINS = 0;

class HomeScreen extends React.Component {


    static navigationOptions = {
        title: 'Home',
    };
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <Image source={require('./watericon.png')} style={{width:150, height:150,marginBottom:20}}/>
                <Text style={styles.text}>Omnichow</Text>
                <Button
                    onPress={() => navigate('Store')}
                    title="START"
                    color="white"
                />
            </View>
        );


    }
}



class Store extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render() {
        return (
            <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
    />
    );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Store: { screen: Store },
});

export default class App extends React.Component {
    render() {
        return (
                <SimpleApp/>

        );
    }
}
//
const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#80DEEA'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        paddingTop: 20,
    },
    red: {
        color: 'red',
    },

    text: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Avenir-Black',
        //fontWeight: '700'

    },

    hireText: {
        paddingTop:13,
        paddingLeft:13,
        fontSize: 20,
        color: 'grey',
        fontFamily: 'Avenir-Black',
        //fontWeight: '700'
    }


});
