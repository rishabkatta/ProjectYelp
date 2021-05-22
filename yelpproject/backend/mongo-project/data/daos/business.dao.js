const businessModel=require('../models/business/business.model')

//const findbusinessid=(id)=>businessModel.find({business_id : id})

var str1 = "{name:{$regex: /";
var str2 = "/i}},{ _id:0,business_id:1 ,name:1, city:1, state:1, postal_code:1}";

//
// hopping

const findallbusiness=()=>businessModel.find()

const findbusinessid=(keyword,option)=>{
    //var str3 = "{name:{$regex: /aptop/i}},{ _id:0,business_id:1 ,name:1, city:1, state:1, postal_code:1}";
    var htmlTag = " "
    var key;
    if (option === "Category") {
        key = "\\b" + keyword
        return businessModel.find({categories: {$regex: key, $options: 'i'}}, {
            _id: 0,
            business_id: 1,
            categories: 1,
            name: 1,
            city: 1,
            state: 1,
            postal_code: 1
        }).limit(15);

    }
    else if(option === "Name"){
        key = "\\b" + keyword
        return businessModel.find({name: {$regex: key, $options: 'i'}}, {
            _id: 0,
            business_id: 1,
            categories: 1,
            name: 1,
            city: 1,
            state: 1,
            postal_code: 1
        }).limit(15);

    }
    else{
        var res = keyword.split(',');
        for (index = 0 ;index < res.length; index++){
            res[index] = Number(res[index])
        }
        return businessModel.find({ loc:{ $near:{$geometry: {type: "Point" ,
                        coordinates: res},$maxDistance: 400000}}},{_id: 0, business_id: 1,
            categories: 1, name: 1,city: 1,state: 1,postal_code: 1}).limit(15);
    }



}

const findwithid=(id)=>
    businessModel.find({business_id : id})

const updatecomment =(id,comment_text)=>
{
    return businessModel.updateOne({business_id : id},{$set: { comment : comment_text }});
}

module.exports={
    findbusinessid,
    findallbusiness,
    findwithid,
    updatecomment
}