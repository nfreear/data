/**
 * Main entry point for the data.
 *
 * @copyright NDF, 07-Mar-2020.
 */

module.exports = {
  BBC_NEWS_FEEDS_EN: require('./data/bbc-news-feeds.en'),
  // https://rms.api.bbc.co.uk/v2/my/programmes/favourites/playable?offset=0&limit=100;
  // See :~ https://rms.api.bbc.co.uk/docs/swagger.json
  BBC_SOUNDS_BOOKMARKS: [
    require('./data/bbc-sounds-bookmarks-offset-0-limit-100'),
    require('./data/bbc-sounds-bookmarks-offset-99-limit-100'),
    require('./data/bbc-sounds-bookmarks-offset-199-limit-100'),
  ],
  // https://rms.api.bbc.co.uk/v2/my/programmes/follows?offset=0&limit=50;
  BBC_SOUNDS_SUBSCRIBED: require('./data/bbc-sounds-follows'),
  BBC_WEATHER_LOCATIONS:  require('./data/bbc-weather-locations'),
  PREBID_CURRENCY: require('./data/prebid-currency-file-latest'),
  PROVERBS_HIGHLIGHTS_ZH: require('./data/chinahighlights-chinese-sayings.zh-cn'),
  PROVERBS_LTI_ZH:  require('./data/lti-chinese-proverbs.zh-cn'),
  QUOTES_SIGNED_EN: require('./data/gist-signed0-quotes.en'),
  RADIO_STATIONS: require('./data/radio-stations'),
};
