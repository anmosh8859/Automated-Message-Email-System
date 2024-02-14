import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography} from 'mdb-react-ui-kit';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Brands icons for social media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
  return (
    <div className="vh-100" style={{marginTop:'-10px'}}>
      <MDBContainer className="container py-5 h-100" style={{width:'300px'}}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Name Singh</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Super Admin
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <FontAwesomeIcon icon ={faFacebook}></FontAwesomeIcon>
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                  <FontAwesomeIcon icon ={faTwitter}></FontAwesomeIcon>
                  </MDBBtn>
                  <MDBBtn outline floating>
                  <FontAwesomeIcon icon ={faInstagram}></FontAwesomeIcon>
                  </MDBBtn>
                </div>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5" style={{marginLeft:'30px'}}>847</MDBCardText>
                    <MDBCardText className="small text-muted mb-0" style={{marginLeft:'30px'}}>Admins</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5" style={{marginRight:'25px'}}>8517</MDBCardText>
                    <MDBCardText className="small text-muted mb-0" style={{marginRight:'25px'}}>Members</MDBCardText>
                  </div>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Profile

