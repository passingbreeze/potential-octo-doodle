const Discord = require("discord.js")

exports.lambdaHandler = async (event, context) => {
    if(!event){
        return {
            "statusCode" : 400,
            "body" : 'Bad Request'
        }
    }
    else{
        const webhook = new Discord.WebhookClient(process.env.DISCORD_HOOK_CHANNEL_ID, `${process.env.DISCORD_HOOK_CHANNEL_TOKEN}`)
        try {
            const data = await webhook.send(`${process.env.MY_NAME} ${process.env.SEND_TEXT}`, {
                files: [`${process.env.HOOK_IMAGE_URL}`]
            })
            console.log("Log :",data)
            return { "statusCode": 200 }
        } catch(err) {
            console.log("Error Log :", err)
            return {
                "statusCode": 500,
                "body" : "internal error"
            }
        }
    }
}
