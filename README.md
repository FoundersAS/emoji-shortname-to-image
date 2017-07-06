emoji-shortname-to-image
========================

# Installation

    yarn add emoji-shortname-to-image

# Usage

    import EmojiShort from 'emoji-shortname-to-image';

    // You can also add a second parameter, that will replace the emojishort class with your own
    const emoji = new EmojiShort('https://your-cdn-url.com/with-trailing-slash/');

    console.log(emoji.toImage(':croissant:'));

    // Outputs:
    // <img class="emojishort" src="https://your-cdn-url.com/with-trailing-slash/1f950.png" alt=":croissant:" title=":croissant:" />

    console.log(emoji.toUnicode(':croissant:'));

    // Outputs:
    // 🥐

    console.log(emoji.unicodeToImage('🥐'));

    // Outputs:
    // <img class="emojishort" src="https://your-cdn-url.com/with-trailing-slash/1f950.png" alt=":croissant:" title=":croissant:" />

The `cdn url` should point to a folder where the png's are located *with* a trailing `/`

# 🙌 Thanks

Powered by [iamcal/emoji-data](https://github.com/iamcal/emoji-data) and [emojione/emojione](https://github.com/emojione/emojione)
