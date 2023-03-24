
import {navTop, navDown, toolMenu,section1,menu,section2,section3,section4,search, footer, footerdown} from './element'
import _ from './variables'
import './styles/renders.css'
import './general.css'
import toolImages from "./images/toolbar/tools.js"
import sec2Images from "./images/sec2/images.js"
import sec3Images from "./images/sec3/images.js"
import sec4Images from "./images/sec4/images.js"
import pImages from "./images/products/images.js"

export function NavTop(){
    //return about(_.about)
    return <div id="nav">{navTop()}</div>
}

export function ToolMenu(){
    return <div id = "tmain">{_.toolbar.images.map((item,index) => {
        return <div id="toolMenu">
            {toolMenu(toolImages[index],_.toolbar.label[index])}
            </div>
    }
    )}
    </div>

}

export function NavDown(){
    return navDown()
}

export function Section1(){
    return <div id="sec1">{section1()}</div>
}

export function Menu(){
    return <div id="product-menu">{_.pmenu.images.map((x,i) => <ul>{menu(pImages[i],_.pmenu.label[i])}</ul>)}
        </div>
}


export function Section2(){
    return <div id="sec2">{
        _.sec2.image.map((item,index) => {
        return <div id=''>
            {section2(sec2Images[index],_.sec2.label[index],_.sec2.link[index])}
            </div>
    }
    )
    }
    </div>
}

export function Section3(){
    return <div id="sec3">{
        _.sec3.image.map((item,index) => {
        return <div id=''>
            {section3(sec3Images[index],_.sec3.title[index],_.sec3.para[index],_.sec3.link[index])}
            </div>
    }
    )
    }
    </div>
}

export function Section4(){
    return <div id="sec4">

        <br/><br/>
        <div id='ljd' className='padb1'><center><h4>LIVING JOHN DEERE</h4></center></div>
        {
        _.sec4.image.map((item,index) => {
        return <div id=''>
            {section4(sec4Images[index],_.sec4.title[index],_.sec4.para[index],_.sec4.link[index])}
            </div>
    }
    )
    }
    </div>
}

export function Search(){
    return <div id="search-big">{search()}</div>
}

export function Footer(){
    var fkeys = Object.keys(_.footer);

    return  <div id="footer">{fkeys.map(item => {return <div  id="column">{footer(_.footer[item])}</div>})}</div>

}

export function FooterDown(){
    return <div id="footerdown">{footerdown()}</div>
}
