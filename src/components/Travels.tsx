export default function Travels() {
  return (
    <>
      <div>
        <h1 className='p-4 text-center capitalize'>Countries I have visited</h1>
        <iframe
          src='https://visitedplaces.com/embed/?map=world&projection=geoMercator&position=1.4_24.4_44.2_-11_0&theme=dark-green&width=1160&height=726.6953125&water=0&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=0&autozoom=step&home=US&places=~CY_TR_CU_MX_US.daaa44_CN_IR_MY_AE~~'
          className='w-full h-72 md:h-96'
        />
      </div>
      <div className='pt-10'>
        <h1 className='p-4 text-center capitalize'>States I have been to</h1>
        <iframe
          src='https://visitedplaces.com/embed/?map=usa&projection=geoAlbersUsa&theme=dark-green&water=0&graticule=0&names=1&duration=1000&placeduration=800&slider=0&autoplay=1&autozoom=none&home=US-CA&places=~US-AL_US-AZ_US-CA_US-DC_US-FL_US-GA_US-HI_US-IL_US-LA_US-MA_US-MS_US-NV_US-NJ_US-NM_US-NC_US-OR_US-SC_US-TN_US-TX_US-WA_US-WI_US-NY~~'
          className='w-full h-72 md:h-96'
        />
      </div>
    </>
  )
}
