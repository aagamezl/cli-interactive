const showCursor = () => {
  process.stderr.write('\u001B[?25h') // show terminal cursor
}

export default showCursor
