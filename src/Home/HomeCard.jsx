
function HomeCard(props) {
  return (
    <div id='card'>
      <img src={props.image} alt='image not found' />
      <h2>{props.title}</h2>
    </div>
  )
}

export default HomeCard
