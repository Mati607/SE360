let express = require('express')
let firebase = require('firebase')
//let bodyParser = require('body-parser');
let cors = require('cors')
let path  = require('path')
const port = 8000;

let app = express()

app.use(cors())
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('./public')));

let firebaseConfig = {
    apiKey: "AIzaSyB0tpxxFNyI3ktDvOxqKpkiY9gxkrbSeVI",
    authDomain: "software-engineering-123.firebaseapp.com",
    databaseURL: "https://software-engineering-123-default-rtdb.firebaseio.com",
    projectId: "software-engineering-123",
    storageBucket: "software-engineering-123.appspot.com",
    messagingSenderId: "358980638650",
    appId: "1:358980638650:web:6e0bfb2afbe58da05f6f83",
    measurementId: "G-Y3345Q4E33"
  };


let productTemplate = {
  name:"Dell Latitude-5880",
  brand_name: "Dell",
  category:"Electronics",
  price:3000,
  stock_left: 5,
  total_sold: 0,
  discout: 0,
  rating:2,
  url:"https://i.gadgets360cdn.com/products/laptops/large/1525206065_635_inspiron-5559.jpg?downsize=*:180&output-quality=80&output-format=webp",
  description: "laptop featuring ci7 and SSD "
};

let trialProduct = {
  name:"Ray Ban Glasses",
  brand_name: "Ray Ban",
  category:"Men",
  price:10500,
  stock_left: 10,
  total_sold: 3,
  discout: 0,
  rating:4.5,
  url:"https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Ray%20Ban.jpg?alt=media&token=e51c3e0d-3f18-4b4e-a349-3cb4b59bee0c",
  description: "High quality Ray Ban Glasses for men"
}

let userTemplate = {
  email: "hamza123@gmail.com",
  name: "Hamza Shahzad",
  password: "123456",
  city: "Lahore",
  address: "Fairyland close to demon castle Mars",
  contact: "03014598454",
  news_letter: false
}
let reviewTemplate = {
  product_name: "Dell Latitude-5880",
  email: "hamza123@gamil.com",
  rating: 4,
  comments: "this is a nice product"
} 

let wishlistTemplate={ 
  email: "hamza",
  product_name: ["Dell Latitude 980","Dell Latitude 780","Dell Latitude 680"],
  wished: true
}

let categoriesTemplate = ["Groceries","Electronics","Sports","Toys","Men","Women","Furniture"]

let adminDetailTemplate = {
  email: "king@storex.com",
  password: "123456",
  name: "king"
}

let complaintTemplate = {
  user_email: "hamza@gmail.com",
  comments: "I got a faulty product"
}

let pendingOrderTemplate = {
  user_email: "hamza@gmail.com",
  products: ["Dell Latitude 5880","Sony Xperia 321","ps5 digital edition"] 
}

let TransactionTemplate = {
  user_email: "hamza@yahoo.com",
  products: ["Dell Latitude 5880","Sony Xperia 321","ps5 digital edition"],
  date: "06/2/2021",
  bill: 100000 
}

firebase.initializeApp(firebaseConfig);

let db = firebase.database();

let data = {
urls : ["https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/tricycle.jpg?alt=media&token=73107bbe-5dc0-4613-9f6c-7f6db61dd892", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Axe-Africa-Body-Spray-150ml.jpg?alt=media&token=f5a1a4d4-cf29-4b34-bff7-c3eba4a720bf", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Cricket%20Bat.jpg?alt=media&token=a33d3af5-1890-4a35-8685-4855ec9cf1d6", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/DellLatitude14-5480__1_.jpg?alt=media&token=a48e30e2-e631-4d10-86e6-7df33b0fafb5", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Ray%20Ban.jpg?alt=media&token=e51c3e0d-3f18-4b4e-a349-3cb4b59bee0c","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/STudy%20table.jpg?alt=media&token=5b12bb70-c2f0-4c68-844a-9cdcff74a134","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/gucci%20handbag.jpg?alt=media&token=8226151d-669c-4ec3-b277-d3362e6d621e","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/kettle.jpg?alt=media&token=853cdc22-5501-4ff2-9052-c89a4e5e67c1", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/makeup.webp?alt=media&token=e5be61c9-7763-41c3-a6ac-ef6cf3d19729", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/nike%20shoes.jpg?alt=media&token=49ae7986-c612-4664-bb8d-ce2a3bf13bbb","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/tamp.webp?alt=media&token=b015999f-5cf0-49ba-ba85-06965624bd88","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/teddy%202.jpg?alt=media&token=7aa554a4-b811-4830-954f-ae02249bf136"],
names : ["Tricycle","Axe Body Spray","CA Cricket Bat","Dell Latitude 5480", "Ray Ban Glasses","Study Table","Gucci Handbag","Kettle","Makeup","Nike Shoes","Table Lamp","Stuffed Teddy Bear"],
brand_names : ["None","Axe","CA","Dell","Ray Ban","None","Gucci","Kenwood","L'Oreal","Nike","None","Orange Toys"],
categories : ["Toys","Men","Sports","Electronics","Men","Furniture","Women","Electronics","Women","Men","Furniture","Toys"],
prices : [10500,550,1220,175000,10300,25000,12000,3500,32000,10500,7500,4500],
leftOvers : [5,10,3,7,2,3,6,2,2,4,3,2],
totalSold : [2,6,7,3,10,2,12,6,3,10,2,11],
discount : [0,0,50,0,80,0,100,0,0,150,0,100],
rating : [4.5,4.7,4.8,4.3,4.4,3.9,4.2,3.8,4.1,4.6,3.5,4.2],
descriptions : ["Fun Tricycle for kids","Body Spray for Men","Superb Cricket Bat for the best players","14 inch Business Laptop","Glasses for fashion-crazy men","Wooden Study Table for students","Luxury Handbag for Ladies","Portable Kettle","Makeup Kit for Ladies","Sneakers for athletes","Table Lamp for your side Table","Cute and Soft Stuffed Teddy bear"],
}

for (let i = 0; i<data.urls.length; i++){
  let product = {
    name: data.names[i],
    brand_name: data.brand_names[i],
    category: data.categories[i],
    price: data.prices[i],
    stock_left: data.leftOvers[i],
    total_sold: data.totalSold[i],
    discount: data.discount[i],
    rating: data.rating[i],
    url: data.urls[i],
    description: data.descriptions[i],
  }
  db.ref("products").push(product);
}
// let storage = firebase.storage();
// let storageRef = storage.ref();
// storageRef.child('tricycle.jpg').getDownloadURL().then((myUrl) => {
//   let product = {
//     name:"Tricycle",
//     brand_name: "random",
//     category:"toys",
//     price:10500,
//     stock_left: 5,
//     total_sold: 2,
//     discout: 0,
//     rating:4.5,
//     url: myUrl,
//     description: "Fun tricycle for kids"
//   }
//   db.ref("products").child("toys1").set(product)
// })



let random = {
  myreview:[["aaa","bbb","ccc"],["ddd","eee","fff"],["ggg","hhh","iii"]]
};

// let bla = [["aaa","bbb","ccc"],["ddd","eee","fff"],["ggg","hhh","iii"]]
// db.ref("reviews").child("mati").set(bla)
// db.ref("reviews").push(random)


// db.ref("reviews").once('value').then((snap)=>{
//   let obj = snap.val();
//   let values = Object.keys(obj).map((key)=>obj[key]) 
//   console.log(obj);
// })

// app.get('/products',(req,res)=>{

//   db.ref("transactions").once('value').then((snap)=>{
//        let obj = snap.val();
//        let values = Object.keys(obj).map((key)=>obj[key]) 
//        res.send(JSON.stringify(values));
//      })
// })



app.listen(port,()=>{console.log(`listening at localhost:${port}`)})