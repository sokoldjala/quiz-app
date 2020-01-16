module.exports.handler = async function (event, context) {
    console.log("queryStringParameters", event.queryStringParameters)
    const questionsPayload={
        version: 1,
        data:[
            {
                id: 1,
                question:"Where were the first Olympics held?",
                answers:[
                    {
                        value:"825bc",
                        label:"825 BC"
                    },
                    {
                        value:"776bc",
                        label:"776 BC"
                    },
                    {
                        value:"320bc",
                        label:"320 BC"
                    },
                    {
                        value:"80ad",
                        label:"80 AD"
                    },
                ],
                correct_answer: "776bc"
            },
            {
                id: 2,
                question:"The term Beamer is associated with?",
                answers:[
                    {
                        value:"football",
                        label:"Football"
                    },
                    {
                        value:"hockey",
                        label:"Hockey"
                    },
                    {
                        value:"cricket",
                        label:"Cricket"
                    },
                    {
                        value:"chess",
                        label:"Chess"
                    },
                ],
                correct_answer: "cricket"
            },
            {
                id: 3,
                question:"Of which country is bull-fighting the national game?",
                answers:[
                    {
                        value:"spain",
                        label:"Spain"
                    },
                    {
                        value:"portugal",
                        label:"Portugal"
                    },
                    {
                        value:"hungary",
                        label:"Hungary"
                    },
                    {
                        value:"poland",
                        label:"Poland"
                    },
                ],
                correct_answer: "spain"
            },
            {
                id: 4,
                question:"Lewis Hamilton is the sports man in the field of?",
                answers:[
                    {
                        value:"formula1",
                        label:"Formula one car racing"
                    },
                    {
                        value:"shooting",
                        label:"Shooting"
                    },
                    {
                        value:"chess",
                        label:"Chess"
                    },
                    {
                        value:"golf",
                        label:"Golf"
                    },
                ],
                correct_answer: "formula1"
            },
            {
                id: 5,
                question:"Which of the following term is not associated with Football?",
                answers:[
                    {
                        value:"penalty_kick",
                        label:"Penalty Kick"
                    },
                    {
                        value:"penalty_stroke",
                        label:"Penalty Stroke"
                    },
                ],
                correct_answer: "penalty_stroke"
            },
            {
                id: 6,
                question:"The keyboard is output Device used to input data to the computer?",
                answers:[
                    {
                        value:"true",
                        label:"True"
                    },
                    {
                        value:"false",
                        label:"False"
                    }
                ],
                correct_answer: "false"
            },
            {
                id: 7,
                question:"A computer Virus is a malicious program that affects the computer?",
                answers:[
                    {
                        value:"true",
                        label:"True"
                    },
                    {
                        value:"false",
                        label:"False"
                    }
                ],
                correct_answer: "true"
            },
            {
                id: 8,
                question:"Does Bit stands for Binary Data?",
                answers:[
                    {
                        value:"yes",
                        label:"Yes"
                    },
                    {
                        value:"no",
                        label:"No"
                    },
                ],
                correct_answer: "no"
            },
            {
                id: 9,
                question:"Which of the following is a storage device?",
                answers:[
                    {
                        value:"hard_disk",
                        label:"Hard Disk"
                    },
                    {
                        value:"usb_disk",
                        label:"USB Disk"
                    },
                    {
                        value:"all",
                        label:"All of the above"
                    },
                ],
                correct_answer: "all"
            },
            {
                id: 10,
                question:"What do you call a portable computer?",
                answers:[
                    {
                        value:"laptop",
                        label:"Laptop"
                    },
                    {
                        value:"booktop",
                        label:"Booktop"
                    },
                    {
                        value:"ram",
                        label:"RAM"
                    },
                    {
                        value:"cpu",
                        label:"CPU"
                    },
                    {
                        value:"computer",
                        label:"Computer"
                    },
                ],
                correct_answer: "laptop"
            }
        ]
    }
    return {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify(questionsPayload)
    }
}