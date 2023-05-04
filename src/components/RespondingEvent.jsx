const RespondingEvent = () => {
  const handleClick = () => {
    alert('You clicked me')
  }

  return (
    <button onClick={handleClick}>
      Click me gaiss
    </button>
  )
}

export default RespondingEvent