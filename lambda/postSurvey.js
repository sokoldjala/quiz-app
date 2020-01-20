module.exports.handler = async function (event, context, callback) {
    const payload = JSON.parse(event.body)
  try {
    if (Array.isArray(payload) && payload.length === 11) {
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
          body: JSON.stringify("Error")
        }
        }else{
          return {
            // return null to show no errors
            statusCode: 422, // http status code
            body: JSON.stringify("Error")
          }
        }
    }else{
      return {
        // return null to show no errors
        statusCode: 422, // http status code
        body: JSON.stringify("Error")
      }
    }
  } catch (error) {
    return {
      // return null to show no errors
      statusCode: 422, // http status code
      body: JSON.stringify("Error")
    }
  }
}