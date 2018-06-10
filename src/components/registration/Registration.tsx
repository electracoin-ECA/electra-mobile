import React from 'react';
import {Dimensions, View, Text} from 'react-native'
import { Container, Content, Button } from 'native-base'
import ElectraSpinner  from '../splash/ElectraSpinner'

export default class Registration extends React.Component {
  //static navigationOptions = ({ navigator });
  render(){
    const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
    return(

        <Container style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2e1325'}}>
          <Content>

            <View style={{flex: 1, height: screenHeight, alignItems: 'center', justifyContent: 'center', margin:6}}>
              <ElectraSpinner animate={false}/>
              <Text style={{paddingTop:10, paddingBottom:10, color:'#FFFFFF'}}>REGISTER A NEW WALLET</Text>
              <Button primary style={{alignSelf: 'auto', backgroundColor: '#CE61E7', width:screenWidth-50, justifyContent: 'center'}}><Text style={{color:'#FFFFFF', fontWeight: 'bold'}}> GENERATE A NEW MNEMONIC </Text></Button>
              <Text style={{paddingTop:30, paddingBottom:10, color:'#FFFFFF'}}>RECOVER EXISTING WALLET</Text>
              <Button primary style={{alignSelf: 'auto', backgroundColor: '#CE61E7', width:screenWidth-50, justifyContent: 'center'}}><Text style={{color:'#FFFFFF', fontWeight: 'bold'}}> RECOVER A WALLET VIA MNEMONIC </Text></Button>
           </View>
          </Content>

        </Container>
    )
  }

}
