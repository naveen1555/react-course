import React, { useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Final = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchDrink = async (apiurl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiurl);
      const { drinks } = await response.json();
      console.log(drinks);
      setDrinksData(drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("data not found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong",
      });
    }
  };

  useEffect(() => {
    const correcturl = `${url}${searchTerm}`;
    fetchDrink(correcturl);
  }, [searchTerm]);
  return (
    <div>
      <h1>useEffect example-2</h1>
      {/* <h1>drinks count:{drinksData.length}</h1> */}
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
      <hr />
      {Loading && !isError?.status && <h3>Loading...</h3>}
      {isError?.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
      {!Loading && !isError?.status && (
        <ul className="cocktail-data">
          {drinksData.map((eachdrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachdrink;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className="text">
                  <h3>{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Final;
