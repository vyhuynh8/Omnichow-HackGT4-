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

            <View style={styles.splashContainer}>
                <Image source={require('./broccoli_final.png')} style={{width:150, height:150,marginBottom:20,marginLeft:40}}/>
                <Text style={styles.text}>omnichow</Text>
                <Button
                    onPress={() => navigate('Store')}
                    title="start"
                    color="#C8E6C9"
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
        fontFamily: 'sans-serif',
        marginBottom:20
        //fontWeight: '700'

    },

    hireText: {
        paddingTop:13,
        paddingLeft:13,
        fontSize: 20,
        color: 'grey',
        fontFamily: 'sans-serif',
        //fontWeight: '700'
    },
    
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#4CAF50',
    },
            
    splashText: {
        fontSize: 40,
        color: '#C8E6C9',
        fontFamily: 'sans-serif',    
    }
});
