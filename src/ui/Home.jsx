import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import logo from '../ui/Pizza.png';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Slice into Flavorful Delights: Your Pizza Paradise Awaits!
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}{' '}
      <div className="flex items-center justify-center">
        <img
          className="h-100 relative w-80 cursor-pointer object-cover "
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
