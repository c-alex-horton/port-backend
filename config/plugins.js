module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
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