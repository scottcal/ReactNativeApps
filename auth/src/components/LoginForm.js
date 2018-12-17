import React, {Compenent} from 'react';
import {View} from 'react-native';
import {Card, CardSection, Button} from './common';

class LoginForm extends Comment {
    render(){
        return(
            <Card>
                <CardSection />
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

