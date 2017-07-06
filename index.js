const emojiMap = require('./data/data');

class EmojiShort {
  constructor (cdnUrl, klass = 'emojishort') {
    this.cdnUrl = cdnUrl;
    this.klass = klass;

    this.shortnames = Object.keys(emojiMap).join('|').replace(/\+/g, '\\+');
    this.shortnamePattern = new RegExp(this.shortnames, 'gi');

    this.unicodes = Object.keys(emojiMap).map(k => emojiMap[k].unicode).join('|');

    this._replaceShortNameWithImgTag = this._replaceShortNameWithImgTag.bind(this);
    this._replaceShortNameWithUnicode = this._replaceShortNameWithUnicode.bind(this);

    this.toImage = this.toImage.bind(this);
  }

  toImage (string) {
    return string.replace(this.shortnamePattern, this._replaceShortNameWithImgTag);
  }

  toUnicode (string) {
    return string.replace(this.shortnamePattern, this._replaceShortNameWithUnicode);
  }

  _replaceShortNameWithImgTag (shortname) {
    const image = emojiMap[shortname].image;
    if (!image) return shortname;
    return `<img class="${this.klass}" src="${this.cdnUrl}${image}" alt="${shortname}" title="${shortname}" />`;
  }

  _replaceShortNameWithUnicode (shortname) {
    return emojiMap[shortname].unicode;
  }
}

module.exports = EmojiShort;
