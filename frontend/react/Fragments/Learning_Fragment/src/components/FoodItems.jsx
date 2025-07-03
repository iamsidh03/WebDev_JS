import item from "./Item";

const foodItems = () => {
  //let foodItems = []

  //   let emptyMessage= foodItems.length===0?<h3>I am still hungry.</h3>:null

  if (foodItems.length === 0) {
    return <h2>I am still Hungry</h2>;
  }
  return (
    <ul className="list-group">
      {foodItems.map((props) => (
        <item key={props.id} foodItems={props.foodItems} />
      ))}
    </ul>
  );
};
