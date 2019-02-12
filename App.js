import React, { Component } from 'react';
import {StyleSheet,Button} from 'react-native';
import { Container, Header, Content,Item,Icon,Input } from 'native-base';
export default class App extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={name:'',password:'',mailId:'',password:''};
  }
  render() {
    return (
      <Container>
        <Header />
        <Content style={styles.content} >
        <Item>
            <Icon active name='contact' />
            <Input onChangeText={(name)=>{this.setState({name:name})}} placeholder='Username'/>
          </Item>
          <Item >
            <Icon active name='eye' />
            <Input type="password" placeholder='Password'/>
          </Item>
          <Item>
            <Icon active name='mail' />
            <Input onChangeText={(name)=>{this.setState({name:name})}} placeholder='mailId'/>
          </Item>
          <Item>
            <Icon active name='phone-portrait' />
            <Input textContentType="telephoneNumber" onChangeText={(name)=>{this.setState({name:name})}} placeholder='phonenumber'/>
          </Item>
          <Button title="submit" onPress={this.handleClick}></Button>
        </Content>
      </Container>
    );
  }

handleClick(){
  var details = {

    'name':
    this.state.name,
    
    'email':
    this.state.email,
    
    'phonenumber':
    this.state.phonenumber,
    
    'password':
    this.state.password
    
    
    
    };
    
   
    
    
    var formBody = [];
    
    for (var
    property in
    details) {
    
    var encodedKey =
    encodeURIComponent(property);
    
    var encodedValue =
    encodeURIComponent(details[property]);
    
    formBody.push(encodedKey +
    "=" + encodedValue);
    
    }
    
    formBody = formBody.join("&");

var prmse=fetch("http://192.168.139.90:3000/auth/register",{method:'POST',headers:{'Content-Type':
'application/x-www-form-urlencoded'},body:formBody})
prmse.then((res)=>res.json()).then((response)=>{alert(response)})
  }}
const styles=StyleSheet.create({
  content:{
    flex:1,               
   
  },
  input:{
    width:100,
  
  }
})