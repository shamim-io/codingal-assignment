import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const AccessibilityContainer = styled.div`
  display: flex;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LoginButton = styled.div`
  border: 0;
  outline: 0;
  padding: 0.5em 1.5em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  background-color: red;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }
`;

const CancelButton = styled.div`
  border: 0;
  outline: 0;
  padding: 0.5em 1.5em;
  color: black;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  background-color: whitesmoke;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #00c9ff;
  }
`;

const Timer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 18px;
  color: gray;
`;

function Accessibility() {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [reason, setReason] = useState(false);
  const [otherReason, setOtherReason] = useState(false);

  let interval = useRef();

  const startTimer = () => {
    let next = new Date().getTime();
    next = next + 10 * 60000; // Adding 10 minutes

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = next - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop
        clearInterval(interval.current);
      } else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const someref = interval.current;
    startTimer();
    return () => {
      clearInterval(someref);
    };
  }, []);

  var subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setReason(false);
  }

  const radioChange = () => setReason(true);

  const endClass = () => {
    setTimerMinutes(0);
    setTimerSeconds(0);
    setIsOpen(false);
    setReason(false);
  };

  const otherReasonOption = () => {
    setOtherReason(true);
  };

  return (
    <AccessibilityContainer>
      <Timer>
        <p> {timerMinutes} </p>
        <p>:</p>
        <p>{timerSeconds}</p>
      </Timer>
      <LoginButton onClick={openModal}>End Class</LoginButton>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="font-bold p-4 text-2xl">
          Select a reason to end class
        </div>
        <form className="p-4">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <input
                type="radio"
                onClick={() => setReason(false)}
                name="one"
                className="m-2"
              />{" "}
              Class completed
            </div>

            <div className="flex flex-row">
              <input
                type="radio"
                name="one"
                className="m-2"
                onChange={radioChange}
              />{" "}
              Class inturrupted/aborted{" "}
            </div>
          </div>

          {reason && (
            <div className="flex flex-col p-5">
              <div className="flex flex-row">
                <input type="radio" className="m-2" name="reason" /> Student
                didn't show up for the class{" "}
              </div>

              <div className="flex flex-row">
                <input type="radio" className="m-2" name="reason" /> Student
                didn't show any interest.
              </div>

              <div className="flex flex-row">
                <input type="radio" className="m-2" name="reason" /> Student got
                disconnected.
              </div>

              <div className="flex flex-row">
                <input type="radio" className="m-2" name="reason" /> I got
                disconnected.
              </div>

              <div className="flex flex-row">
                <input
                  type="radio"
                  onClick={otherReasonOption}
                  className="m-2"
                  name="reason"
                />{" "}
                Other reason.
              </div>
              {otherReason && (
                <input
                  className="p-2 rounded"
                  type="textarea"
                  placeholder="Type here ...."
                />
              )}
            </div>
          )}
          <div className="flex flex-row justify-between m-4">
            <LoginButton onClick={endClass}>End Class</LoginButton>
            <CancelButton onClick={closeModal}>Cancel</CancelButton>
          </div>
        </form>
      </Modal>
    </AccessibilityContainer>
  );
}

export default Accessibility;
