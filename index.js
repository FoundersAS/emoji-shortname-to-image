const emojiMap = require('./data/data');

class EmojiShort {
  constructor (cdnUrl, klass = 'emojishort') {
    this.cdnUrl = cdnUrl;
    this.klass = klass;

    this.shortnamePattern = Object.keys(emojiMap).join('|').replace(/\+/g, '\\+');
    this.pattern = new RegExp(this.shortnamePattern, 'gi');

    this._replaceShortNameWithImgTag = this._replaceShortNameWithImgTag.bind(this);

    this.toImage = this.toImage.bind(this);
  }

  toImage (string) {
    return string.replace(this.pattern, this._replaceShortNameWithImgTag);
  }

  _replaceShortNameWithImgTag (shortname) {
    const image = emojiMap[shortname];
    if (!image) return shortname;
    return `<img class="${this.klass}" src="${this.cdnUrl}${image}" alt="${shortname}" title="${shortname}" />`;
  }
}

module.exports = EmojiShort;
