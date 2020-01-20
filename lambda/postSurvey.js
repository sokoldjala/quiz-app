module.exports.handler = async function (event, context, callback) {
    const payload = JSON.parse(event.body)

    if (Array.isArray(payload) && payload.length === 11) {
      payload.map((item)=>
        {
          if(item.id && item.value){
          return {
            // return null to show no errors
            statusCode: 200, // http status code
            body: JSON.stringify("Success")
          }
        } else {
          return {
            // return null to show no errors
            statusCode: 422, // http status code
            body: JSON.stringify("Error")
          }
        }
      }
      )
    }else{
      return {
        // return null to show no errors
        statusCode: 422, // http status code
        body: JSON.stringify("Error")
      }
    }
}