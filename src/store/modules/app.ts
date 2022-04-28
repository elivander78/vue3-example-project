import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IAppState {
	loading: boolean
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
	public loading = false

	@Mutation
	public SET_LOADING(loading: boolean) {
		this.loading = loading
	}
}

export const AppModule = getModule(App)
