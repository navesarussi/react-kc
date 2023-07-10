import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useeffects');
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/dashboard');
        console.log("sdfsdfdsf",response.data);
        setCoins(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Coin Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td><i className="fa fa-bitcoin"></i></td> 
              <td>{coin.name}</td>
              <td>{coin.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPage;
