import './index.css'

const EventItem = props => {
  const {eachEvent, onClickImage} = props

  const {id, imageUrl, name, location} = eachEvent

  const onClickEvent = () => {
    onClickImage(id)
  }

  return (
    <li className="li-item">
      <button onClick={onClickEvent} type="button">
        <img className="image-1" src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
