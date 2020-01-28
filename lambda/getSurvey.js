module.exports.handler = async function (event, context) {
    console.log("event", event)
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };
    const questionsPayload={
        version: 1,
        data:[
            {
                id: 1,
                question:"Was this your first time at the restaurant?",
                answers:[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    }
                ],
                question_type: "single_choice"
            },
            {
                id: 2,
                question:"Considering your complete experience at our dine-in restaurant, how likely would you be to recommend us to a friend or a colleague?",
                answers:[0,1,2,3,4,5,6,7,8,9,10],
                question_type: "rating_star"
            },
            {
                id: 3,
                question:"Do you find that our restaurant is family-friendly? ",
                answers:[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    }
                ],
                question_type: "single_choice"
            },
            {
                id: 4,
                question:"How would you rate the value of our food?",
                answers:[0,1,2,3,4,5],
                question_type: "rating_star"
            },
            {
                id: 5,
                question:"How would you rate the range of options on our menu?",
                answers:[
                    {
                        value:"low",
                        label:"Too Few Options"
                    },
                    {
                        value:"medium",
                        label:"Just Right"
                    },
                    {
                        value:"high",
                        label:"Too Many Options"
                    },
                ],
                question_type: "single_choice"
            },
            {
                id: 6,
                question:"What you consider important in a restaurant service?",
                answers:[
                    {
                        value:"food",
                        label:"Food"
                    },
                    {
                        value:"service",
                        label:"Service"
                    },
                    {
                        value:"quality",
                        label:"Quality"
                    },
                    {
                        value:"quantity",
                        label:"Quantity"
                    }
                ],
                question_type: "multiple_choice"
            },
            {
                id: 7,
                question:"How often do you dine with us ?",
                answers:[
                    {
                        value:"daily",
                        label:"Daily"
                    },
                    {
                        value:"weekly",
                        label:"Weekly"
                    },
                    {
                        value:"monthly",
                        label:"Monthly"
                    },
                    {
                        value:"once_three_months",
                        label:"Once in three months"
                    },
                    {
                        value:"first_time",
                        label:"First time"
                    }
                ],
                question_type: "single_choice"
            },
            {
                id: 8,
                question:"Who was your server today?",
                answers:[
                    {
                        value:"Garrett Becker",
                        label:"Garrett Becker"
                    },
                    {
                        value:"Rolando Morales",
                        label:"Rolando Morales"
                    },
                    {
                        value:"Erica Kennedy",
                        label:"Erica Kennedy"
                    },
                    {
                        value:"Tamara Griffin",
                        label:"Tamara Griffin"
                    },
                ],
                question_type: "single_choice"
            },
            {
                id: 9,
                question:"Was the service friendly and welcoming?",
                answers:[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    }
                ],
                question_type: "single_choice"
            },
            {
                id: 10,
                question:"How likely is it that you would come back?",
                answers:[
                    {
                        value:"Very_likely ",
                        label:"Very Likely "
                    },
                    {
                        value:"likely",
                        label:"Likely"
                    },
                    {
                        value:"unlikely",
                        label:"Unlikely"
                    },
                    {
                        value:"very_unlikely.",
                        label:"Very Unlikely."
                    },
                ],
                question_type: "single_choice"
            },
            {
                id: 11,
                question: "Which are your fauvorite foods at our restaurant?",
                answers: [
                    {
                        value: "chicken",
                        label: "Chicken"
                    },
                    {
                        value: "fish",
                        label: "Fish"
                    },
                    {
                        value: "meat",
                        label: "Meat"
                    },
                    {
                        value: "pizza",
                        label: "Pizza"
                    },
                ],
                question_type: "multiple_choice"
            },
        ]
    }
    if (event.httpMethod === 'OPTIONS') {
       
          return {
            statusCode: 200,
            headers,
            body: 'Options!'
          };
    } else {     
        return {
            // return null to show no errors
            statusCode: 200, // http status code
            headers,
            body: JSON.stringify(questionsPayload)
        }
    }
}