import { getAllUsers, getUsersPerPage } from "../../api/api";
import { useEffect, useState } from "react";
import TweetsCard from "../../components/TweetsCard/TweetsCard";
import css from "./Tweets.module.css";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PER_PAGE = 3;
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAllUsers().then((response) => {
      const res = response.data.length / PER_PAGE;
      setTotalPages(res);
    });
  }, [totalPages]);

  useEffect(() => {
    getUsersPerPage(page)
      .then((response) => {
        setUsers((prevState) => [...prevState, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <ul className={css.list}>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <li key={user.id} className={css.item}>
                <TweetsCard user={user} />
              </li>
            );
          })}
      </ul>
      {page < totalPages && (
        <button type="button" onClick={handleLoadMore} className={css.button}>
          Load more
        </button>
      )}
    </>
  );
};

export default TweetsPage;
