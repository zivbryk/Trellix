module.exports = {
    // 'dbURL': 'mongodb+srv://theUser:thePass@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority',
    'dbURL': `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.h2rtf.mongodb.net/BOARD_DB?retryWrites=true&w=majority`
  }