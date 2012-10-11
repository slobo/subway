exports.dev = {
    port: 3000,
    client_port: 3000,
    mongoose_auth: 'mongodb://mongodb@localhost/subway'
}
exports.irc_server = {
   server: 'irc.taskforce-1.com'
 , port  :  6667
 , secure: false
 , selfSigned: true
 , rejoin: true
 , channels: ['#live-chat']
}

exports.prod = {
    port: 14858, // Nodester port
    client_port: 80, // Websockets talk on port 80 on Nodester, regardless of listen port
    mongoose_auth: 'mongodb://mongodb@localhost/subway'
}

exports.misc = {
  max_log_size: 32000
}
