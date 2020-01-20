module.exports.handler = async function (event, context, callback) {
    const payload = JSON.parse(event.body)
  try {
    if (Array.isArray(payload)) {
      let error = false
      payload.map((item) => {
        if(!item.id || item.id === "" || item.id === null || !item.value || item.value === "" || item.value === null){
          console.log("TCL: item", item.value)
          error = true
          return error
        } 
      })
      if (error) {
        return {
          // return null to show no errors
          statusCode: 422, // http status code
          body: JSON.stringify("Payload data is not correct or response field missing!")
        }
        }else{
          return {
            // return null to show no errors
            statusCode: 200, // http status code
            body: JSON.stringify("Data posted successfully!")
          }
        }
    }else{
      return {
        // return null to show no errors
        statusCode: 422, // http status code
        body: JSON.stringify("Payload data is not in valid format!")
      }
    }
  } catch (error) {
    return {
      // return null to show no errors
      statusCode: 422, // http status code
      body: JSON.stringify(error)
    }
  }
}