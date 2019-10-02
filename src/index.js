import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'

function LoginForm({onSubmit, buttonText}) {
  return 'login form'
}

function Modal({button, children}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {React.cloneElement(button, {onClick: () => setIsOpen(true)})}
      <Dialog isOpen={isOpen}>
        <button onClick={() => setIsOpen(false)}>close</button>
        {children}
      </Dialog>
    </>
  )
}

function App() {
  return (
    <Modal button={<button>Login</button>}>
      <div>Login</div>
      <LoginForm />
    </Modal>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
