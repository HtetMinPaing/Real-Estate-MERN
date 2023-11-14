import Listing from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js"

export const createListing = async (req, res, next) => {
    try{
        const listing = await Listing.create(req.body)
        return res.status(201).json(listing)
    } catch(error) {
        next(error)
    }
}

export const deleteListing = async (req, res, next ) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing) {
        return next(errorHandler(404,"Listing not found"))
    }

    if(req.user.id !== listing.userRef) {
        return next(errorHandler(401,"You can only delete your listings"))
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json("Listing has been deleted")
    } catch (err){
        next(err)
    }
}

export const updateListing = async (req, res, next) => {

    const listing = await Listing.findById(req.params.id);

    if(!listing) {
        return next(errorHandler(404,"Listing not found"))
    }

    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, "You can only update your listing"))
    }

    try {
        const updateListing = await Listing.findByIdAndUpdate(
            req.params.id, //finf id
            req.body, //update body
            {new: true} //for update
        );

        res.status(200).json(updateListing)

    } catch (err) {
        next(err)
    }
}

export const getListing = async (req, res, next) => {

    try {
        const listing = await Listing.findById(req.params.id);

        if(!listing) {
            return next(errorHandler(404, "Listing not found"))
        } 
        res.status(200).json(listing);
    } catch (err) {
        next(err)
    }
}