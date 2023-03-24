import './styles/element.css' //styling elements
import i from './images/icons'
import carimage from './images/carousel/image_16.jpg'
//import {toolImage} from "./images/toolbar/tools.js"
//import heroImgSm from '../../assets/images/devsm.png';
//import logo from '../../assets/images/wl.png'
//import heroImgBg from '../../assets/images/devbg.png';



export function navTop(){
    return(
        <>
        <div id="nav-top">
			<div className='fr w2' id="nav-admin"><div className="ic">{i.menu()}</div><div className="il">Menu</div></div>
			<div className='fr w2' id="nav-menu"><div className="ic">{i.admin()}</div><div className="il">Admin</div></div>
			<div className='fr w2'><div className="ic">{i.location()}</div><div className="il">Find A Dealer</div></div>
			<div className='fr w3 fs3 colg' id="nav-search">Search <input placeholder=''/><button id="search-but">{i.search()}</button></div>
		</div>
        </>
    )
}

export function navDown(){
    return <>
    <div id="nav-down" className='cb'>
    <ul  className='nobul'><li><a href="#fd">Home</a></li><li><a href="#lmfs">Equipment</a></li><li><a href="#dsf">Finance</a></li><li><a href="#sfs">Parts & Service Digital</a></li></ul>
</div>
</>
}

export function toolMenu(image,label){
    return(
        <div id="tool-types" className='cb'>
			<div>
				<div height="300px">
                <img src={image} role="presentation" height="200px" alt={label}/>
				<center className='fs3'>{label}</center>
				</div>
			</div>
		</div>		
    );
}


//navTop,toolMenu,section1,menu,section2,section3,search

export function section1(){
    return <div> 
        <br/><br/>
        <div id="imageSc">
            <div id="overlay">
            <img src={carimage} alt={"as ds"} width={"100%"}/>
			<div id="secWrite">
            <br/>
			<p className='fs6 colw lh2'>Center for Heirs' Property Preservation<br/> and the LEAP Coalition</p>
			<button className='pad bcolt colw fs4'>See how this patnership is making an impact</button>
            <br/><br/><br/><br/><br/><br/><br/>
			</div>
            </div>
		</div>
        <br/><br/><br/>
        </div>
}

export function menu(images, label){
            return <li id="menuli"><div><img src={images} width={"35px"} alt={label}/></div><div id="plabel"><a href={label}>{label}</a></div></li>
        
}

export function section2(image,label,link){
    return (
        <div id="section2">
			<div>
            <img src={image} alt = {label}/>
            <div id="text2">
			<p className='fs4'>{label}</p>
            <br/>
			<a href='#c4'  className='fs3'>{link}</a>
			</div>
            </div>
		</div>

    )
}


export function section3(image,title,label,link){
    return (
        <div  id="section3">
            <img src={image} alt = {label}/>
			<div id="text3">
            <div  className='fs3 lh'>
			<h3>{title}</h3>
			<p>{label}</p>
			<button>{link}</button>
            </div>
			</div>
		</div>

    )
}

export function section4(image,title,label,link){
    return (
        <div id="section4">
            <div id="cont4">
            <img src={image} alt = {label}/>
			<div id="text4">
            <h3>{title}</h3>
            <br/>
			<p>{label}</p>
			</div>
            <button><span>{link}</span>{">"}</button>
            </div>
		</div>

    )
}

export function search(){
    return(
        <>
        <br/><br/>
        <div id="search">
        <h1>Search Parts By</h1>
        <br/><br/>
        <select className='fs3'><option className='fs3'><div>Model</div></option></select>
        <input/><button>{i.search()}</button>
        <br/>
        <br/>
        <input id="#secondInput" type='checkbox'/><span>Search Parts By Other</span>
        </div>
        </>
    )
}

export function footer(sec){
    return(
        <div id="column">{sec.map(item=> <p id='links'> {item} </p>)}</div>
    )
}

export function footerdown (){
    return <div><center>
    <div><button>Ghana</button></div><br/><br/>
    <div>Site Map Privacy and Data Cookie Statement Terms of Use Accessibility Contact Us</div><br/><br/>
    <div>Cookie Preferences</div><br/><br/>
    <div>Copyright © 2023 Deere & Company. All Rights Reserved.</div><br/><br/><br/>
    </center> </div>
}

/*
export function hero(size,data){
return(
    <div className='w10 ht'>
        {logoImg()}
        {heroImage(size)}
        {heroDetail(size,data)}
    </div>
    );
}

function logoImg(){
    return <img className="fr" alt="Logo" id="logo" src={logo} width={150} height={150}/>
}

function heroImage(size){
    let pic = size === 'maximized' ? heroImgBg : heroImgSm;
    let imgCls = size === 'maximized' ? 'mxw6 b0 magl0 posa z3 pad0 magb0' : 'w1 b0 nmagl1 posa z3 colw';
    return(
        <div className={imgCls}>
            <img alt="heroImage" id="hero-image" src={pic} width={size === 'maximized' ? 400:300} height={400}/>
        </div>
    );
}

function heroDetail(size,data){
    let s = size==="maximized"? true : false;
    return (
        <div id='hero-detail' className={s?'cbcol1 magl2 posa z2 w8 b0 colw fs5':'cbcol1 magl2 r0 posa z2 w8 mh6 t0 colw fs3'}>
            <div className={s?'magl2 fl dib fs6':'fl dib fs5 mag1'}><span>{data[0]+"?"||""}<>&nbsp;&nbsp;</></span><span><hr className={s?'nmagr6 w7 fr':'nmagr3 w3 magt2'}/></span></div>
            <div className={s?'magl4 cb fl':'magr1 cb fr fs4 padt1 padb1'}><a href='#scholarship'>{data[1]||""}</a></div>
            <div className={s?'magr1 cb fr':'magr1 cb fr fs4 padb1'}><a href='#tuition'>{data[2]||""}</a></div>
            <div className={s?'magl3 cb fl':'magr1 cb fr fs4 padb1'}><a href='#assist'>{data[3]||""}</a></div>
            <div className={s?'magl5 cb fl':'magr1 cb fr fs4 padb1'}><a href='#about'>{data[4]||""}</a></div>
        </div>
    );
}

export function about({about,button}){
    return (
        <div id="about" className='fs4 w10'>
        <p>{about[0]}</p>
        
        <p>{about[1]}</p>
        
        <p>{about[2][0]}<span id="link"><a href="#about">{about[2][1]}</a></span> {about[2][2]}</p>
        
        <p><button className='cbcol1 colw fs3 bn'>{button}</button></p>
    </div>
    );
}

export function section(size,{id,title, queries,link}){

    const silly = size === 'maximized'? 'posa z3 mw1 colb tl bcolw t1 mh1 tac' : 'posa z3 mw1 colb bcolw t1 mh1 tac';
    return(
    <div id={id} className='w10 posr mht4 magb1'>
        <div id="title" className={silly}><p>{title}</p></div>
        <div id="query" className={size==="maximized"?'cbcol2 colw w8 l1 mh10 posa z2 fsa fs4':'cbcol2 colw w8 l1 mh10 posa z2 fsa fs3'}>
            {
                queries.map((val) =>{
                    return <div className='query'><a href={title}>{val}</a></div>
                })
            }
            <div className='fr'><a href={title}>{link}</a></div>
        </div>
    </div>
    );
}
 
export function report(data){
    return(
    <div id="report" className='padt2 magb1'>
        <p className='tac fs4'><a className='colb' href="#report">{data[0]}</a></p>
        <div className='fr magr1 fs3'>{data[1]}</div>
    </div>
    );
}

export function footer(data){
    return(
    <div id="footer" className='cb mht2 colw lh cbcol1'>
        <p className='tac'>{data}</p>
    </div>
    );
}

*/