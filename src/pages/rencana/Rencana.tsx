import { useEffect, useReducer } from 'react'
import {
  dummyDokumenRencana,
  dummyJenisPengawasanOptions,
  dummyKegiatanList,
  dummyRencana,
} from './dummy-data'
import { RencanaActionTypes } from './rencana-actions'
import { initialRencanaState, rencanaReducer } from './rencana-reducer'

export default function RencanaPage() {
  const [rencanaState, dispatchRencana] = useReducer(
    rencanaReducer,
    initialRencanaState
  )

  const fetchInitialData = () => {
    dispatchRencana({
      type: RencanaActionTypes.FetchRequiredDataInit,
    })

    setTimeout(() => {
      dispatchRencana({
        type: RencanaActionTypes.FetchRequiredDataSucceed,
        payload: {
          rencanaData: dummyRencana,
          kegiatanList: dummyKegiatanList,
          jenisPengawasanOptions: dummyJenisPengawasanOptions,
          dokumenRencana: dummyDokumenRencana,
        },
      })
    }, 1000)
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        {(function () {
          if (rencanaState.loading) {
            return <div style={{ textAlign: 'center' }}>Loading...</div>
          }

          return (
            <>
              <div>Rencana:</div>
              <div>{rencanaState.rencanaData?.name}</div>
              <hr />
              <div>Kegiatan:</div>
              <div>
                <ul>
                  {rencanaState.kegiatanList.map((k) => (
                    <li key={k.id}>{k.name}</li>
                  ))}
                </ul>
              </div>
              <hr />
              <div>Dokumen Rencana:</div>
              <div>{rencanaState.dokumenRencana?.name}</div>
            </>
          )
        })()}
      </div>
    </div>
  )
}
