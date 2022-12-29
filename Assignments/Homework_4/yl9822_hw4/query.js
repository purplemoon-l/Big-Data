use yl9822_db
//1
print("Q1")
db.restaurants.countDocuments({}).pretty()
//2
print("Q2")
db.restaurants.find().pretty()
//3
print("Q3")
db.restaurants.find({},{restaurant_id:true,name:true,borough:true, cuisine:true}).pretty()
//4
print("Q4")
db.restaurants.find({},{restaurant_id:true,name:true,borough:true, cuisine:true,_id:0}).pretty()
//5
print("Q5")
db.restaurants.find({},{restaurant_id:true,name:true,borough:true, "address.zipcode":true,_id:0}).pretty()
//6
print("Q6")
db.restaurants.find({"borough":"Bronx"}).pretty()
//7
print("Q7")
db.restaurants.aggregate([{$match: {borough:  "Bronx"}},{$limit:5} ]).pretty() or db.restaurants.find({"borough": "Bronx"}).limit(5).pretty()
//8
print("Q8")
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5).pretty()
//9
print("Q9")
db.restaurants.find({"grades":{$elemMatch:{"score":{$gt : 85}}}}).pretty()
//10
print("Q10")
db.restaurants.find({"grades":{$elemMatch:{"score":{$gt : 80,$lt:100}}}}).pretty()
//11
print("Q11")
db.restaurants.find({"address.coord.1":{$lt : -95.754168}}).pretty()
//12
print("Q12")
db.restaurants.find({$and : [{"cuisine" : {$ne : "American"}}, {"address.coord.1" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]}).pretty()
//13
print("Q13")
db.restaurants.find({"cuisine" : {$ne : "American"},"grades.score":{$gt:70},"address.coord.1":{$lt :-65.754168}}).pretty()
//14
print("Q14")
db.restaurants.find({"cuisine" : {$ne : "American"},"grades.grade":"A","borough":{$ne:"Brooklyn"}}).sort({"cuisine":-1}).pretty()
//15
print("Q15")
db.restaurants.find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()
//16
print("Q16")
db.restaurants.find({name: /ces$/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()
//17
print("Q17")
db.restaurants.find({name: /.*Reg.*/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()
//18
print("Q18")
db.restaurants.find({ "borough": "Bronx" , $or : [{ "cuisine" : "American" },{ "cuisine": "Chinese" }]}).pretty()
//19
print("Q19")
db.restaurants.find( {"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}}, { "restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1 } ).pretty()
//20
print("Q20")
db.restaurants.find( {"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}}, { "restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1 } ).pretty()
//21
print("Q21")
db.restaurants.find( {"grades.score" :{$lt : 10} }, { "restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1 } )
//22
print("Q22")
db.restaurants.find( {$or: [   {name: /^Wil/},{"$and": [{"cuisine" : {$ne :"American "}},{"cuisine" : {$ne :"Chinese"}}]} ]} ,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1} ).pretty()
//23
print("Q23")
db.restaurants.find({"grades.date": ISODate("2014-08-11T00:00:00Z"),"grades.grade":"A" ,"grades.score" : 11},{"restaurant_id" : 1,"name":1,"grades":1}).pretty()
//24
print("Q24")
db.restaurants.find({ "grades.1.date": ISODate("2014-08-11T00:00:00Z"),"grades.1.grade":"A" ,"grades.1.score" : 9},{"restaurant_id" : 1,"name":1,"grades":1}).pretty()
//25
print("Q25")
db.restaurants.find({"address.coord.1":{$gt : 42,$lte : 52}},{"restaurant_id" : 1,"name":1,"address":1}).pretty()
