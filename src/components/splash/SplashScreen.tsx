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
  this.setState({status:'Verifying...'});
  AsyncStorage.removeItem('electra-device-id');
  this.checkDeviceIdInStorage();
  this.setState({status:'Loading...'});
}

private async checkDeviceIdInStorage() {
  let deviceId = await this.getDeviceId();
  if(deviceId === null){
    this.verifyDeviceId(false);
  }else {
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
    this.props.navigation.navigate('Login');
  }
  else if(status === 'NEW' || 'REGISTER') {
    this.props.navigation.navigate('Registration');
  }
  else if(status === 'BLOCKED') {
    Alert.alert('Device is Blocked. Please contact support');
  }
}

}
