const Service=require('egg').Service
class UserService extends Service{
    async select(username,password){
        return await this.app.mysql.get('userlist_0131',{
            username,
            password
        })
    }
    async registry(username,password){
        await this.app.mysql.insert('userlist_0131',{
            username,
            password
        })
    }
    async login(username,password){
        return await this.app.mysql.get('userlist_0131',{
            username,
            password
        })
    }
}
module.exports=UserService