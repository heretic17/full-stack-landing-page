import { useEffect, useState } from 'react';
import api from './api'; // Import the Axios instance
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemPage from './pages/ItemPage';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/api/'); // Replace with your actual endpoint
        setItems(response.data); // Assuming the API response structure matches
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage data={ items }/>}/>
          <Route path='/item/:id' element={<ItemPage data={ items }/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;