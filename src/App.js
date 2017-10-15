import React from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, Alert, NavigatorIOS, ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
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
                <View style={styles.splashButton}>
                    <Button
                        onPress={() => navigate('Store')}
                        title="start"
                        color="#C8E6C9"
                    />
                </View>
            </View>
        );


    }
}




class Store extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']),
        };
        submitReport();
    }

    renderRow(rowData, sectionID, rowID) {
        return(
            <View style={styles.store}>
                <TouchableHighlight underlayColor='#80e27e' style={styles.th} onPress={() => navigate('Store')}>
                    <View style={styles.viewStyle}>
                        <Image source={require('./broccoli_final.png')} style={styles.rowImage}/>
                        <View style={styles.rowStyle}>
                            <Text style={styles.rowTextTitle} numberOfLines={1}>TITLE</Text>
                            <Text style={styles.rowText} numberOfLines={1}>{rowData}</Text>
                            <Text style={styles.rowText} numberOfLines={1}>{rowData}</Text>
                            <Text style={styles.rowText} numberOfLines={1}>{rowData}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={styles.header}>Your Cart</Text>
                <Text style={styles.subheader}>Calories: xxxg   Fat: xxxg   Sodium: xxxg</Text>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} style={{flex:1}}/>
                <TouchableOpacity style={styles.camera} onPress={this._onPressButton}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
                
            </View>
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

function submitReport() {
    // var base64encoded = "Basic" + " " + btoa(localStorage.getItem('email') + ":" + localStorage.getItem('password'));
    // var data = JSON.stringify({
    //     "water_type": document.getElementById('type').options[document.getElementById('type').selectedIndex].value,
    //     "water_condition": document.getElementById('condition').options[document.getElementById('condition').selectedIndex].value
    // })
    // var locationJSON = JSON.stringify({
    //     "latitude": parseFloat(localStorage.getItem("lat")),
    //     "longitude": parseFloat(localStorage.getItem("lng"))
    // })
    // var report = JSON.stringify({
    //     "date": moment().format('YYYY-MM-DD hh:mm:ss'),
    //     "report_number": String(document.getElementById('number').innerHTML),
    //     "reporter": String(document.getElementById('reporter').innerHTML),
    //     "location": locationJSON.toString(),
    //     "data":data.toString(),
    //     "type": "WaterSourceReport"
    // });
    // console.log(JSON.parse(report));
    // console.log(report);
    var xhttp = new XMLHttpRequest();
    var query = "X";
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(" Response : " + xhttp.responseText);
            var jsonfile = JSON.parse(xhttp.responseText);
            query = jsonfile['longDescription']['values'][0]['value'];
            var xhttp2 = new XMLHttpRequest();
            xhttp2.open("GET", 'https://trackapi.nutritionix.com/v2/search/instant?' + 'query=' + query);
            xhttp2.setRequestHeader('x-remote-user-id', '0');
            xhttp2.setRequestHeader('x-app-id', 'e26eaa35');
            xhttp2.setRequestHeader('x-app-key', '39008f6f9560af6da3f40cb9ee8c5a54');
            xhttp2.setRequestHeader('Content-Type', 'application/json');
            xhttp2.setRequestHeader('Accept','application/json, text/plain, */*');
            xhttp2.send();
            xhttp2.onreadystatechange = function() {
            if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                console.log("Sent Request");
                // console.log(" Response : " + xhttp2.responseText);
                var jsonfile2 = JSON.parse(xhttp2.responseText);
                console.log(jsonfile2['branded'][0]["nf_calories"]);
                console.log(jsonfile2['branded'][0]["serving_qty"]);
                console.log(jsonfile2['branded'][0]["photo"]["thumb"]);
            }
            }

        }
    };
    xhttp.open("GET", "https://hackgt-api.ncrcloud.com/catalog/2.0.2/items/1.0/658540dc-8dc9-42c9-97f1-b7e5d3bc6f71");
    xhttp.setRequestHeader('Cache-Control','no-cache');
    xhttp.setRequestHeader('nep-organization','/org-1/');
    xhttp.setRequestHeader('nep-application-key','8a82859f5ef21870015ef2fa5e5f0000');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept','application/json, text/plain, */*');
    xhttp.setRequestHeader("authorization", "AccessToken eyJhbGciOiJFUzI1NiJ9.eyJtdGgiOlsicGFzc3dvcmQiXSwic3ViIjoiYWNjdDpvcmctMUBhZG1pbiIsIm5iZiI6MTUwODAxMDI1OCwib3JnIjoiL29yZy0xLyIsImlzcyI6Ik5DUiIsInJscyI6ImVKeUZVMEZ5Z3pBTVBNTnIyaWNvUmlGcXdmTElJcG4wL3crcDdHQVNFeUFuc0x5NzNsbEpYNjNIMERiVW9WZlNlOXMwVjhJYml2MUFONUtucUFMS2RqWUFTaENLYUhlOWdGZjdya0g3OU9WaVpFOVdJZDliOFlJdzZPVlF5TEUvVThKR1ZEVldQRVFIRm9YQktpdzllUG9ESmZhVnJ6ZHVaZWlKQzhKWGlzWitYTVRwRkoxUStLd0h6bUhNTG44eEJicmg5c2xXRHVRcXZTbHV5ejRSU3lKVkpFZXZKR0NzUzFVN204a2krS2hTQlNVOFlPV3F3eXVIckJFRE9pM2hXaFRRUHlnL1BJbUhZUlYwVlRWWGtqUFRlOEJOUDd2emRSUFNkQUVoRE9SSzMxKzhyQ1ppVCtqVjhXN1QzOXMyUTAvcDBHRVkrRDVpWHBHQ2dFQWplT2h4Vlg5MGM1TGlhNzEySTlDUXA5OTNDWjV5TDl1M2dzNHRtWVVEV2pNY3VBc1dwRzBIaVBxTjZlN1I1TW91dWlrcWp4c29GRW5QWEptNnRqbFRhdG9mNXNETFBHZzN0dVd0eVRJQUE4NTI1RHU1c2Qzay9pRDhMTEJRaTlRQ1o4a1o3TkQvQVVxb0ZKOD0iLCJleHAiOjE1MDgwMzkwNTgsImlhdCI6MTUwODAxMDI1OCwianRpIjoiYTNkY2I2YzktYjVhMC00OWFkLTkyOWQtMjI5Mzg1NTMwZjA5In0.MEQCIAMwtTaDkg8LtpsQzJQeL34QeMh3Lratimgms-85pMwnAiBf3pVkCe21-5QKtxZcmUp1X0bXzPz-gBgti_tmQqkH0Q");
    xhttp.send();
    console.log("Sent Request");

    // xhttp2.open("GET", 'https://trackapi.nutritionix.com/v2/search/instant?' + 'query=' + query);
    // xhttp2.setRequestHeader('x-remote-user-id', '0');
    // xhttp2.setRequestHeader('x-app-id', 'e26eaa35');
    // xhttp2.setRequestHeader('x-app-key', '39008f6f9560af6da3f40cb9ee8c5a54');
    // xhttp2.setRequestHeader('Content-Type', 'application/json');
    // xhttp2.setRequestHeader('Accept','application/json, text/plain, */*');
    // xhttp2.send();
    // console.log("Sent Request");


//     url = 'https://trackapi.nutritionix.com/v2/search/instant?' + 'query=' + str(data['longDescription']['values'][0]['value'])
// #payload = json.load(open("request.json")).decode('utf-8').replace('\0', '')
//     headers = {'Content-Type': 'application/json','Accept':'application/json, text/plain, */*'}
//     r = requests.get(url, headers=headers)
// #data=json.dumps(payload)
//     data = r.json();
//     print(data['branded'][0]["nf_calories"]);
//     print(data['branded'][0]["serving_qty"]);
//     print(data['branded'][0]["photo"]["thumb"]);
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
        backgroundColor: '#4CAF50'
    },
            
    splashText: {
        fontSize: 40,
        color: '#C8E6C9',
        fontFamily: 'sans-serif'    
    },
    
    splashButton: {
        marginRight: 10    
    },
    
    rowImage: {
        justifyContent: 'flex-start',
        width:110,
        height:110,
        marginLeft:20,
        marginTop:10
    },
    
    rowText: {
        fontSize: 18,
        color: '#484848',
        fontFamily: 'sans-serif',
        justifyContent: 'flex-end',
        paddingLeft:15
    },
    
    rowTextTitle: {
        fontSize: 22,
        color: '#212121',
        fontFamily: 'sans-serif',
        justifyContent: 'flex-end',
        paddingLeft:15,
        fontWeight:'bold'
    },
    
    rowStyle: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    
    th: {
        height:140,
        //flexDirection: 'row',
        //justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginBottom: 2,
        padding: 5,
        backgroundColor: '#e6ee9c'
    },
    
    viewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
    store: {
        backgroundColor:'#f0f4c3'
    },
    
    header: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#4caf50',
        fontSize: 30
    },
    
    subheader: {
        color: '#087f23',
        textAlign: 'center',
        backgroundColor: '#4caf50',
        fontSize: 16
    },
    
    camera: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        justifyContent: 'flex-end',
        backgroundColor: '#087f23',
        borderRadius:65,
        width:65,
        height: 65
    },
    
    plus: {
        color:'white',
        textAlign:'center',
        fontSize:70,
        top:11
    }
});
