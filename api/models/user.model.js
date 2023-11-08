import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fpeoples-avatars%2Fdefault-profile-picture-male-icon.svg&tbnid=HKH80KjEYoYrMM&vet=12ahUKEwiEiIS7_7OCAxVoSmwGHeJdDbAQMyhVegUIARC4Ag..i&imgrefurl=https%3A%2F%2Fuxwing.com%2Fdefault-profile-picture-male-icon%2F&docid=4dYJsNXJ3jLinM&w=800&h=800&q=image%20for%20profile&ved=2ahUKEwiEiIS7_7OCAxVoSmwGHeJdDbAQMyhVegUIARC4Ag",
    }
},{ timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;