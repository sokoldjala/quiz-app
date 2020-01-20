module.exports.handler = async function (event, context, callback) {
    const payload = JSON.parse(event.body)
    if (Array.isArray(payload) && payload.length > 2) {
      callback(null, {
        statusCode: 200
      })
    }
    callback(null, {
      statusCode: 422
    })
}