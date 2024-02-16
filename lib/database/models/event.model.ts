import { Document, Schema, model, models } from "mongoose";

export interface IEvents extends Document {
    _ID: string;
    title: string;
    description?: string;
    location?: string;
    cretedAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    url: string;
    isFree: boolean;
    category: {_id : string,name : string}
    organizer: { id: string , firstName : string , LoastNaame : string }
}
// we can use this interface to know the properties of our schema throughout tha app

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String },
    cretedAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String },
    url: { type: String },
    isFree: { type: Boolean, default: false },
    category: { type:Schema.Types.ObjectId, ref: 'Category'},
    organizer: { type:Schema.Types.ObjectId, ref: 'User'}
});

const Event = models.Event || model('Event', EventSchema);

export default Event