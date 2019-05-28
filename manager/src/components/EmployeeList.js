//@flow
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        //console.log('fetching data first time on Mount');
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with
        //this.props is still the old set of props.
        //console.log('fetch data source after component is rendered');
        
        this.createDataSource(nextProps);
        //console.log ('Give me next props: '+nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render(){
        //console.log('show props: '+JSON.stringify(this.props, null, 4) );
        //console.log(JSON.parse(this.props));
        return(
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) =>{
        //console.log('returning data');
        return {...val,uid} // {shift: 'Monday', name: 'Alex', id: 'fjd9s0f9fd'};
    });
    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
