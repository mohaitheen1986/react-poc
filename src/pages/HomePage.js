import React, { Fragment } from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBCardHeader,
  MDBBtn
} from 'mdbreact';
import './HomePage.css';
import PatientLists from './components/patientLists';
import AppointmentLists from './components/appointmentLists';

class HomePage extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    render() {
        return (
            <>
        {/* <MDBEdgeHeader color='indigo darken-3' className='sectionPage' /> */}
            <div>
            <div  style={{marginTop: "20px"}}>
                <MDBRow>
                  <MDBCol md='2' lg="2" sm="0" className="d-col-none">
                      <MDBCard className="card-container" style={{marginBottom: "10px"}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/home.svg" className="nav-img" />
                                    <label>Home</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/patientList.svg" className="nav-img" />
                                    <label>Patients</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/note.svg" className="nav-img" />
                                    <label>Doctors</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/monitor.svg" className="nav-img" />
                                    <label>RPM</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/assessment.svg" className="nav-img" />
                                    <label>Telemedicine</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                <div class="container">
                                    <img src="images/icons/timeline.svg" className="nav-img" />
                                    <label>Timeline</label>
                                </div>
                            
                                </MDBCol>
                                
                            </MDBRow>

                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol md='7'  lg="7"  sm='12'>
                    <MDBRow>
                        <MDBCol className="col-6" lg="4" md='4' sm='4' xs='4' xl='4' lg='4'>
                            <MDBCard  className="card-overview"> 
                                <MDBCardBody>
                                    <MDBRow>
                                     <MDBCol   className="col-4" md="4" lg="4" sm="4"  xs='4' xl='4'   style={{textAlign: "center"}}>
                                     <img src="images/icon1.png" class="img-fluid" alt=""  style={{height: "63px", width: "62px", objectFit: "contain"}} />
                                    </MDBCol>
                                    <MDBCol  className="col-8" md="8" lg="8" sm="8"  xs='8' xl='8'  style={{textAlign: "left"}}>
                                        <MDBRow>
                                            <label className="label-card-header">324<span className="label-card-value"> +24%</span></label>
                                        </MDBRow>
                                        <MDBRow>
                                            <label className="label-table-sub-header">Patint's Per Month</label>
                                        </MDBRow>
                                    </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-6" lg="4" md='4' sm='4' xs='4' xl='4' lg='4'>
                            <MDBCard   className="card-overview">
                            <MDBCardBody>
                                    <MDBRow>
                                     <MDBCol className="col-4" md="4" lg="4" sm="4"  xs='4' xl='4'   style={{textAlign: "center"}}>
                                     <img src="images/icon2.png" class="img-fluid" alt=""  style={{height: "63px", width: "62px", objectFit: "contain"}}/>
                                    </MDBCol>
                                    <MDBCol className="col-8" md="8" lg="8" sm="8"   xs='8' xl='8'  style={{textAlign: "left"}}>
                                        <MDBRow>
                                            <label className="label-card-header">159<span className="label-card-value"> +5%</span></label>
                                        </MDBRow>
                                        <MDBRow>
                                            <label className="label-table-sub-header">New Patints</label>
                                        </MDBRow>
                                    </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className="col-6" lg="4" md='4' sm='4' xs='4' xl='4' lg='4'>
                            <MDBCard  className="card-overview">
                            <MDBCardBody>
                                    <MDBRow>
                                     <MDBCol  className="col-4" md="4" lg="4" sm="4"  xs='4' xl='4'   style={{textAlign: "center"}}>
                                        <img src="images/icon3.png" class="img-fluid" alt="" style={{height: "63px", width: "62px", objectFit: "contain"}} />
                                    </MDBCol>
                                    <MDBCol  className="col-8" md="8" lg="8" sm="8"  xs='8' xl='8'   style={{textAlign: "left"}}>
                                        <MDBRow>
                                            <label className="label-card-header">169<span className="label-card-neg-value "> -24%</span></label>
                                        </MDBRow>
                                        <MDBRow>
                                            <label className="label-table-sub-header">Satisfied Patints</label>
                                        </MDBRow>
                                    </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <label className="label-header">Patient Lists</label>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="card-center-container">
                        {/* <MDBCard  className="card-container"> */}
                        <PatientLists />

                          {/* </MDBCard> */}
                        </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol md='3'  lg="3">
                        <MDBCard  className="card-right-container">
                            <MDBCardBody>
                                    <MDBRow>    
                                        <MDBCol md='6'  lg="6" sm="6">
                                            <label>Appointments</label>
                                        </MDBCol>
                                        <MDBCol style={{textAlign: "right"}}  md='6'  lg="6" sm="6">
                                            <label className="label-table-sub-header">View All</label>
                                        </MDBCol>
                                       
                                    </MDBRow>
                                    <MDBRow> 
                                        <Fragment>
                                        <MDBBtn color="danger" rounded>UPCOMING</MDBBtn>
                                        <MDBBtn rounded outline color="danger">PAST</MDBBtn>
                                        </Fragment>   
                                    </MDBRow>  
                                    <MDBRow>
                                        <MDBCol md='12'  lg="12" sm="12">
                                        <AppointmentLists />

                                        </MDBCol>
                                    </MDBRow> 
                                </MDBCardBody>
                                
                          
                      </MDBCard>
                  </MDBCol>
                </MDBRow>
            </div>
            </div>
            </>
         )
        }
}
export default HomePage;

