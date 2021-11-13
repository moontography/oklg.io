# oklg (\$OKLG)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy

At the time of writing the mtgy website is deployed to an AWS S3 bucket.

1. Make sure AWS CLI is installed via [Homebrew](https://brew.sh/)
   - `brew install awscli`
2. After changes are made, build files to `dist` directory
   - `yarn run build`
3. `aws s3 cp --recursive dist s3://oklg.io`

## S3 Website URL

http://oklg.io.s3-website-us-east-1.amazonaws.com
