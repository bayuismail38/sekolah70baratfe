import React from 'react';
import TabelAngkatan from './components/TableAngkatan';


function angkatan() {

  return (
    <div className='p-4'>
        <h1>Angkatan Page</h1>
        <br /><br />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4'>
            <TabelAngkatan/>
        </div>
    </div>
  )

}

export default angkatan