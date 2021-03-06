import React from 'react';
import { Grid } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Heart from '@material-ui/icons/FavoriteBorder';
import AddCart from '@material-ui/icons/AddShoppingCart';
import Arrow from '@material-ui/icons/ArrowForward';
import {fireApp} from './fireapp.js'
import { makeStyles } from '@material-ui/core/styles';
import Load from '@material-ui/core/CircularProgress';
import Back from '@material-ui/icons/ArrowBack';
import Carousel from 'react-material-ui-carousel'
import image4 from './slide4.jpg'
import image3 from './slide3.jpg'
import image5 from './slide5.jpg'
import image6 from './slide6.jpg'
import image7 from './slide7.jpg'
import image8 from './slide8.png'


const useStyles = makeStyles((theme) => ({
    effect: {
        '&:hover': {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
      }
  }));


function Content({router,addToCart}){
    const classes = useStyles()
    const route2 = (event)=>{
        let id = event.target.dataset.id;
        router(["productpage",id,["homescreen"]]);
    }

    const [TopSellingList,setTop] = React.useState(undefined) //plug into database
    const [SaleList,setSale] = React.useState(undefined) //plug into database

    const giverating = (idx,record) => {
        if(record){
            let obj = record[idx]
            if(obj){
                obj = Object.keys(obj).map(key=>obj[key])
                let ans = 0
                for(let x of obj){
                    ans = ans + x
                }
                return ans/obj.length
            }
        }
        return 2.5
}

    React.useEffect(()=>{
        let db = fireApp.database();
        db.ref("products").once('value').then((snap)=>{
        let obj = snap.val();

        db.ref("ratings").once('value').then(snapshot=>{
            let obje = snapshot.val()
            let data = Object.keys(obj).map((key)=>{
                obj[key].id = key;
                obj[key].rating = giverating(key,obje)
                return obj[key]
            })
            let sale = data.filter(ele=>ele.discount>0 && ele.stock_left>0)
            let normal_data =  data.filter(ele=>ele.discount==0 && ele.stock_left>0)
            setTop(normal_data)
            setSale(sale)
        })
     })
    },[])

    const [startindexTop,setIndexTop] = React.useState(0);
    const [startindexSale,setIndexSale] = React.useState(0);

    const topFour = [];
    const SaleFour = [];

    if(TopSellingList && SaleList){
        
        for(let i=startindexTop;i<startindexTop+5;i++){
            let ind = i % TopSellingList.length;
            topFour.push(TopSellingList[ind]);
        }
    
        for(let i=startindexSale;i<startindexSale+5;i++){
            let ind = i % SaleList.length;
            SaleFour.push(SaleList[ind]);
        }
    }


    return(
    <>
        <Grid item xs={12}>
                <div style={{marginLeft:"5%",marginTop:"3%"}}>
                    <Carousel interval={3000}>
                        <div>
                            <img src={image4} width="95%" height="250px"/>
                        </div>
                        <div>
                            <img src={image3} width="95%" height="250px"/>
                        </div>
                        <div>
                            <img src={image5} width="95%" height="250px"/>
                        </div>
                        <div>
                            <img src={image6} width="95%" height="250px"/>
                        </div>
                        <div>
                            <img src={image7} width="95%" height="250px"/>
                        </div>
                        <div>
                            <img src={image8} width="95%" height="250px"/>
                        </div>
                    </Carousel>
                </div>
        </Grid> 
        {(TopSellingList && SaleList) ?<>
        <Grid container spacing={4} item xs={12}>

        <Grid item xs={1}></Grid>

        <Grid item xs={11}>
            <h4 style={{marginTop:"3%"}}>Top Selling Products</h4>
        </Grid>

        {startindexTop!=0 ? <Grid item xs={1}>
            <Back onClick={()=>{if(startindexTop!=0){setIndexTop(startindexTop-1)}}} style={{cursor:"pointer",fontSize:"60px",color:"#355093"}}/>
        </Grid> :  <Grid item xs={1}></Grid>}

        {
        topFour.map((obj,index)=>(
        <Slide key={index} direction="left" timeout={600} in>
        <Grid item xs={2}>
            <div className={classes.effect} style={{borderRadius:"15px",backgroundColor:"#84CEEB",marginTop:"-31%",height:"220px"}}>
                <div style={{textAlign:"center",marginBottom:"-12%"}}>
                    <img data-id={obj.id} onClick={route2} style={{borderRadius:"12px",transform:"translateY(10px)",marginBottom:"-10px"}} src={obj.url} width="90%" height="120px"></img>
                    <h5>{obj.category}</h5>
                    <h5 style={{transform:"translateY(-20px)"}}><strong>{obj.name}</strong></h5>
                    <Rating size="small" style={{transform:"translateY(-45px)"}} name="read-only" value={obj.rating} precision={0.5} readOnly />
                </div>
                <div style={{transform:"translateY(-30px)"}}>
                    <AddCart onClick={()=>addToCart(obj.id)} style={{cursor:"pointer",marginLeft:"5%",transform:"translateY(4px)"}}fontSize="small"/>
                    <Heart style={{cursor:"pointer",visibility:"hidden",marginLeft:"5%",transform:"translateY(4px)"}} fontSize="small"/>
                    <h5 style={{display:"inline",marginLeft:"24%"}}><strong>RS:{obj.price}</strong></h5>
                </div>
            </div>
        </Grid></Slide>))
        }

        <Grid item xs={1}>
            <Arrow onClick={()=>setIndexTop(startindexTop+1)} style={{cursor:"pointer",fontSize:"60px",color:"#355093"}}/>
        </Grid>

        </Grid>

        <Grid container spacing={4} item xs={12}>

            <Grid item xs={1}></Grid>

            <Grid item xs={11}>
                <h4 style={{transform:"translateY(-3px)"}}>Products on Sale</h4>
            </Grid>

            {startindexSale!=0 ? <Grid item xs={1}>
                <Back onClick={()=>{if(startindexSale!=0){setIndexSale(startindexSale-1)}}} style={{cursor:"pointer",fontSize:"60px",color:"#355093"}}/>
            </Grid> : <Grid item xs={1}></Grid>}

            {
            SaleFour.map((obj,index)=>(<Slide key={index} direction="left" timeout={600} in><Grid item xs={2}>
                <div className={classes.effect} style={{transform:"translateY(-20px)",borderRadius:"15px",backgroundColor:"#84CEEB",marginTop:"-20%",height:"220px"}}>
                    <div style={{position:"relative",textAlign:"center",marginBottom:"-12%"}}>
                        <span style={{float:"right",backgroundColor:"red",color:"white",width:"20%",paddingLeft:"3%",paddingRight:"3%",marginTop:"-10px"}}>Sale</span>
                        <img data-id={obj.id} onClick={route2} style={{borderRadius:"12px",transform:"translateY(10px)",marginTop:"-11px"}} src={obj.url} width="90%" height="120px"></img>
                        <h5 style={{marginTop:"7%"}}>{obj.category}</h5>
                        <h5 style={{transform:"translateY(-20px)"}}><strong>{obj.name}</strong></h5>
                        <Rating size="small" style={{transform:"translateY(-43px)"}} name="read-only" value={obj.rating} precision={0.5} readOnly />
                    </div>
                    <div style={{transform:"translateY(-30px)"}}>
                        <AddCart onClick={()=>addToCart(obj.id)} data-id={obj.id} style={{cursor:"pointer",marginLeft:"5%",transform:"translateY(4px)"}}fontSize="small"/>
                        <Heart style={{cursor:"pointer",visibility:"hidden",marginLeft:"5%",transform:"translateY(4px)"}} fontSize="small"/>
                        <h5 style={{display:"inline",marginLeft:"24%"}}><strong>RS:{Math.round(obj.price*(1-obj.discount/100))}</strong></h5>
                        <h6 style={{textDecoration:"line-through",color:"red",transform:"translateX(57.5%) translateY(-200%)"}}><strong>RS:{obj.price}</strong></h6>
                    </div>
                </div>
            </Grid></Slide>))
            }

            <Grid item xs={1}>
                <Arrow onClick={()=>setIndexSale(startindexSale+1)} style={{cursor:"pointer",fontSize:"60px",color:"#355093"}}/>
            </Grid>

        </Grid>
        </> : <Load size={60} style={{top:"50%",left:"50%",position:"absolute"}} /> }

    </>
);}

export default Content;