// src/components/AddPopularProduct.js
const AddPopularProduct = (props) => {
  const {shopping, addToShoppingList} = props
    const populars = [
      { text: "pain", emoji: "🥖" },
      { text: "lait", emoji: "🥛" },
      { text: "pizza", emoji: "🍕" },
      { text: "salade", emoji: "🥬" },
      { text: "oranges", emoji: "🍊" },
    ]
    return (
      <section>
        <h3 className="h5">Avez vous besoin de ?</h3>
        <div className="mb-3 d-flex flex-wrap align-items-center">
          {populars.map((el) => (
            <button
              key={el.text}
              className="btn btn-outline-success me-2 mb-2 d-flex align-items-center"
              onClick={() => addToShoppingList(el.text)}
              disabled={shopping.includes(el.text)}
            >
              {el.text}{" "}
              <span className="fs-1" role="img" aria-hidden>
                {el.emoji}
              </span>
            </button>
          ))}
        </div>
      </section>
    )
  }
  
  export default AddPopularProduct