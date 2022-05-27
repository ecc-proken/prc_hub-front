# prc_hub frontend

## Get started

[ecc-proken/prc_hub-api](https://github.com/ecc-proken/prc_hub-api)

```env
# .env.local
NEXT_PUBLIC_API_URL=http://api
```

```console
$ yarn
$ yarn build
$ yarn start
```

### Use docker-compose

[ecc-proken/prc_hub-docker](https://github.com/ecc-proken/prc_hub-docker)

## Contribution

ESLintとPrettierによるフォーマットを使用してください。

### VSCode settings

```console
$ code --install-extention esbenp.prettier-vscode
$ code --install-extention dbaeumer.vscode-eslint
```

### Lint

```console
$ yarn lint
```