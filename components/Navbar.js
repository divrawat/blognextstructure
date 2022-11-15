import Link from 'next/link'



// function searchpost() {
//   document.getElementById("overlay-content").style.display = "block";
  
// }

// function removesearch() {

//   document.getElementById("overlay-content").style.display = "none";

// }

function darkmode() {
  var icon = document.getElementById("moon");
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "WhiteMoon.png";
} else {
    icon.src = "BlackMoon.png";
}
}

function darkmode2() {
  var icon2 = document.getElementById("moon2");
  document.body.classList.toggle("darkmode2");
  if (document.body.classList.contains("darkmode2")) {
    icon2.src = "WhiteMoon.png";
} else {
    icon2.src = "BlackMoon.png";
}
}

const Navbar = () => {


  return (
    <>
      <nav>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <span >☰</span>


        </label>
        {/* <img src="Search.png" onClick={searchpost} className="hidesearch"  width={22} height={22} alt="Search Icon" /> */}
        <img src="BlackMoon.png" className="hidemoon" id="moon2" onClick={darkmode2} width={22} height={22} alt="Dark Mode Icon" />
        <div className="logo">Blog</div>

        <ul>
          <li><Link href="/whatsapp"><a>Whatsapp</a></Link></li>
          <li><Link href="/status"><a>Status</a></Link></li>
          <li><Link href="/jokes"><a>Jokes</a></Link></li>
          <li><Link href="/images"><a>Images</a></Link></li>
          <li><Link href="/shayari"><a>Shayari</a></Link></li>
          <li><Link href="/poetry"><a>Poetry</a></Link></li>
          <li><Link href="/wishes"><a>Wishes</a></Link></li>
          <li><Link href="/quotes"><a>Quotes</a></Link></li>
          <li><Link href="/memes"><a>Memes</a></Link></li>


          <ul className='right'>
            <li><a href="#"><img src="BlackMoon.png" id="moon"  onClick={darkmode} width={22} height={22} alt="" /></a></li>
            {/* <li><a href="#"><img src="Search.png" onClick={searchpost} id="searchb" width={22} height={22} alt="" /></a></li> */}
          </ul>


        </ul>


      </nav>
      <div id="overlay-content">
        <form action="/action_page.php" className='formsearch'>
          {/* <input type="text" placeholder="Search.." className="placeholdersearch" name="search" /> */}
          {/* <img src="cross.png" id='cross' height={28} width={28} alt="" onClick={removesearch} /> */}
        </form>
      </div>


    </>
  )
}

export default Navbar