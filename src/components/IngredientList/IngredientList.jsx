// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
        {props.ingredient.map((item,index)=> (
            <li key={index} style={{backgroundColor:item.color}}>
                <p>{item.name}</p>
                <button onClick={()=>props.addIngredient(item)}>Add</button>
            </li>

        ))}
    </ul>
  )
};

export default IngredientList;
