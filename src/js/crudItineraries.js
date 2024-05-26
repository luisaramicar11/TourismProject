//Esta función realiza el pedido de los itinerarios usando api json server y fetch
export async function itineraries() {
    const urlItinerarios = `http://localhost:3000/itineraries`
    const response = await fetch(urlItinerarios)
    const data = await response.json()
    console.log(data)
    return data
}