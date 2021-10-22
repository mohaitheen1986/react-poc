import React, { Fragment } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { MDBCard, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBBtn, Link } from 'mdbreact';

class PatientLists extends React.Component {

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
          <div>
            <MDBRow>
              <MDBCol style={{textAlign: "center"}} md="3" lg="3" sm="3">
                <label className="label-table-header">{this.state.headers[0].title}</label>
              </MDBCol>
              <MDBCol style={{textAlign: "center"}} md="2" lg="2" sm="2">
                <label className="label-table-header">{this.state.headers[1].title}</label>
              </MDBCol>
              <MDBCol style={{textAlign: "center"}} md="2" lg="2" sm="2">
                <label className="label-table-header">{this.state.headers[2].title}</label>
              </MDBCol>
              <MDBCol style={{textAlign: "center"}} md="2" lg="2" sm="2">
                <label className="label-table-header">{this.state.headers[3].title}</label>
              </MDBCol>
              <MDBCol style={{textAlign: "center"}} md="3" lg="3" sm="3">
                <label className="label-table-header">{this.state.headers[4].title}</label>
              </MDBCol>
            {/* { this.state.headers.map(header => 
              <MDBCol style={{textAlign: "center"}} md={header.value} lg={header.value} sm={header.value}>
                <label className="label-table-header">{header.title}</label>
              </MDBCol>)} */}
            </MDBRow>
            <MDBRow>
            { this.state.persons.map(person => 
              <MDBCol md="12" lg="12" sm="12"  xs='12' xl='12'>
              <MDBCard style={{minHeight: "80px", marginTop: "15px", bottom: "5px"}}>
              <MDBCardBody>
              <MDBRow>
                <MDBCol  md="2" lg="3" sm="3"  xs='3' xl='3' style={{textAlign: "left"}}>
                  <MDBRow>
                    <MDBCol md="4" lg="4" sm="4"  style={{textAlign: "center"}}>
                      <img src={person.picture.medium} class="img-fluid rounded-circle" style={{width: "40px", height: "40px"}} alt="" />
                    </MDBCol>
                    <MDBCol md="8" lg="8" sm="8"  xs='8' xl='8'>
                      <MDBRow  style={{textAlign: "center"}}>
                        <MDBCol   md="12" lg="12" sm="12">
                        <label className="label-table-main-title">{person.name.first + " " + person.name.last}</label>
                        </MDBCol>
                       
                      </MDBRow>
                      <MDBRow  style={{textAlign: "center"}}>
                        <MDBCol    md="12" lg="12" sm="12"  xs='12' xl='12'>
                        <label className="label-table-sub-header" >{person.location.city + ", " + person.location.country.replace(/\s+/g, '')}</label>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol  md="2" lg="2" sm="2"  xs='2' xl='2' style={{textAlign: "center"}}>
                  <label className="label-table-header">{person.cell}</label>
                </MDBCol>
                <MDBCol  md="2" lg="2" sm="2"  xs='2' xl='2' style={{textAlign: "center"}}>
                  <label className="label-table-header">{person.gender}</label>
                </MDBCol>
                <MDBCol  md="2" lg="2" sm="2"  xs='2' xl='2' style={{textAlign: "center"}}>
                  <label className="label-table-header">{person.dob.age}</label>
                </MDBCol>
                <MDBCol  md="4" lg="1" sm="3"   xs='3' xl='3' style={{textAlign: "center"}}>
                  <Fragment>
                 
      <MDBBtn rounded outline color="danger">MESSAGE</MDBBtn>
                  </Fragment>
                  


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

export default PatientLists;
