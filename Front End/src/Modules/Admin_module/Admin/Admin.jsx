import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faUserEdit, faAdd, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styleA from "../../../css/admin.module.css"; // Changed import to styleA
import Profile from '../SuperAdmin/Profile';
import { MDBBtn, MDBCard} from 'mdb-react-ui-kit';
import AdminRegister from '../../Register/AdminRegister';

const Admin = () => {
    const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [isAddAdminClicked, setIsAddAdminClicked] = useState(false); // Track if "Add Admin" link is clicked
    const [isSection2Active, setIsSection2Active] = useState(true); // Track if section2 is active
  
  
    const openMessageBox = () => {
      setIsMessageBoxOpen(true);
    }
  
    const closeMessageBox = () => {
      setIsMessageBoxOpen(false);
    }
  
    const handleChange = (event) => {
      setReplyText(event.target.value);
    }
  
    const handleAddAdminClick = () => {
      setIsAddAdminClicked(true);
      setIsMessageBoxOpen(false);
      setIsSection2Active(false);     // Add this state to track section2 visibility
    }
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Reply submitted:", replyText);
      setReplyText('');
      closeMessageBox();
    }
  
    return (
      <div className={styleA.container}>
        <div className={styleA.section1} >
          
          <MDBCard style={{marginTop:'75px' , borderRadius:'15px' , height:'300px'}}>
          <ul><MDBBtn outline floating style={{marginTop:'25px'}}>
              <FontAwesomeIcon icon ={faUserPlus}></FontAwesomeIcon>
              <span className={styleA.isAddAdminClicked} onClick={handleAddAdminClick}>Add Member</span>
            </MDBBtn>
          </ul>
  
            <ul><MDBBtn outline floating>
              <FontAwesomeIcon icon ={faUserMinus}></FontAwesomeIcon>
              <span className={styleA.isAddAdminClicked} onClick={handleAddAdminClick}>Remove Member</span>
            </MDBBtn>
          </ul>
  
          <ul><MDBBtn outline floating>
            <FontAwesomeIcon icon ={faUserEdit}></FontAwesomeIcon>
            <span className={styleA.isAddAdminClicked} onClick={handleAddAdminClick}>Edit Member</span>
            </MDBBtn>
          </ul>

          <ul><MDBBtn outline floating>
            <FontAwesomeIcon icon ={faAdd}></FontAwesomeIcon>
            <span className={styleA.isAddAdminClicked} onClick={handleAddAdminClick}>Add Templates</span>
            </MDBBtn>
          </ul>
          </MDBCard>
        </div>
  
        <div className={`${styleA.section2} ${isSection2Active ? 'active' : ''}`}>
          {isAddAdminClicked ? (
            <AdminRegister/>
          ) : (
            <>
              <div className={styleA.notification}>
                <h3>Notifications 1</h3>
                <ul>
                  <li>New message received </li>
                </ul>
                <div className={styleA.dots}>
                  <FontAwesomeIcon icon={faEllipsisV} size="1x" onClick={openMessageBox} title="Click to reply"/>   
                </div>
              </div>
              <div className={styleA.notification}>
                <h3>Notifications 2</h3>
                <ul>
                  <li>Happy Birthday </li>
                </ul>
                <div className={styleA.dots}>
                  <FontAwesomeIcon icon={faEllipsisV} size="1x" onClick={openMessageBox} title="Click to reply"/>   
                </div>
              </div>
              <div className={styleA.notification}>
                <h3>Notifications 3</h3>
                <ul>
                  <li>New Message </li>
                </ul>
                <div className={styleA.dots}>
                  <FontAwesomeIcon icon={faEllipsisV} size="1x" onClick={openMessageBox} title="Click to reply"/>   
                </div>
              </div>
            </>
          )}
        </div>
  
        <div className={`${styleA.section3}`}>
        <div className="profile-container">
          <Profile />
        </div>
        </div>
  
  
        {isMessageBoxOpen && (
          <div className={styleA.messageBox}>
            <span className={styleA.closeIcon} onClick={closeMessageBox}>X</span>
            <h4>Reply</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                value={replyText}
                onChange={handleChange}
                placeholder="Type your reply here..."
                rows="2"
                cols="40"
              />
              <button className={styleA.button} type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    );
  }
export default Admin;
