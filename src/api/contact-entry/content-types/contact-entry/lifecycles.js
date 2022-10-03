module.exports = {
    async afterCreate(event) {
        const { result, params } = event;
        console.log("result", result)


        // Send message to my Email;
        await strapi.plugins['email'].services.email.send({
            to: 'caleb@calebhorton.dev',
            from: 'caleb@calebhorton.dev', //e.g. single sender verification in SendGrid
            subject: 'New Contact form Submission',
            text: `
            Name: ${result.name}\n
            Company: ${result.company}\n
            Email: ${result.email}\n
            Message:\n
            ${result.message}
            `,
            html: `
            <p>Name: ${result.name}</p>
            <p>Company: ${result.company}</p>
            <p>Email: ${result.email}</p>
            <p>Message:</p>
            <p>${result.message}</p>
            `,
        })

        await strapi.plugins['email'].services.email.send({
            to: result.email,
            from: 'caleb@calebhorton.dev', //e.g. single sender verification in SendGrid
            subject: 'Message Recieved',
            text: `
            Thank you fro reaching out! 
            I Have recieved your message and will get back to you as soon as I'm able.
              -Caleb Horton
            `,
            html: `
            <h1>Thank you fro reaching out!</h1>
            <p>I Have recieved your message and will get back to you as soon as I'm able.</p>
            <p>-Caleb Horton</p>
            `,
        })
    },
};