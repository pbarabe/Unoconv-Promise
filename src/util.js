class UnsupportedError extends Error {}

const SUPPORTED_OPTIONS = {
  'connection': '-c',
  'doctype': '-d',
  'export': '-e',
  'format': '-f',
  'field': '-F',
  'import': '-i',
  'import-filter-name': '-I',
  // 'output': '-o',
  'pipe': '--pipe',
  'password': '--password', //0.8.2
  'port': '-p',
  'printer': '-P',
  'server': '-s',
  'template': '-t',
  'timeout': '-T',
}
exports = module.exports = {
  UnsupportedError: UnsupportedError,
  parseOptions: (options) => {
    let bin = 'unoconv'
    let childArgs = []
    for (const key in options) {
      if (SUPPORTED_OPTIONS.hasOwnProperty(key)) {
        childArgs.push(
          `${SUPPORTED_OPTIONS[key]} ${options[key]}`
        )
      } else {
        switch (key) {
        case 'bin': // unoconv path
        case 'file': // Target File
        case 'string': // Output as string
          break
        case 'output':
          childArgs.push(`-o${options[key]}`) //No Space
          break
        case 'listener':
          childArgs.push('--listener')
          break
        case 'no-launch':
          childArgs.push('--no-launch')
          break
        case 'preserve': //0.8.2
          childArgs.push('--preserve')
          break
        case 'show':
          childArgs.push('--show')
          break
        case 'stdin':
          childArgs.push('--stdin')
          break
        case 'stdout':
          childArgs.push('--stdout')
          break
        case 'verbose':
          childArgs.push('--verbose')
          break
        case 'version':
          childArgs.push('--version')
          break
        default:
          throw (new UnsupportedError(key))
        }
      }

    }
    return {
      bin: options.bin || bin,
      args: childArgs
    }
  }
}
