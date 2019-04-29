const sendGrid = require('@sendgrid/mail')

sendGrid.setApiKey(process.env.SENDGRID_APIKEY)

const sendWelcomeEmail = (email,name) => {
    console.log("Start Mail Send");
    sendGrid.send({
        to : email,
        from : 'vivekssharma07@gmail.com',
        subject : 'User Successfully Created!',
        text : 'THe new user has been successfully created !'
    })
}

const  sendCancellationMail = (email,name) => {
    sendGrid.send({
        to : email,
        from : 'vivekssharma07@gmail.com',
        subject : 'This is a welcome email',
        text : 'Cancellation Email From dev connector'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationMail
}