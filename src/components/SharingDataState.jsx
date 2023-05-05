/* eslint-disable react/prop-types */

const SharingDataState = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

export default SharingDataState