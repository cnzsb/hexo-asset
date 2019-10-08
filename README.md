# hexo-asset

Support original markdown image expressions when **enabling `post_asset_folder`**,
 and no need to use private hexo tags anymore


## Detail

`./path/asset.jpg` will be replaced to `your_post_path/asset.jpg`

URLs started with `http`, `https`, `//`, `/` or plain string(`path/asset.jpg`) will keep

## Config

If you want to render the image link as markdown style instead of tag plugins style, you should add following code to `_config.yml` of hexo project.

```yaml
asset:
  tag_plugins_mode: false
```

- `tag_plugins_mode` : set the image link to [tag plugins](https://hexo.io/docs/asset-folders.html#Tag-Plugins-For-Relative-Path-Referencing) mode(`default mode, true`) or markdown mode(`false`).
  - **tag plugins mode**: `{% asset_img slug [title] %}`
  - **markdown mode**: `![image title](image url)`

## TODO

* test
* can add a custom host prefix path such as a cdn address
