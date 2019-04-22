const isDev = process.env.npm_config_argv && process.env.npm_config_argv.indexOf('"dev"') !== -1

export default isDev
