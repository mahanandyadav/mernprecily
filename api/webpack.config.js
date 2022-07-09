const path=require('path');
const webpack=require('webpack');

const environment=process.env.ENVIRONMENT;

console.log('environment::::::::::',environment);

//initializing veriable
let ENVIRONMENT_VARIABLES={
    'process.env.ENVIRONMENT':JSON.stringify('development'),
    'process.env.PORT':JSON.stringify('3001'),
    'process.env.MONGO_CONNECTION_STRING':JSON.stringify(process.env.MONGO_DB_STRING),
}

//configuring project based on environment
if(environment==='test'){
    ENVIRONMENT_VARIABLES={
        'process.env.ENVIRONMENT':JSON.stringify('test'),
        'process.env.PORT':JSON.stringify('3001'),
        'process.env.MONGO_CONNECTION_STRING':JSON.stringify(process.env.MONGO_DB_STRING),
    }
}else if(environment==='production'){
    ENVIRONMENT_VARIABLES={
        'process.env.ENVIRONMENT':JSON.stringify(process.env.ENVIRONMENT),
        'process.env.PORT':JSON.stringify(process.env.PORT),
        'process.env.MNY':JSON.stringify(process.env.MNY),
        'process.env.MONGO_DB_STRING':JSON.stringify(process.env.MONGO_DB_STRING),
    }
}


//using webpack to build and configuring ENV veriables
module.exports={
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'api.bundle.js',
    },
    target:'node',
    plugins:[
        new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
    ],
}

