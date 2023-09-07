//components 
import Bussines from "@/components/Bussines"
import Table from "@/components/Table"
//fetching class
import FetchingApi from "@/context/FetchingApi"

export default async function page() {
  const fetchingApi = new FetchingApi()
  const result = await fetchingApi.get_business_byid_user(1)
  const data = await result.json()

  const getData = async (id_negocio) => {
    const data = await Promise.all([
      fetchingApi.get_items_grp_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_categ_byid_business(id_negocio).then(data => data.json()),
      fetchingApi.get_items_byid_business(id_negocio).then(data => data.json()),
    ])

    return data
  }

  const myData = await getData(1)
  console.log("---------")
  console.log(myData[0])
  console.log("---------")

  return (
    <>
      <Bussines></Bussines>
      <Table tabla={data}></Table>
      <Table tabla={myData[0]}></Table>
      <Table tabla={myData[1]}></Table>
      <Table tabla={myData[2]}></Table>
    </>
  )
}
