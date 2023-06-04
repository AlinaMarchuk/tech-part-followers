import { useState } from "react";
import { updateFollowers } from "../../api/api";
import css from "./TweetsCard.module.css";

const TweetsCard = ({ user }) => {
  const { tweets, followers, avatar, following = false } = user;
  const [isFollowing, setIsFollowing] = useState(following);
  const [followerCount, setFollowerCount] = useState(followers);

  const handleFollowing = () => {
    const obj = { ...user };

    if (isFollowing) {
      obj.followers = obj.followers - 1;
      obj.following = false;
    } else {
      obj.followers = obj.followers + 1;
      obj.following = true;
    }
    updateFollowers(obj).then((response) => {
      setFollowerCount(response.data.followers);
    });
    setIsFollowing(!isFollowing);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.divider}></div>
      <div className={css.thumb}>
        <img src={avatar} alt="avatar" className={css.avatar} />
      </div>
      <div className={css.infoBox}>
        <span className={css.tweets}>
          {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tweets
        </span>
        <span className={css.followers}>
          {followerCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          followers
        </span>
        {isFollowing ? (
          <button
            type="button"
            onClick={handleFollowing}
            className={`${css.button} ${css.btnFollowing}`}
          >
            Following
          </button>
        ) : (
          <button
            type="button"
            onClick={handleFollowing}
            className={`${css.button} ${css.btnFollow}`}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default TweetsCard;
