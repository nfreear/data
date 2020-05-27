
[![Test status][gh-badge]][gh-link]

# @nfreear/data #

Collated data, sample data, proverbs, quotes, English and Chinese.
In `JSON` format.
Used by [nick-bot][].

> The copyright in the content is owned by the authors, individuals,
> and publishers of each work collated here.

## Usage

```js
const { BBC_WEATHER_LOCATIONS } = require('@nfreear/data');

const placeName = 'Timbuktu'.toLowerCase():
const location = BBC_WEATHER_LOCATIONS.data.find(loc => loc.en === placeName);

if (location) {
  const placeId = location.id;
  // ... Do something ...
}
```

## Example schema

```json
{
  "meta": {
    "title": "Title of the work",
    "sourceUrl": "https://example/path/to/the/source",
    "author": "A.N.Author",
    "copyright": "© A Publisher / A.N.Owner.",
    "locales": [ "zh-cn", "en", "x-pinyin" ],
    "properties": [ "id", "#" ]
  },

  "#": [
    "Comments and notes.",
    "..."
  ],

  "data": [
    {
      "id": 123,
      "zh-cn": "千里之行，始於足下",
      "x-pinyin": "Qiānlǐ zhī xíng, shǐyú zú xià. Laozi.",
      "en": "Each 10,000 mile journey begins with just 1 step"
    },

    {
      "...": "..."
    }
  ]
}
```

[nick-bot]: https://github.com/nfreear/nick-bot.git
[gh-badge]: https://github.com/nfreear/data/workflows/Node%20CI/badge.svg
[gh-link]:  https://github.com/nfreear/data/actions "Test status ~ 'Node CI'"
