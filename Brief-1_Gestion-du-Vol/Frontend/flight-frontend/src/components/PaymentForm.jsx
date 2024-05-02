import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentForm() {
  const location = useLocation();
  const totalAmount = new URLSearchParams(location.search).get('amount');

  return (
    <div className="container mt-5">
      <h1>Payment</h1>
      <p>Please complete the payment to confirm your booking:</p>

      {/* Display total amount */}
      <p>Total Amount: ${totalAmount}</p>

      {/* Additional payment form elements */}
      <form>
        {/* Payment method selection */}
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select className="form-control" id="paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        {/* Credit card payment form */}
        <div id="creditCardPayment">
          <h4>Credit Card Payment</h4>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" className="form-control" id="cvv" placeholder="CVV" />
          </div>
        </div>

        {/* PayPal payment form */}
        <div id="paypalPayment" style={{ display: 'none' }}>
          <h4>PayPal Payment</h4>
          <p>Please complete the payment through PayPal.</p>
        </div>

        {/* Bank transfer payment form */}
        <div id="bankTransferPayment" style={{ display: 'none' }}>
          <h4>Bank Transfer Payment</h4>
          <p>Please transfer the total amount to the following bank account:</p>
          <p>Bank Name: XYZ Bank</p>
          <p>Account Number: 1234567890</p>
          <p>Account Holder: Your Name</p>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
