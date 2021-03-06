let firebase = require('firebase');
// const { default: AddCategory } = require('../admin/src/AddCategory');

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

firebase.initializeApp(firebaseConfig);

let db = firebase.database();

let data = {
    urls : ["https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/tricycle.jpg?alt=media&token=73107bbe-5dc0-4613-9f6c-7f6db61dd892", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Axe-Africa-Body-Spray-150ml.jpg?alt=media&token=f5a1a4d4-cf29-4b34-bff7-c3eba4a720bf", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Cricket%20Bat.jpg?alt=media&token=a33d3af5-1890-4a35-8685-4855ec9cf1d6", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/DellLatitude14-5480__1_.jpg?alt=media&token=a48e30e2-e631-4d10-86e6-7df33b0fafb5", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Ray%20Ban.jpg?alt=media&token=e51c3e0d-3f18-4b4e-a349-3cb4b59bee0c","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/STudy%20table.jpg?alt=media&token=5b12bb70-c2f0-4c68-844a-9cdcff74a134","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/gucci%20handbag.jpg?alt=media&token=8226151d-669c-4ec3-b277-d3362e6d621e","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/kettle.jpg?alt=media&token=853cdc22-5501-4ff2-9052-c89a4e5e67c1", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/makeup.webp?alt=media&token=e5be61c9-7763-41c3-a6ac-ef6cf3d19729", "https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/nike%20shoes.jpg?alt=media&token=49ae7986-c612-4664-bb8d-ce2a3bf13bbb","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/tamp.webp?alt=media&token=b015999f-5cf0-49ba-ba85-06965624bd88","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/teddy%202.jpg?alt=media&token=7aa554a4-b811-4830-954f-ae02249bf136","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/dawn%20bread.webp?alt=media&token=2556c38b-69ac-4896-8bc2-7d0cd922e3cf","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FElectronics%2FSAMSUNG-SOUNDBAR-HW-R550.jpg?alt=media&token=3e8c22aa-1309-4e2e-8a21-af44c4d03a9f","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FElectronics%2Flarge3197-s1385475275-1540-10077-220820081352.jpg?alt=media&token=41c788fe-0a83-4dae-b1a5-ef654950f738","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FElectronics%2Fsamsung%20m51.webp?alt=media&token=b198ee44-bab2-40bf-8560-b9c2eb1ad9c8","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FElectronics%2Fsamsung%20tv.webp?alt=media&token=b60a0742-7df4-4ab8-ba34-33c08461bb43","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FFurniture%2Fchair%5D.jpg?alt=media&token=803bb7c4-e0af-4bff-bd1d-38640d5e80d4","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FFurniture%2Fconsole.jpg?alt=media&token=5ad00999-460e-4175-9db2-7a4ca9026e2d","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FFurniture%2Fdesk.jpg?alt=media&token=070f3593-828f-4317-8fbb-c31ce24d6a77","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FFurniture%2Fshelf.jpeg?alt=media&token=05120663-5015-4f81-a271-e99155d68fc7","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FGroceries%2Fbutter.jpg?alt=media&token=d190ac15-f193-471b-9898-b2242169e28b","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FGroceries%2Fnutella.jpg?alt=media&token=811e77ce-a46b-4e59-8ccd-68e281d3c2a9","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FGroceries%2Fpringles-salt-vinegar.jpg?alt=media&token=21270334-1a1a-4610-a7e9-e888d8bc1e89","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FGroceries%2Fsamyang.jpg?alt=media&token=f9f7348c-8984-4126-b3d2-40e6a09c4bf5","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FMen%2Fmen's%20watch.webp?alt=media&token=f5a25b39-87d9-4525-83a5-ddc4f5538753","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FMen%2Fmen.jpg?alt=media&token=651aa211-7a79-4b96-a2b9-8353ed8e8d9d","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FMen%2Fshoes.webp?alt=media&token=10ed223b-8f69-4eb1-a7dc-1ed04b01427f","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FMen%2Fwallet.jpg?alt=media&token=773bf45a-0f29-4e5c-bcf8-6ef683572adc","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FSports%2F61jRIVCYnLL._AC_SL1100_.jpg?alt=media&token=c9372072-08ad-40b6-8297-8099566d0a8c","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FSports%2Fbadminton%20rackets.jpg?alt=media&token=7e6024d6-ba1c-4ca3-9d93-62f874d53521","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FSports%2Fball%20pack.jpg?alt=media&token=956d6114-6fa0-4686-9853-49ed3387ad72","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FSports%2Ffootball.jpg?alt=media&token=c999958e-aa8b-4a44-807b-278ec5ffd75a","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FToys%2Fcards.jpg?alt=media&token=64440daa-7503-43d9-b5aa-9b9101c52675","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FToys%2Fdrone.jpg?alt=media&token=a17ad60b-65c7-4312-96a6-30c243d0ea22","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FToys%2Fnerf.jpg?alt=media&token=0c72c19b-764c-4062-8c9d-098828fe8861","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FToys%2Fremote%20car.jpg?alt=media&token=874939cc-155c-436c-8811-5ae0623887f4","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FWomen%2Fdove.jpg?alt=media&token=dfea0b9f-6d91-45c5-a35b-f68001cefaac","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FWomen%2Fpurse.jpg?alt=media&token=c723fa6e-8f25-4ed8-9ee0-298260699a87","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FWomen%2Fwatch%20women.jpg?alt=media&token=5428b356-a633-4f01-928c-65c34919791f","https://firebasestorage.googleapis.com/v0/b/software-engineering-123.appspot.com/o/Demo%20Images%20New%2FWomen%2Fwomen%20wallet.jpg?alt=media&token=a154a66f-0d18-44e6-82e3-01c81c90948a"],
    names : ["Tricycle","Axe Body Spray","CA Cricket Bat","Dell Latitude 5480", "Ray Ban Glasses","Study Table","Gucci Handbag","Kettle","Makeup","Nike Shoes","Table Lamp","Stuffed Teddy Bear","Dawn Bread","Soundbar HW-R550","Gaming Headset","Samsung Galaxy M51", "Samsung TV 55 in", "Dining Chair","TV Console","Study Desk","Shelf","Nurpur Butter","Nutella","Pringles","Samyang Noodles","Tissot Watch","Hugo Perfume","Aldo Shoes","Gucci Wallet", "GoalKeeping Gloves","Badminton Rackets","Tennis Balls","Brazuca Football","Pokemon Cards","Drone","Nerf Gun","Remote Car","Dove Shampoo","Aldo Handbag","Aldo Watch Set","Aldo Wallet"],
    brand_names : ["None","Axe","CA","Dell","Ray Ban","None","Gucci","Kenwood","L'Oreal","Nike","None","Orange Toys","Dawn","Samsung","Bloody","Samsung","Samsung","None","HoiD","HoiD","HoiD","Nurpur","Nestle","Hasbro","Samyang","Swatch","Hugo Boss","Aldo","Gucci","Adidas","None","Fort","Adidas","Nintendo","None","Hasbro","None","Dove","Aldo","Aldo","Aldo"],
    categories : ["Toys","Men","Sports","Electronics","Men","Furniture","Women","Electronics","Women","Men","Furniture","Toys","Groceries","Electronics","Electronics","Electronics","Electronics","Furniture","Furniture","Furniture","Furniture","Groceries","Groceries","Groceries","Groceries","Men","Men","Men","Men","Sports","Sports","Sports","Sports","Toys","Toys","Toys","Toys","Women","Women","Women","Women"],
    prices : [10500,550,1220,175000,10300,25000,12000,3500,32000,10500,7500,4500,100,44000,5500,38000,95000,18000,9500,16750,6600,500,370,150,295,8800,3200,6500,10000,2000,800,350,2500,250,4500,1800,1600,650,25000,5800,12000],
    leftOvers : [5,10,3,7,2,3,6,2,2,4,3,2,7,10,5,6,7,2,1,8,9,4,3,2,2,10,5,5,4,3,2,6,7,8,1,7,5,6,4,3,2],
    totalSold : [2,6,7,3,10,2,12,6,3,10,2,11,18,15,12,11,6,5,13,2,6,11,10,14,12,13,17,8,9,2,1,15,13,1,6,7,8,9,11,10,1],
    discount : [0,0,3,0,10,0,10,0,0,15,0,5,0,2,5,10,0,0,0,0,0,0,0,0,15,15,10,0,0,0,0,0,0,5,3,15,18,15,0,0,0],
    rating : [4.5,4.7,4.8,4.3,4.4,3.9,4.2,3.8,4.1,4.6,3.5,4.2,4.5,4.5,4.7,4.8,4.3,4.4,3.9,4.2,4.5,4.7,4.8,4.3,4.4,3.9,4.2,4.5,4.7,4.8,4.3,4.4,3.9,4.2,4.5,4.7,4.8,4.3,4.4,3.9,4.2],
    descriptions : ["Fun Tricycle for kids","Body Spray for Men","Superb Cricket Bat for the best players","14 inch Business Laptop","Glasses for fashion-crazy men","Wooden Study Table for students","Luxury Handbag for Ladies","Portable Kettle","Makeup Kit for Ladies","Sneakers for athletes","Table Lamp for your side Table","Cute and Soft Stuffed Teddy bear","Plain Bread for daily use","High bass and Great quality","7.1 Surround sound","Best mid-range smartphone","Great picture qualtity 4K UHD","Trendy design","Aesthetic console for your TV","Study desk for your room","Aesthetic Shelf","240 gram butter","Who doesn't love nutella?","Salt & Vinegar Flavor, yum","Fire hot noodles!","Genuine Tissot Watch","Smell better","Comfortable shoes, great design","Spacious Wallet","Comfortable gloves for goalkeeping","Pair of premium rackets","Tennis balls pack of 4","2014 World Cup football","Gotta Catch'em All!","Navigate a small aircraft, great for kids","Nerf Wars with friends","Replica of Lamborghini, great for kids","Dove Shampoo, prevent hairfall","Aldo purse","Set of earrings and premium watch","Big spacious feminine wallet"],
}
    
function AddProducts (){
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
        // db.ref("products").push(product);
        db.ref("products").child((i+1)).set(product);
    }
}

function AddCategories() {
    let categories = ["Groceries","Electronics","Sports","Toys","Men","Women","Furniture"]
    db.ref("Categories").child("Categories123").set(categories);
}
function AddAdmins (){
    let data = {
        names: ["Mati Ur Rehman", "Muhammad Hamza Shahzad", "Muhammad Hamza Sajjad", "Muhammad Haris", "Muhammad Raahem Asghar"],
        emails: ["22100173@lums.edu.pk", "22100027@lums.edu.pk","22100025@lums.edu.pk","22100013@lums.edu.pk","22100061@lums.edu.pk"],
        passwords: ["hellohi","hellohi","hellohi","hellohi","hellohi"],
    }
    for(let i = 0; i<data.names.length; i++){
        let admin = {
            name: data.names[i],
            email: data.emails[i],
            password: data.passwords[i],
        }
        db.ref("adminDetail").push(admin)
    }
}
// AddAdmins();
// AddCategories();
//  AddProducts();
function createTAsAccount () {
    let userData = {
        names : ["Minhal Aftab"],
        city: ["Lahore"],
        contact: ["090078601"],
        email: ["minhal@gmail.com"],
        address: ["SSE Lums"],
        newsLetter: [false],
        password: ["ilovelums"],
    }
    for(let i = 0; i<userData.names.length; i++){
        let user = {
            address: userData.address[i],
            city: userData.city[i],
            contact: userData.contact[i],
            email: userData.email[i],
            name: userData.names[i],
            news_letter: userData.newsLetter[i],
            password: userData.password[i],
        }
        let admin = {
            name: userData.names[i],
            email: userData.email[i],
            password: userData.password[i],
        }
        db.ref("user").child("minhalAftab").set(user);
        db.ref("adminDetail").child("minhalAftab").set(admin);
    }
}
createTAsAccount();