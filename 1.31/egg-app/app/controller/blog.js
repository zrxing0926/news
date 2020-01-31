'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
    async List() {
        // 数据
        const { ctx } = this
        let datalist = await this.app.mysql.select('datalist_0131')
        if (datalist) {
            ctx.body = {
                code: 1,
                message: '数据获取成功',
                data: datalist
            }
        } else {
            ctx.body = {
                code: 0,
                message: '数据获取失败'
            }
        }
    }
    async addList() {
        // 增
        const { ctx, service } = this
        const { title,content,img } = ctx.request.body

        if (title,content,img) {
            ctx.body = {
                code: 200,
                message: '提交成功',
                data: await service.blog.addData(title,content,img)
            }
        } else {
            ctx.body = {
                code: 500,
                message: '提交失败'
            }
        }
    }
    async deleteList() {
        // 删
        const { ctx, service } = this
        const { id } = ctx.request.body
        if (id) {
            ctx.body = {
                code: 200,
                message: '删除成功',
                data: await service.blog.deleteData(id)
            }
        } else {
            ctx.body = {
                code: 500,
                message: '删除失败'
            }
        }
    }
    async changeList() {
        // 改
        const { ctx, service } = this
        const { id,title,content,img } = ctx.request.body
        if (id,title,content,img) {
            ctx.body = {
                code: 200,
                message: '修改成功',
                data: await service.blog.changeData(id,title,content,img)
            }
        } else {
            ctx.body = {
                code: 500,
                message: '修改失败'
            }
        }
    }
    async findList() {
        // 查
        const { ctx, service } = this
        const { username } = ctx.request.body
        if (username) {
            ctx.body = {
                code: 200,
                message: '查找成功',
                data: await service.blog.findData(username)
            }
        } else {
            ctx.body = {
                code: 500,
                message: '查找失败'
            }
        }
    }
}

module.exports = ListController;
