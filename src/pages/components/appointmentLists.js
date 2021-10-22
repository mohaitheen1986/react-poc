import React, { Fragment } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { MDBCard, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBBtn, Link } from 'mdbreact';

class AppointmentLists extends React.Component {
    state = {
        persons: [],
        headers: [{"title" : "Patient", "col_value" : "4"}, {"title" : "Phone", "col_value" : "2"}, 
        {"title" : "Gender", "col_value" : "2"}, {"title" : "Age", "col_value" : "2"}, {"title" : "", "col_value" : "2"}]
      }
    
      componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=20`)
          .then(res => {
            console.log(res.data.results);
            const persons = res.data.results;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
          <div style={{bottom: "10px"}}>
            
            <MDBRow>
            { this.state.persons.map(person => 
              <MDBCol md="12" lg="12" sm="4">
              <MDBCard style={{height: "100px", marginTop: "15px", bottom: "5px"}}>
              <MDBCardBody>
              <MDBRow>
                <MDBCol  md="12" lg="12" sm="12"  style={{textAlign: "left"}}>
                  <MDBRow>
                    <MDBCol md="3" lg="3" sm="3"   style={{textAlign: "left"}}>
                    <img
  src={person.picture.medium}
  class="rounded-circle"
  style={{width: "40px", height: "40px"}}
  alt=""
/>
                    </MDBCol>
                    <MDBCol md="9" lg="9" sm="9" >
                      <MDBRow  style={{textAlign: "left"}}>
                        <MDBCol   md="12" lg="12" sm="12">
                        <label className="label-table-main-title">{person.name.first + " " + person.name.last}</label>
                        </MDBCol>
                       
                      </MDBRow>
                      <MDBRow  style={{textAlign: "left"}}>
                        <MDBCol  md="12" lg="12" sm="12">
                        <label className="label-table-sub-header" >{person.location.city + ", " + person.location.country.replace(/\s+/g, '')}</label>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                
              </MDBRow>
                </MDBCardBody>
               
                
              </MDBCard>
              </MDBCol>
            
            )}
            </MDBRow>
          </div>
        
        )
      }

}

export default AppointmentLists;
