import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';

const ListView = ({setDetailId}) => {
    const {flights}=useSelector(store=>store.flight)
    
    // slice metodunda kullanılacak ilk elemanın state i
    const [itemOffset,setItemOffset]=useState(0)
    // sayfa basına eleman sayısı
    const itemsPerPage=10;
    // slice metodunda kullanılacak son elemanın state i
    const endOffset=itemOffset + itemsPerPage
    // mevcut sayfadaki elemanları alma
    const currentItems=flights.slice(itemOffset,endOffset)
    // maksimum sayfa sayısı
    const pageCount=Math.ceil(flights.length / itemsPerPage)
    
    // yeni sayfaya tıklayınca state i günceller
    const handlePageClick=(event)=>{
        // yeni sayfadaki elemanın dizideki sırasını belirler
        const newOffset=(event.selected * itemsPerPage) % flights.length
        setItemOffset(newOffset)
    }
  return (
    <div className='p-4'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Kuyruk Kodu</th>
                    <th>Enlem</th>
                    <th>Boylam</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    currentItems.map((flight)=>(
                        <tr key={flight.id}>
                    <td>{flight.id}</td>
                    <td>{flight.code}</td>
                    <td>{flight.lat} </td>
                    <td>{flight.lng}</td>
                    <td>
                        <button onClick={()=>setDetailId(flight.id)}>Detay</button>
                    </td>
                </tr>
                    ))
                }
            </tbody>
        </table>

        <ReactPaginate
        className='pagination justify-content-center my-5'
        pageClassName='page-item'
        // 'önceki' butonun bulunduğu liste ögesine uygulanılacak sınıf
        previousClassName='page-item'
        // "sonraki" butonun bulunduğu liste ögesine uygulanılacak sınıf
        nextClassName='page-item'
        // sayfa numaralarına uygulanacak sınıf
        pageLinkClassName='page-link'
        // sonraki butonuna uygulanacak sınıf
        nextLinkClassName='page-link'
        // önceki butonuna uygulanılacak sınıf
        previousLinkClassName='page-link'
        // sayfa numaraları arasında boşluk için uygulanan noktalar için kullanılır.
        breakClassName='page-link'
        // sayfa numaraları arasında boşluk bırakmak için kullanılan nokta
        breakLabel="..."
        nextLabel="İleri >"
        // sayfa numaraları değistiğinde tetiklenicek fonksiyon
        onPageChange={handlePageClick}
        activeClassName='active'
        pageRangeDisplayed={5}
        // toplam sayfa sayısı
        pageCount={pageCount}
        previousLabel="< Geri"
        // sayfa sayısı sıfır oldugunda ne yapılacagını söyler
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default ListView