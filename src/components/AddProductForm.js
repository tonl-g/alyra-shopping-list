// src/components/AddProductForm.js
const AddProductForm = (props) => {
  const { shopping, addToShoppingList } = props
  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.elements.product.value)
    const newProduct = event.target.elements.product.value
    if (!shopping.includes(newProduct)) {
      addToShoppingList(newProduct)
    } else {
      alert(`${newProduct} est déjà sur la liste`)
    }
    event.target.reset()
  }
    return (
      <form className="mb-5" onSubmit={handleFormSubmit}>
        <div className="input-group mb-2">
          <input
            id="product"
            className="form-control"
            aria-label="Ajouter sur la liste"
            required
          />
          <button type="submit" className="btn btn-success btn-lg">
            J'ajoute !
          </button>
        </div>
      </form>
    )
  }
  
  export default AddProductForm