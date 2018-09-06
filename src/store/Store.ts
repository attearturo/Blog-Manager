import { observable, action } from 'mobx';
import { setupMaster } from 'cluster';

class Store {

    @observable user: any = null;

    @action setUser(nickname: string, username:string, password:string){
        this.user = {
            nickname: nickname,
            name:username,
            password:password,
        }
    }

    @action setLogged(logged: boolean) {
        this.user = {
            logged: false
        }
    }


}

export const store = new Store();