import './Headline.css'

const Headline = () => {

    const options = [
        {id:1, text: "Fast Free Shopping"},
        {id:2, text: "Order now to get Flat 30% off"},
        {id:3, text: "4.9 Google Rating ⭐⭐⭐⭐⭐"},
    ]

  return (
    <div className="headline-div">
      <div className="headline-flex-container">
      {options.map((option) => (
        <div className="headline-flex-item" key={option.id}>
            <p>{option.text}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Headline
