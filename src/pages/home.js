import React, { Component } from 'react';
import { addDetails } from './../redux/action';
import { connect } from 'react-redux';

class Home extends Component {

    submitDetails = () => {
        this.props.addDetails("Hello");
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
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.dataCollection && this.props.dataCollection.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.Name}</td>
                                        <td>{data.Profession}</td>
                                        <td>{data.ContactNo}</td>
                                    </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="rightPanel">
                    <table>
                        <tr>
                            <td>Name :</td>
                            <td>
                                <input type="text" name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>Profession :</td>
                            <td>
                                <input type="text" name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>ContactNo :</td>
                            <td>
                                <input type="text" name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <button type="button" onClick={this.submitDetails}>Save Details</button>
                            </td>
                        </tr>
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
    addDetails: (userDetails) => dispatch(addDetails(userDetails))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);