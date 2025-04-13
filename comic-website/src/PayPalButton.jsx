import { useEffect } from "react";

export default function PayPalButton() {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.HostedButtons({
        hostedButtonId: "9GX2P52VCBXSG" // Replace with your real ID
      }).render("#paypal-container-9GX2P52VCBXSG");
    }
  }, []);

  return <div id="paypal-container-9GX2P52VCBXSG" className="mt-4" />;
}
