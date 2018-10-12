import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Button,Card,CardSection,Input,Spinner} from './common';

class LoginForm extends Component{

    state = {mailtext: '', password: '',error: '', showSpinner: false};

    render(){
        return(
            <Card>
                <CardSection>
                    <Input onChangeText={text=>this.onMailTextChanged(text)} 
                        label = 'Email'
                        placeholder = 'user@domain.com'
                        value = {this.state.mailtext}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder = 'password'
                        value = {this.state.password}
                        onChangeText = {text=>this.onPasswordTextChanged(text)}
                        label = 'Password'
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>  
            </Card>
        );
    }

    renderButton()
    {
        if(this.state.showSpinner){
            return <Spinner size='small'></Spinner>;
        }
            
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        );   
    }

    onButtonPress(){

        this.setState({error:'', showSpinner: true});

        firebase.auth()
            .signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(()=>this.onLoginSuccess())
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(()=>this.onLoginSuccess())
                    .catch(() => this.onLoginFailed());
            });
    }

    onLoginFailed(){
        this.setState({error: 'Authentication failed', showSpinner:false});
    }

    onLoginSuccess(){
        this.setState({email:'',password:'',showSpinner:false, error:''});
    }

    onMailTextChanged(input){
        this.setState({mailtext:input});
    }

    onPasswordTextChanged(input){
        this.setState({password:input});
    }
}

const styles = {
    errorTextStyle : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;