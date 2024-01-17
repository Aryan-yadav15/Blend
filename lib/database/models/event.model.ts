
const EventSchema =({
    title: {type: String, required: true},
    description: {type: String,required: true},
    location: {type: String},
    cretedAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime:{type: Date, default:Date.now },
    endDateTime: {type: Date, default: Date.now},
    price: {type: String},
    url: {type: String},
    isFree: {type: Boolean, default:false},
    category:{type:String,}
}) 