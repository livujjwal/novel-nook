import { useEffect, useState } from "react";
import { fetch_data } from "../redux/action/fetchAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [arr, setArr] = useState("");
  const [queryArr, setQueryArr] = useState(["harry+potter", ]);

  const { loading, data, error } = useSelector((state) => state);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  function handleFetch() {
    dispatch(fetch_data("harry+potter"));
    // setArr(structuredClone(data.items));
    dispatch(fetch_data("Sherlock+Holmes"));
    setArr(structuredClone(data.items));
  }
  useEffect(() => {
   handleFetch(query)
  }, []);

  console.log(arr);
  return (
    <div className="home">
      <h1>Novels</h1>
      <div className="home-display">
        {arr &&
          arr.map((novel) => (
            <div key={novel.accessInfo.id}>
              <img src={novel.volumeInfo.imageLinks.smallThumbnail} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
