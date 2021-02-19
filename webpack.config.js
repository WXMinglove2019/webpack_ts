//引入一个包
const path=require('path');
//引入html插件
const HTMLWebpsckPlugin = require('html-webpack-plugin');
//webpack中所有的配置信息都应写在这
module.exports ={

    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件
    output:{
        //指定打包文件目录
        path:path.resolve(__dirname, 'dist'),
        //打包后文件的文件
        filename:"bundle.js"
    },
    //指定webpack打包时需要的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件 
                exclude:/node-modules/
            }
        ]
    },
    //配置Webpack插件
    plugins:[
        new HTMLWebpsckPlugin({
            title:"Webpsck App"
        }),
    ]
}