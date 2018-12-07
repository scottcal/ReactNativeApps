import React, {Compenent} from 'react';
import {View, TextInput} from 'react-native';
import {Card, CardSection, Button} from './common';

class LoginForm extends Comment {
    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput style={{height: 20,width: 100}}/>
                </CardSection>
                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;

