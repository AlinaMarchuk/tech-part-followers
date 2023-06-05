import PropTypes from 'prop-types';
import css from './TweetsCard.module.css';

const TweetsCard = ({ user, onFollow }) => {
  const { id, tweets, followers, avatar, following } = user;

  return (
    <div className={css.wrapper}>
      <div className={css.divider}></div>
      <div className={css.thumb}>
        <img src={avatar} alt="avatar" className={css.avatar} />
      </div>
      <div className={css.infoBox}>
        <span className={css.tweets}>
          {tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} tweets
        </span>
        <span className={css.followers}>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} followers
        </span>
        {following ? (
          <button
            type="button"
            onClick={() => {
              onFollow(id);
            }}
            className={`${css.button} ${css.btnFollowing}`}
          >
            Following
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              onFollow(id);
            }}
            className={`${css.button} ${css.btnFollow}`}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

TweetsCard.propTypes = {
  user: PropTypes.shape({
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    following: PropTypes.bool,
  }),
  onFollow: PropTypes.func.isRequired,
};

export default TweetsCard;
