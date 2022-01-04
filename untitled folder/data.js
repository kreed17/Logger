const logData = [
     {  id:1,
        name: "Coding",
        lastUpdate: "12/10/2021",
        logs: [
            {   logid:1,
                login: "12/11/2021  12:32pm",
                logout: "12/11/2021  1:45pm",
                duration:"1hr 15mins"
            },
            {
                logid:2,
                login: "12/12/2021  6:56pm",
                logout: "12/12/2021  7:49pm",
                duration:"1hr 13mins"
        
            },
            {
                logid:3,
                login: "12/13/2021  10:28am",
                logout: "12/13/2021  11:13am",
                duration:"45mins"
        
            }
        ]
    },
     {id:2,
        name: "Gaming",
        lastUpdate:"11/09/2021"
    },
    {id:3,
        name:"Workout",
        lastUpdate:"11/07/2021"
    }
]
const coding = [
    {
        login: "12/11/2021  12:32pm",
        logout: "12/11/2021  1:45pm",
        length:"1hr 15mins"
    },
    {
        login: "12/12/2021  6:56pm",
        logout: "12/12/2021  7:49pm",
        length:"1hr 13mins"

    },
    {
        login: "12/13/2021  10:28am",
        logout: "12/13/2021  11:13am",
        length:"45mins"

    }
]
module.exports= logData;
