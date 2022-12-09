import { VuexModule, Module, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators'
import store from '@/store'
import { ITours } from "@/store/modules/app.types";
import axios from "axios";

export interface IAppState {
	showHome: boolean
	showSearch: boolean
	showTours: boolean
	showOther: boolean
	loading: boolean
	loadingTours: boolean
	tours: ITours[]
	bron: any
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
	public showHome = true
	public showSearch = false
	public showTours = false
	public showOther = false
	public loading = false
	public loadingTours = false
	public tours: ITours[] = []
	public bron: any = null

	@Mutation
	public SET_LOADING(loading: boolean) {
		this.loading = loading
	}

	@Mutation
	public SET_TOURS_LOADING(loading: boolean) {
		this.loadingTours = loading
	}

	@Mutation
	public SET_TOURS(tours: ITours[]) {
		this.tours = tours
	}

	@Mutation
	public SET_BRON(bron: any) {
		this.bron = bron
	}

	@MutationAction({mutate: ['showHome']})
	public async setShowHome(show: boolean){
		//this.showHome = show
		return {
			showHome: show
		}
	}

	@Action
	async searchTour(){
		this.SET_TOURS_LOADING(true)
		//this.SET_TOURS()
		this.SET_TOURS_LOADING(false)
	}

	@Action
	async getBron(){
		this.SET_TOURS_LOADING(true)
		const res = axios.get('http://online.alfatour.uz/bron_person?CATCLAIM=0x430A00000051050000091000000050000000290000000000000006AE9B000000001AD30A0000247500000296000000040000000400000000000000000000000100000000AEA500000A00000000039387000000000202020000636363AE9B0000AEA50000020000000001000000000000000000000000000000000000000000000000&TOWNFROMINC=2320&STATEINC=80&PACKET=5&GUEST=1')
		this.SET_BRON(res)
		this.SET_TOURS_LOADING(false)
	}
}

export const AppModule = getModule(App)
