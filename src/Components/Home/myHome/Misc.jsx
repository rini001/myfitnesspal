import React from 'react'

export const Misc = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
        {isOpen && (
                  <div>
                    <h1>Are you sure?</h1>
                    {/* <button onClick={() => handleDelete(elem.id)}>yes</button> */}
                    <button onClick={openModal}>yes</button>
                    <button onClick={closeModal}>No</button>
                  </div>
                )}
    </div>
  )
}
