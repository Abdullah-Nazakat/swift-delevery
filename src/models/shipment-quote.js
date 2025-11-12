import mongoose from 'mongoose';

const shipmentQuoteSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  loadType: { type: String, required: true },
  departure: { type: String, required: true },
  surrender: { type: String, required: true },
  internationalTrc: { type: String, default: 'No' },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  status: { type: String, default: 'new' },
  type: { type: String, default: 'shipment_quote' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const ShipmentQuote = mongoose.models.ShipmentQuote || mongoose.model('ShipmentQuote', shipmentQuoteSchema);
export default ShipmentQuote;
