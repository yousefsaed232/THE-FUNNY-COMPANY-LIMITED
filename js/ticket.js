const app = new Vue({
    el: '#app',
    data: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      ticket: null,
      ticketPrice: 10, // Replace with actual pricing logic
      paymentFormVisible: true,
    },
    methods: {
      onPaymentSubmit() {
        // Validate payment information
        if (!this.cardNumber || !this.expiryDate || !this.cvv) {
          alert("يرجى إدخال بيانات الدفع قبل قطع التذكرة.");
          return;
        }
  
        // Simulate payment processing
        alert("تم معالجة الدفع بنجاح!");
  
        // Hide the payment form
        this.paymentFormVisible = false;
      },
      onTicketSubmit() {
        // You can add additional validation or logic here if needed
        // For simplicity, just alert that the ticket form is submitted
        alert("تم تقديم نموذج التذكرة!");
      },
      printTicket() {
        // Add your ticket printing logic here
        // For now, let's use a simple alert as an example
        alert('Ticket Printed!');
      },
    },
  });
  