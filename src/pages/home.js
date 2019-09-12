import React, { Component } from 'react';
import { getDetails } from './../redux/action';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="leftPanel">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Contact No</th>
                        </tr>
                        {this.props.dataCollection.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.Name}</td>
                                    <td>{data.Profession}</td>
                                    <td>{data.ContactNo}</td>
                                </tr>);
                        })}
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
    getDetails: () => dispatch(getDetails())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);