import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreasesItemQuantity, increreaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currenQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreasesItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currenQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increreaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
