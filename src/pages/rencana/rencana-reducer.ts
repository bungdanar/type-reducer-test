import { SelectValue } from '../../components/Inputs/input-type'
import { RencanaActions, RencanaActionTypes } from './rencana-actions'

export type RencanaModel = {
  id: string
  name: string
}

export type KegiatanModel = {
  id: string
  name: string
}

export type DokumenRencanaModel = {
  id: string
  name: string
}

type InitialRencanaState = {
  loading: boolean
  errMessage: string
  rencanaData: RencanaModel | null
  kegiatanList: KegiatanModel[]
  jenisPengawasanOptions: SelectValue[]
  openKegiatanFormDialog: boolean
  selectedKegiatanData: KegiatanModel | null
  dokumenRencana: DokumenRencanaModel | null
}

const initialRencanaState: InitialRencanaState = {
  loading: false,
  errMessage: '',
  rencanaData: null,
  kegiatanList: [],
  jenisPengawasanOptions: [],
  openKegiatanFormDialog: false,
  selectedKegiatanData: null,
  dokumenRencana: null,
}

const rencanaReducer = (
  state: InitialRencanaState,
  action: RencanaActions
): InitialRencanaState => {
  switch (action.type) {
    case RencanaActionTypes.FetchRequiredDataInit: {
      return {
        ...state,
        loading: true,
        errMessage: '',
      }
    }

    case RencanaActionTypes.FetchRequiredDataSucceed: {
      return {
        ...state,
        loading: false,
        rencanaData: { ...action.payload.rencanaData },
        kegiatanList: [...action.payload.kegiatanList],
        jenisPengawasanOptions: [...action.payload.jenisPengawasanOptions],
        dokumenRencana: { ...action.payload.dokumenRencana },
      }
    }

    case RencanaActionTypes.FetchRequiredDataFailed: {
      return {
        ...state,
        loading: false,
        errMessage: action.payload.errMessage,
      }
    }

    case RencanaActionTypes.SetKegiatanFormDialog: {
      return {
        ...state,
        openKegiatanFormDialog: action.payload.openKegiatanFormDialog,
      }
    }

    case RencanaActionTypes.SetSelectedKegiatanData: {
      return {
        ...state,
        selectedKegiatanData: { ...action.payload.kegiatanData },
      }
    }

    case RencanaActionTypes.AddKegiatan: {
      return {
        ...state,
        kegiatanList: state.kegiatanList.concat(action.payload.kegiatanData),
      }
    }

    case RencanaActionTypes.UpdateKegiatan: {
      const updatedKegiatanList = [...state.kegiatanList]
      const updateIndex = updatedKegiatanList.findIndex(
        (k) => k.id === action.payload.kegiatanData.id
      )

      updatedKegiatanList[updateIndex] = action.payload.kegiatanData

      return {
        ...state,
        kegiatanList: updatedKegiatanList,
      }
    }

    case RencanaActionTypes.DeleteKegiatan: {
      return {
        ...state,
        kegiatanList: state.kegiatanList.filter(
          (k) => k.id !== action.payload.id
        ),
      }
    }

    default:
      return state
  }
}

export { initialRencanaState, rencanaReducer }
