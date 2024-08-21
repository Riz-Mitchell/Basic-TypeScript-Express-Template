import * as dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
}