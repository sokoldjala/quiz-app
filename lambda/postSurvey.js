module.exports.handler = async function (event, context) {
    const payload  = JSON.parse(event.body)
    console.log(payload)
    return {
      // return null to show no errors
      statusCode: 200, // http status code
  }
}