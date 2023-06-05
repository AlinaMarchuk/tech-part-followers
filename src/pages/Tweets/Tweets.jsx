import { getAllUsers, getUsersPerPage, updateFollowers } from '../../api/api';
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TweetsCard from '../../components/TweetsCard/TweetsCard';
import css from './Tweets.module.css';
import defaultImg from '../../images/default-img.png';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const PER_PAGE = 3;
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAllUsers().then(response => {
      const res = response.data.length / PER_PAGE;
      setTotalPages(res);
    });
  }, [totalPages, users]);

  useEffect(() => {
    getUsersPerPage(page)
      .then(response => {
        setUsers(prevState => [...prevState, ...response.data]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const handleFollowing = id => {
    const index = users.findIndex(elem => elem.id === id);
    if (users[index].following === true) {
      updateFollowers(id, {
        following: false,
        followers: users[index].followers - 1,
      }).then(response => {
        setUsers(prevState =>
          prevState.map(user =>
            user.id === id
              ? {
                  ...user,
                  following: response.data.following,
                  followers: response.data.followers,
                }
              : user
          )
        );
      });
    } else {
      updateFollowers(id, {
        following: true,
        followers: users[index].followers + 1,
      }).then(response => {
        setUsers(prevState =>
          prevState.map(user =>
            user.id === id
              ? {
                  ...user,
                  following: response.data.following,
                  followers: response.data.followers,
                }
              : user
          )
        );
      });
    }
  };

  return (
    <>
      {backLinkRef && (
        <Link to={backLinkRef.current} className={css.link}>
          Go back
        </Link>
      )}
      <ul className={css.list}>
        {isLoading ? (
          <li className={css.item}>
            <img src={defaultImg} alt="default" />
          </li>
        ) : (
          users.length > 0 &&
          users.map(user => {
            return (
              <li key={user.id} className={css.item}>
                <TweetsCard user={user} onFollow={handleFollowing} />
              </li>
            );
          })
        )}
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
