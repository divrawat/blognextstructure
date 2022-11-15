// import Link from "next/link";
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link";
import styles from   '../styles/category.module.css'

const memes = () => {
  return (
    <>
   <Head>
   <meta charset="UTF-8"/>
  <meta name="description" content="This is the category page of memes section where you can find memes related to many things."/>
  <meta name="author" content="Divyanshu Rawat"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   </Head>


  <div className={styles.headerAd}>
    {/* Advertisment */}
  </div>






   <div className={styles.categorycontent}>
       <div className={styles.gridcontainer}>


     
       <div className={styles.posts}> 
       <h1 className={styles.heading}>Memes</h1>

       <div style={{ display: "flex", justifyContent: "center", marginTop:"18px", marginBottom:"18px" }}>
       <Image src="/MashoorMedia.png" alt="" width={200} height={200} />
       </div>
       <p className={styles.para}>Are You Looking for best Memes. here find the best Memes serwer yufgs sftigswf withwiftb wrigwr
        ierworf wrohjwor swrhwotf wrkhwiobrfw fwifthwbf wihwf wrbwibf wkthwf wothw wotwn woftbw
        wsftwjtgf wtwh ioh</p>
        
        <button className={styles.btn}><Link href="#"><a>Read More</a></Link> </button>
        </div>
      

        <div className={styles.posts}> 
       <h1 className={styles.heading}>Memes</h1>

       <div style={{ display: "flex", justifyContent: "center", marginTop:"18px", marginBottom:"18px" }}>
       <Image src="/MashoorMedia.png" alt="" width={200} height={200} />
       </div>
       <p className={styles.para}>Are You Looking for best Memes. here find the best Memes serwer yufgs sftigswf withwiftb wrigwr
        ierworf wrohjwor swrhwotf wrkhwiobrfw fwifthwbf wihwf wrbwibf wkthwf wothw wotwn woftbw
        wsftwjtgf wtwh ioh</p>
        
          <button className={styles.btn}><Link href="#"><a>Read More</a></Link> </button>
        </div>
        




         {/* posts over */}
       
     </div>     
     </div>
   

   
   
  
    </>
  )
}

export default memes