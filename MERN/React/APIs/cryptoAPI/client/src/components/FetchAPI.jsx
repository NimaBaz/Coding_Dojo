import React, { useState } from 'react'

const FetchAPI = () => {
    const [coins, setCoins] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log("Getting data from our API: ", response);
            setCoins(response)
        })
        .catch((error) => {
            console.log("This is coming from my catch error: ", error);
        })
        console.log("This is called Asynchronous code");
    }

    return (
        <div>
            <h1>FetchAPI</h1>
            <button onClick={fetchData}>Click!</button>
            {
                coins.map((coin, i) => {
                    return (
                        <div key={i} className='myDiv'>
                            <img src={coin.image} alt="Crypto coin pic" height="100px" />
                            <p>{coin.id}</p>
                            <p>{coin.name}</p>
                            <p>${coin.current_price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchAPI