import Items from '../components/Item';
import { Props } from '../types';

function HomePage({ data }: Props) {
  return (
    <div>
      <h1>Home Page</h1>
      <Items data={data} />
    </div>
  );
}

export default HomePage;