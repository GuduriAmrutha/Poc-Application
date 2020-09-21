import React, { Component } from "react";
import myImage from '../src/img/amrut.jpg';
import './Dashboard.css';
import { Placeholder } from 'semantic-ui-react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        heading: ''
      },
      title:'Amrutha'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit() {
    alert('Your selection saved!');
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    this.state.title = this.state.fields.heading;
}

  render() {
    return (
      <div>
        <div>

          <div className="header">
            <div className="d3">
              <div><img src={myImage} className="imagesize ui circular image" /></div>
            </div>
            <div className="d4"> <div> <h3>Welcome {this.state.title}</h3></div>
            <div><h5>Last Login : 21-Sep-2020</h5></div>

            </div>
          </div>
        </div>

        <div className="ui divider"></div>
        <div className="account-balance"><h3>Account Balance: &#x20B9;7500</h3></div>
        <table className="ui celled fixed single line table">
          <thead className="">
            <tr className="">
              <th className="">Date</th>
              <th className="">Description</th>
              <th className="">Amount</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="">02-May-2019</td>
              <td className="">Room Rent</td>
              <td className="">4000</td>
            </tr>
            <tr className="">
              <td className="">05-May-2019</td>
              <td className="">Weekend Party</td>
              <td className="">2000</td>
            </tr>
          </tbody>
        </table>

      

      </div>
    );
  }
}

export default Dashboard;