
import type IPessoa from "@/interfaces/IPessoa";
import type { InjectionKey } from "vue";
import { Store, createStore } from "vuex";


export interface Estado {
    pessoas: IPessoa[]

}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore({
    state: {
        pessoas: [
            {
                id: 1,
                nome: 'Yago de Avila',
                cpf: '17335182743',
                email: 'yago.exemplo@email.com'
            }
        ],
        

    },
    

})

export function useStore(): Store<Estado> {
    return useStore()
}