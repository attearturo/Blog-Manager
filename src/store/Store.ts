import { observable, action } from 'mobx';
import { setupMaster } from 'cluster';

class Store {

    @observable user: any = null;

    @action setUser( username:string, password:string){
        this.user = {
            name:username,
            password:password,
            logged:false
        }
    }

}

export const store = new Store();