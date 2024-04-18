const hideCursor = () => {
  process.stderr.write('\x1B[?25l') // Hide terminal cursor
}

export default hideCursor
