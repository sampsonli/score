/**
 * Created by sampson on 2017/5/7.
 */
module.exports = {
    apps: [
        {
            name: 'score',
            script: './server.js',
            kill_timeout: 3000,
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                HOST: '0.0.0.0'
            }
        }
    ]
}
