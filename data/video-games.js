const videoGames = [
  {game: 'Mass Effect 2', completion: '100%', quality: 'Masterpiece'},
  {game: 'Ride to Hell: Retribution', completion: '0%', quality: 'dogshit'},
  {game: 'Saints Row III', completion: '100%', quality: 'Great'}
];

module.exports = {
    getAll: function() {
        return videoGames;
    }
};