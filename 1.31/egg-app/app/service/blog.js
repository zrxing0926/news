const Service = require('egg').Service;

class ListService extends Service {
    async addData(title,content,img) {
        // 增
        const data= await this.app.mysql.insert('datalist_0131',{title,content,img})
        return data
    }

    async deleteData(id) {
        // 删
        const data= await this.app.mysql.delete('datalist_0131',{id})
        return data
    }
    async changeData(id,title,content,img) {
        // 改
        const data= await this.app.mysql.update('datalist_0131',{id,title,content,img})
        return data
    }
    // async findData(username) {
    //     // 查
    //     const data= await this.app.mysql.update('datalist_0131',{username})
    //     return data
    // }
}

module.exports = ListService;