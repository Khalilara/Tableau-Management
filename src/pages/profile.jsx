import React, { useState } from 'react';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarryOnModalOpen, setIsCarryOnModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenCarryOnModal = () => {
    setIsCarryOnModalOpen(true);
  };

  const handleCloseCarryOnModal = () => {
    setIsCarryOnModalOpen(false);
  };

  const handleNavigate = (path) => {
    window.location.href = path;
    handleCloseModal();
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-screen h-screen items-center justify-center">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-2xl font-bold ">Welcome to your Profile</h1>
        </div>
        <button 
          className="btn btn-primary font-semibold"
          onClick={handleOpenModal}
        >
          New Tab
        </button>
        <button         
          className="btn btn-primary font-semibold"
          onClick={handleOpenCarryOnModal}
        >
          Carry On
        </button>
      </div>

      {/* Modal for New Tab */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Select a Tab</h2>
            <div className="flex flex-col gap-3">
              <button 
                className="btn btn-accent btn-block uppercase"
                onClick={() => handleNavigate('/Tableau')}
              >
                tab1
              </button>
              <button 
                className="btn btn-accent btn-block uppercase"
                onClick={() => handleNavigate('/Tableau2')}
              >
                tab2
              </button>
              <button 
                className="btn btn-accent btn-block uppercase"
                onClick={() => handleNavigate('/Tableau3')}
              >
                tab3
              </button>
              <button 
                className="btn btn-accent btn-block uppercase"
                onClick={() => handleNavigate('/Tableau4')}
              >
                tab4
              </button>
              <button 
                className="btn btn-outline btn-block uppercase mt-3"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Carry On */}
      {isCarryOnModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Coming Soon</h2>
            <button 
              className="btn btn-outline btn-block uppercase"
              onClick={handleCloseCarryOnModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
