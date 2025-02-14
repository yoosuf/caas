const mongoose = require("mongoose");

const _document_name = "AccountTemplate";

let DocumentSchema = mongoose.Schema({
  template: {
    type: String,
    required: true,
  },
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subject: {
    type: Array,
  },
  content: {
    type: Array,
  },
  variables: {
    subject: {
      type: Array,
      default: [],
    },
    content: {
      type: Array,
      default: [],
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(_document_name, DocumentSchema);
