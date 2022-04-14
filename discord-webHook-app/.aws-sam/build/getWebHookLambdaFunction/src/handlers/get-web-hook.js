const Discord = require("discord.js")

exports.lambdaHandler = async (event, context) => {
    const eventLog = JSON.parse(event.body)
    if(!eventLog.hook.active){
        return {
            "statusCode" : 400,
            "body" : 'Bad Request'
        }
    }
    else{
        const webhook = new Discord.WebhookClient(process.env.DISCORD_HOOK_CHANNEL_ID, `${process.env.DISCORD_HOOK_CHANNEL_TOKEN}`)
        try {
            const response = await webhook.send("홍정민 봇 한글 테스트")
            return { "statusCode": 200 }
        } catch(err) {
            console.log(err)
            return {
                "statusCode": 500,
                "body" : "internal error"
            }
        }
    }
}
