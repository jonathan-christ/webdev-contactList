import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>
          <a href="#">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="#">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <Button variant="primary" onClick={handleShow}>
          click modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Hello,you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <ModalButton target='addModal' label='+'/>
        <Modal id="addModal">
          Bitch
        </Modal> */}
      </>
    )
  }

}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default Index
