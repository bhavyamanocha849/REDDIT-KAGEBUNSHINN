import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Posts } from "./entities/Posts";
import microConfig from "./mikro-orm.config"

const main = async () =>{
    console.log('dirName: ',__dirname );
    const orm =await MikroORM.init(microConfig); 
    await orm.getMigrator().up();
    const post =  orm.em.create(Posts,{title:'my first post'})
    await orm.em.persistAndFlush(post);
    const posts =await orm.em.find(Posts,{}); 
    console.log(posts);
}


main().catch((err)=>{
    console.error(err);
});
// console.log("Hello World");