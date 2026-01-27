import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./index.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((result) => {
        setData((prev) => {
          return [...prev, ...result.data];
        });
        setLoading(false);
      });
  }, [page]);

  const handleScroll = () => {
    const innerHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    console.log(
      "innerHeight: ",
      innerHeight,
      "scrollY: ",
      scrollY,
      "scrollHeight: ",
      scrollHeight
    );
    if (innerHeight + scrollY + 1 >= scrollHeight) {
      setPage((p) => p + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, []);

  return (
    <div className="card-container">
      {data.map((_, index) => {
        return <Card />;
      })}
      {loading && "Loading..."}
    </div>
  );
}

export default Dashboard;
