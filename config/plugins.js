module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: process.env.SENDGRID_API_KEY,
            },
            settings: {
                defaultFrom: 'caleb@calebhorton.dev',
                defaultReplyTo: 'caleb@calebhorton.dev',
                testAddress: 'caleb@calebhorton.dev',
            },
        },
    },
});