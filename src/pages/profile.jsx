import React, { useState } from "react";


 const Profile = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
 
   const handleOpenModal = () => {
     setIsModalOpen(true);
   };
 
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };
 
   return (
     <>
       <div>
         <h1>Welcome Dear Colleague to your Profile</h1>
         {/* Button to open the modal */}
         <button onClick={handleOpenModal}>New Tab</button>
         <button>Carry On</button>
       </div>
 
       {/* Modal for the 4 buttons */}
       {isModalOpen && (
         <div style={styles.modalOverlay}>
           <div style={styles.modalContent}>
             <h2>Select a Tab</h2>
             <button onClick={() => (window.location.href = "/Tableau")}>Tab 1</button>
             <button onClick={() => (window.location.href = "/Tableau2")}>Tab 2</button>
             <button onClick={() => (window.location.href = "/Tableau3")}>Tab 3</button>
             <button onClick={() => (window.location.href = "/Tableau4")}>Tab 4</button>
             <button style={styles.closeButton} onClick={handleCloseModal}>
               Close
             </button>
           </div>
         </div>
       )}
     </>
   );
 };

const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "400px",
      maxHeight: "90%",
      overflowY: "auto",
    },
    buttonContainer: {
      marginBottom: "20px",
      display: "flex",
      justifyContent: "space-around",
    },
    tabContent: {
      marginTop: "20px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    closeButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
  

export default Profile;