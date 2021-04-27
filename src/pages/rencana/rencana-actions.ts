import { SelectValue } from '../../components/Inputs/input-type'
import {
  DokumenRencanaModel,
  KegiatanModel,
  RencanaModel,
} from './rencana-reducer'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] }
}

export enum RencanaActionTypes {
  FetchRequiredDataInit = 'FETCH_REQUIRED_DATA_INIT',
  FetchRequiredDataSucceed = 'FETCH_REQUIRED_DATA_SUCCEED',
  FetchRequiredDataFailed = 'FETCH_REQUIRED_DATA_FAILED',
  SetKegiatanFormDialog = 'SET_KEGIATAN_FORM_DIALOG',
  SetSelectedKegiatanData = 'SET_SELECTED_KEGIATAN_DATA',
  AddKegiatan = 'ADD_KEGIATAN',
  UpdateKegiatan = 'UPDATE_KEGIATAN',
  DeleteKegiatan = 'DELETE_KEGIATAN',
}

type RencanaPayloads = {
  [RencanaActionTypes.FetchRequiredDataInit]: undefined
  [RencanaActionTypes.FetchRequiredDataSucceed]: {
    rencanaData: RencanaModel
    kegiatanList: KegiatanModel[]
    jenisPengawasanOptions: SelectValue[]
    dokumenRencana: DokumenRencanaModel
  }
  [RencanaActionTypes.FetchRequiredDataFailed]: {
    errMessage: string
  }
  [RencanaActionTypes.SetKegiatanFormDialog]: {
    openKegiatanFormDialog: boolean
  }
  [RencanaActionTypes.SetSelectedKegiatanData]: {
    kegiatanData: KegiatanModel
  }
  [RencanaActionTypes.AddKegiatan]: {
    kegiatanData: KegiatanModel
  }
  [RencanaActionTypes.UpdateKegiatan]: {
    kegiatanData: KegiatanModel
  }
  [RencanaActionTypes.DeleteKegiatan]: {
    id: string
  }
}

export type RencanaActions = ActionMap<RencanaPayloads>[keyof ActionMap<RencanaPayloads>]
