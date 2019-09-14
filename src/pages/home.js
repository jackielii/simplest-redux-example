import React, { Component } from 'react';
import { addDetails, deleteDetails , editDetails } from './../redux/action';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        name: "",
        profession: "",
        contactno: "",
        isUpdate : false
    }

    hangleChangeEvent = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    deleteDetails = (object) => {
        this.props.deleteDetails(object);
    }

    updateDetails = (object) => {
        this.setState({
            name: object.name,
            profession: object.profession,
            contactno: object.contactno,
            Id: object.Id,
            isUpdate : true
        });
    }

    submitDetails = () => {
        const userDetails = {
            name: this.state.name,
            profession: this.state.profession,
            contactno: this.state.contactno
        }
        this.props.addDetails(userDetails);
        this.resetForm();
    }

    submitUpdateDetails = () => {
        const userDetails = {
            Id: this.state.Id,
            name: this.state.name,
            profession: this.state.profession,
            contactno: this.state.contactno
        }
        this.props.editDetails(userDetails);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: "",
            profession: "",
            contactno: "",
            isUpdate: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="leftPanel">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Profession</th>
                                <th>Contact No</th>
                                <th style={{textAlign:"center"}} colSpan="2" width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dataCollection && this.props.dataCollection.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.profession}</td>
                                        <td>{data.contactno}</td>
                                        <td width="10%">
                                            <button onClick={() => this.updateDetails(data)} type="button">EDIT</button>
                                        </td>
                                        <td width="10%">
                                            <button onClick={() => this.deleteDetails(data)} type="button">DELETE</button>
                                        </td>
                                    </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="rightPanel">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name :</td>
                                <td>
                                    <input onChange={this.hangleChangeEvent} value={this.state.name} type="text" name="name" />
                                </td>
                            </tr>
                            <tr>
                                <td>Profession :</td>
                                <td>
                                    <input onChange={this.hangleChangeEvent} value={this.state.profession} type="text" name="profession" />
                                </td>
                            </tr>
                            <tr>
                                <td>Contact No :</td>
                                <td>
                                    <input onChange={this.hangleChangeEvent} value={this.state.contactno} type="text" name="contactno" />
                                </td>
                            </tr>
                            
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                {this.state.isUpdate &&
                                <React.Fragment><button type="button" onClick={this.submitUpdateDetails}>Update</button>  <button type="button" onClick={this.resetForm}>Cancel</button></React.Fragment>}
                                     {!this.state.isUpdate &&
                                    <button type="button" onClick={this.submitDetails}>Save Details</button>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    dataCollection: state.dataCollection
})

const mapDispatchToProps = dispatch => ({
    addDetails: (userDetails) => dispatch(addDetails(userDetails)),
    deleteDetails: (userDetails) => dispatch(deleteDetails(userDetails)),
    editDetails: (userDetails) => dispatch(editDetails(userDetails))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);