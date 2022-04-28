import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IError } from './modules/error'

interface IRootState {
	app: IAppState
	error: IError
}

export default new Vuex.Store<IRootState>({})
