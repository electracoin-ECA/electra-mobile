import React from 'react';
import {Dimensions, View, Text} from 'react-native'
import { Container, Content, Button, Form, Item, Input, Label } from 'native-base'
import ElectraSpinner  from '../splash/ElectraSpinner'

export default class Login extends React.Component {
  static navigationOptions = ({ navigator });
  render(){
    const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

    return(

        <Container style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#2e1325', alignItems: 'center' }}>
          <Content>

            <View style={{flex: 1, height: screenHeight, alignItems: 'center', justifyContent: 'center', paddingBottom:240}}>
              <ElectraSpinner animate={false}/>
              <Text style={{paddingTop:10, paddingBottom:10, color:'#FFFFFF'}}>Please enter your current passphrase</Text>
              <Form style={{width: screenWidth-100, paddingBottom:20, paddingRight: 10, justifyContent: 'flex-start', alignSelf: 'auto' }}>
                <Item floatingLabel style={{alignSelf: 'auto', justifyContent: 'center', alignItems:'flex-start'}}>
                  <Label>Passphrase</Label>
                  <Input style={{alignSelf: 'auto',width: screenWidth/2, color:'#FFFFFF'}}/>
                </Item>
             </Form>
              <Button primary style={{alignSelf: 'auto', backgroundColor: '#CE61E7', width:screenWidth/3, justifyContent: 'center'}}><Text style={{color:'#FFFFFF', fontWeight: 'bold'}}> Unlock </Text></Button>
           </View>
          </Content>

        </Container>
    )
  }

}
