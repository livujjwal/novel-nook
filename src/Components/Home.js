import { useEffect, useState } from "react";
import { fetch_data } from "../redux/action/fetchAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data.items);
  useEffect(() => {
    dispatch(fetch_data("harry+potter"));
    setNovelArr()
    dispatch(fetch_data("Sherlock+Holmes"));
  }, []);
  const [novelArr, setNovelArr] = useState('');
  return (
    <div className="home">
      <h1>New Novels</h1>
      {novelArr &&
        novelArr.map((novel) => (
          <div>
            <img src={novel.volumeInfo.imageLinks.smallThumbnail} />
           { console.log(novel.volumeInfo .imageLinks)}
          </div>
        ))}
    </div>
  );
};

export default Home;
