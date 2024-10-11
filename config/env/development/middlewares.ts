import default_middlewares from "../../middlewares";

export default [...new Set([...default_middlewares,
{
    name: 'strapi::favicon',
    config: {
        path: './public/favicon_back_dev.ico'
    },
}
])];
