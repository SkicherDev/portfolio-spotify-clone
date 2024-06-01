// OTHER IMPORTED FILES
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// MAIN PAGE
function Main() {
  // STATE
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  // END POINT
  const endpoints = [
    "https://api.spotify.com/v1/browse/categories/toplists/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists",
  ];
  // USE EFFECT
  useEffect(() => {
    if (!token) {
      setError(new Error("Token is missing"));
      return;
    }
    // FETCH DATA
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((url) =>
            fetch(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((res) => {
              if (!res.ok) {
                throw new Error("Network response was not ok");
              }
              return res.json();
            })
          )
        );
        const combinedData = responses.flatMap((res) =>
          res.playlists.items.slice(0, 6)
        );
        setData(combinedData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [token]);

  const navigate = useNavigate();
  // PLAYLIST
  function handleRedirect(id) {
    navigate(`playlist/${id}`);
  }
  // ERROR
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  // LOADER
  if (data.length === 0) {
    return (
      <h1 className="text-white flex flex-wrap justify-center font-bold text-2xl mt-20 mb-20">
        Loading...
      </h1>
    );
  }

  return (
    // RETURN
    <div className="relative mb-[22px]">
      <div className="justify-center mx-auto relative gap-10 w-[765px] bg-[#121212] flex flex-wrap-reverse pt-[50px] px-[6px]">
        {data.map((el, index) => (
          <div
            key={index}
            className="gap-4 w-[224px] cursor-pointer hover:scale-105 transition-all"
            onClick={() => handleRedirect(el.id)}
          >
            <div className="w-[200px] p-2 rounded-lg h-[324px] bg-[#1B1B1B] hover:bg-[#252525] text-[#B3B3B3]">
              <img
                src={el.images[0].url}
                alt={el.name}
                className="w-[182px] h-[182px] rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <h1 className="text-[16px] text-white">{el.name}</h1>
              <span className="text-[12px]">{el.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
