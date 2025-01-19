// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
        {props.ingredient.map((item,index)=>(
            <li key={`${item.name}-${index}`} style={{backgroundColor:item.color}}>            
                <p>{item.name}</p>
                <button onClick={()=> props.removeIngredient(item,index)}>Remove</button>
            
            </li>
        ))}

    </ul>

  )
};

export default BurgerStack;
