import { v4 as uuid } from 'uuid'
import { SelectValue } from '../../components/Inputs/input-type'

import {
  DokumenRencanaModel,
  KegiatanModel,
  RencanaModel,
} from './rencana-reducer'

const dummyRencana: RencanaModel = {
  id: uuid(),
  name: 'ABC',
}

const dummyKegiatanList: KegiatanModel[] = [
  {
    id: uuid(),
    name: 'qwerty',
  },
  {
    id: uuid(),
    name: 'asdfg',
  },
]

const dummyJenisPengawasanOptions: SelectValue[] = [
  {
    label: 'Audit',
    value: 'Audit',
  },
  {
    label: 'Reviu',
    value: 'Reviu',
  },
]

const dummyDokumenRencana: DokumenRencanaModel = {
  id: uuid(),
  name: 'dokumen',
}

export {
  dummyRencana,
  dummyKegiatanList,
  dummyJenisPengawasanOptions,
  dummyDokumenRencana,
}
