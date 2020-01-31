'use strict';

const Controller = require('egg').Controller;
// const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const createRule = {
    username: {
        type: 'string'
    },
    password: {
        type: 'password'
    },
};

class UserController extends Controller {
    async register() {
        const {ctx,service} = this
        const {username,password} = ctx.request.body

        ctx.validate(createRule)

        if (username && password) {
            let data = await service.user.select(username)
            if (data) {
                ctx.body = {
                    msg: '用户已存在',
                    code: 1
                }
            } else {
                let registerUser = await service.user.registry(username, ctx.helper.help(password))
                try {
                    ctx.body = {
                        msg: '注册成功',
                        code: 2,
                        data: registerUser
                    }
                } catch (e) {
                    ctx.body = {
                        msg: e,
                        code: 3
                    }
                }
            }
        } else {
            ctx.body = {
                msg: '缺失参数',
                code: 0
            }
        }
    }
    async login() {
        const {ctx,service} = this
        const {username,password} = ctx.request.body

        ctx.validate(createRule)

        if (username && password) {
            let data = await service.user.login(username, ctx.helper.help(password))
            if (data) {
                ctx.body = {
                    msg: '登陆成功',
                    code: 2,
                    tken: jwt.sign({
                        ...data
                    }, this.app.config.keys, {
                        expiresIn: '1h'
                    })
                }
            } else {
                ctx.body = {
                    msg: '登陆失败',
                    code: 1
                }
            }
        } else {
            ctx.body = {
                msg: '缺失参数',
                code: 0
            }
        }
    }

}

module.exports = UserController;