import './index.css'

const ActiveRegistrationDetails = props => {
  const {registrationStatus} = props

  switch (registrationStatus) {
    case 'NULL':
      return (
        <div className="register-image-container">
          <p className="register-para">
            Click on an event, to view its registration details
          </p>
        </div>
      )
    case 'REGISTERED':
      return (
        <div className="register-image-container">
          <img
            className="register-image"
            alt="registered"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          />
          <h1 className="register-status-head">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="register-image-container">
          <img
            className="register-image"
            alt="yet to register"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          />
          <p className="register-status-para">
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make you fall totally in love with
            this beautiful art form.
          </p>
          <button className="register-button" type="button">
            Register Here
          </button>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="register-image-container">
          <img
            className="register-image"
            alt="registrations closed"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          />
          <h1 className="register-status-head">
            Registrations Are Closed Now!
          </h1>
          <p className="register-status-para">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      )
    default:
      return null
  }
}

export default ActiveRegistrationDetails
