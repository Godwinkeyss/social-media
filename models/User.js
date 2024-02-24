const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
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
    profilePic: {
      type: String,
      default: '',
    },
    coverPic: {
      type: String,
      default: '',
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
    },
    city: {
      type: String,
    },
    from: {
      type: String,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
