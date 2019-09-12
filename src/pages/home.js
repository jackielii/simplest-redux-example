import React, { Component } from 'react';
import { addDetails, deleteDetails } from './../redux/action';
import { connect } from 'react-redux';

class Home extends Component {

    state = {
        name: "",
        profession: "",
        contactno: "",
    }

    hangleChangeEvent = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    deleteDetails = (object) => {
        console.log(object);
        this.props.deleteDetails(object);
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

    resetForm = () => {
        this.setState({ name: "", profession: "", contactno: "" });
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
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dataCollection && this.props.dataCollection.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.Name}</td>
                                        <td>{data.Profession}</td>
                                        <td>{data.ContactNo}</td>
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
                                <td>ContactNo :</td>
                                <td>
                                    <input onChange={this.hangleChangeEvent} value={this.state.contactno} type="text" name="contactno" />
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <button type="button" onClick={this.submitDetails}>Save Details</button>
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
    deleteDetails: (userDetails) => dispatch(deleteDetails(userDetails))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);