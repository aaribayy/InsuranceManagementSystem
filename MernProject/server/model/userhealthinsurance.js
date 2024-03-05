const mongoose = require('mongoose');
const InsuranceSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  cnic: { type: Number, required: true },
  address: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  disease:{type: String, required: true},
  insurance_name: {
    type: String,
    required: true
  },
  coverage_type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  coverage_limit: {
    type: String,
    default: null
  },
  premium_rate: {
    type: String,
    required: true
  },
  insurance_status: {
    type: String,
    required: true
  },
  document_cnic:{
    type:Buffer
  }
});

const userhealthinsurance = mongoose.model('user_health_insurances', InsuranceSchema);

module.exports = userhealthinsurance;
