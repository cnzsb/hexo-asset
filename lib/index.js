module.exports = function (data) {
  data.content = data.content.replace(
    /\!\[(.*)\]\((.*)\)/g,
    (match, text, url, offset, string) => {
      if (/^\.\/(.*)/.test(url)) {
        const asset = url.replace(/\.\/(?:[^/]*\/)?(.*)/, '$1');
        return `{% asset_img ${text}${asset ? ` ${asset}` : ''} %}`;
      }
      // if (/^(https?:)?\/\//.test(url)) return string;
      // TODO replace other server's host
      // if (^/\//.test(url)) return customPath
      return string;
    },
  );
  return data;
};
