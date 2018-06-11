import React from 'react'
import {Dimensions, View, AsyncStorage, Alert} from 'react-native'
import { Container, Content, Text } from 'native-base'
import ElectraSpinner  from './ElectraSpinner'
import Config from 'react-native-config'

let DeviceInfo = require('react-native-device-info');

interface UserSession {
  code: number,
  message: string,
  status: string,
  sessionId: string
}
interface SplashScreenProps {
 name: string,
 navigation: any
}

interface SplashScreenState {
  userSession: Array<UserSession>,
  isLoading: Boolean,
  status: string,
  deviceId: string
}

export default class SplashScreen extends React.Component<SplashScreenProps, SplashScreenState> {
  //static navigationOptions = ({ navigator });
  constructor(props: SplashScreenProps) {
    super(props);
    this.state = {
      userSession: [],
      isLoading: true,
      status: 'Loading...',
      deviceId: ''
    };
  }

  componentDidMount() {
        //get the Unique ID of the Device
        //Create the Request and send it
        this.setState({status:'Verifying...'});
        AsyncStorage.removeItem('electra-device-id');
        this.checkDeviceIdInStorage();
        this.setState({status:'Loading...'});


  }

  private async checkDeviceIdInStorage() {

    let deviceId = await this.getDeviceId();

    if(deviceId === null){

        //send the request to back end and retrieve the encrypted device id
        //store it in local storage and navigate the login screen
        this.verifyDeviceId(false);
    }else {
      //send the encrypted device id to the back end and verify the encrypted device id
      //and check the status if the user should navigate to login or registration screen
      this.verifyDeviceId(true);
    }

  }

  private async verifyDeviceId(isEncrypted:boolean){
    let deviceId = DeviceInfo.getUniqueID();
    let electraUserRequest = {
      deviceId: deviceId,
      channel: 'web',
      language: 'us',
      encrypted: isEncrypted
    };
    try{

      let electraRequest = JSON.stringify(electraUserRequest);
      let response = await fetch(Config.API_URL+'/createSession', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: electraRequest,
      });

      let electraResponse = await response.json();
      this.saveDeviceId(electraResponse.deviceId);
      this.navigateUserOnResponse(electraResponse.status);
    }
    catch(error){
      Alert.alert('Error Occured While Fetching: ' + error);
    }



  }

  render() {
     const {height: screenHeight} = Dimensions.get('window');
    if(this.state.isLoading) {
      return this.renderCurrentAction(screenHeight);
    }
    return;
  }

  private renderCurrentAction(screenHeight: any){
      return (
        <Container style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2e1325'}}>
          <Content>
            <View style={{flex: 1, height: screenHeight, alignItems: 'center', justifyContent: 'center'}}>
              <ElectraSpinner animate={true}/>
              <Text style={{ fontSize: 20, color:'#FFFFFF' }}>{this.state.status}</Text>
           </View>
          </Content>
        </Container>
      )
  }

  private saveDeviceId(deviceId: string){
      AsyncStorage.setItem('electra-device-id', deviceId);
  }

  private async getDeviceId() {
    let deviceId = null;
    try {
        deviceId = await AsyncStorage.getItem('electra-device-id');
    }
    catch(error) {
       Alert.alert('Cannot retrieve Device Id: '+error);
    }

    return deviceId;
  }

  private navigateUserOnResponse(status: string) {

    if(status === 'ACTIVE'){
      //Modal of Login Screen
      this.props.navigation.navigate('Login');
    }
    else if(status === 'NEW' || 'REGISTER') {
      //Modal of Registration Screen
      this.props.navigation.navigate('Registration');
    }
    else if(status === 'BLOCKED') {
      //Alert user that the user is blockedd
    }
  }

}
