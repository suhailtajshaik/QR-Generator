const config = () => {
    return {
      "protocol": process.env.NODE_PROTOCOL || 'http',
      "hostname": process.env.NODE_HOSTNAME || '127.0.0.1',
      "port": process.env.NODE_PORT || '3000',
      "env" : process.env.NODE_ENV || 'develop'
    }
  }
  
  module.exports = config();