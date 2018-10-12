import React , {Component} from 'react';
import {View,Button,Spinner} from 'react-native';
import RNFirebase from 'react-native-firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = {loggedIn: null};

    componentWillMount()
    {
        RNFirebase.initializeApp({
            apiKey: 'AIzaSyA2GPGgOWwvO7BboHk5fPOU0RTHJuh0LFs',
            authDomain: 'demofirebaseenvironment.firebaseapp.com',
            databaseURL: 'https://demofirebaseenvironment.firebaseio.com',
            projectId: 'demofirebaseenvironment',
            storageBucket: 'demofirebaseenvironment.appspot.com',
            messagingSenderId: '695218110561'
          });
          // signout butonuna basıldığında burası çalışacak state güncellenecek
          // ve tekrardan ekran render olacak
          RNFirebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn: true});
            }else{
                this.setState({loggedIn: false});
            }
          });
    }

    renderForm()
    {
        switch(this.state.loggedIn)
        {
            case true:
                return (
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    )
            case false:
                return <LoginForm/>
            default:
                return <Spinner size='large'/>
        }
    }

    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                {this.renderForm()}
            </View>
        );
    }
}

export default App;