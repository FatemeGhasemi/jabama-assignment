import { createNodeRedisClient} from 'handy-redis';
import {WrappedNodeRedisClient} from "handy-redis/dist/node_redis";

const redisConfig:any= {
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    db: process.env.REDIS_DB,
};
if (process.env.REDIS_PASSWORD){
    redisConfig.password = process.env.REDIS_PASSWORD
}
let redisClient: WrappedNodeRedisClient | null;

export const getRedisClient = ():WrappedNodeRedisClient => {
    if (!redisClient) {
        redisClient = createNodeRedisClient(redisConfig);
    }
    return redisClient;
};

export const setInRedis =async (params: {key: string, value:string, expiration: number}) :Promise<void> =>{
    await getRedisClient().setex(params.key, params.expiration, params.value)

}

export const getFromRedis =async (key:string) :Promise<string | null> =>{
    return  getRedisClient().get(key)
}
export const removeFromRedis = async (key:string) :Promise<void> =>{
    await getRedisClient().del(key)
}