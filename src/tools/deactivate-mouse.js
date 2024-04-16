const deactivateMouse = () => {
  process.stdout.write('\x1b[?1005l')
  process.stdout.write('\x1b[?1003l')
}

export default deactivateMouse
