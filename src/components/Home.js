//components
import Table from "./Table"
//fetching class
import FetchingApi from "@/context/FetchingApi"

export default async function Home() {
  const fetchingApi = new FetchingApi()

  const getData = async (id_negocio) => {
    return Promise.all([
      fetchingApi.get_items_grp_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_categ_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_byid_business(id_negocio).then(data => data.json()),
    ])
  }
  
  const myData = await getData(1)

  return (
    <div>
      <h1>Inicio</h1>  
      <Table tabla={myData[0]}></Table>
      <Table tabla={myData[1]}></Table>
      <Table tabla={myData[2]}></Table>
    </div>
  )
}
