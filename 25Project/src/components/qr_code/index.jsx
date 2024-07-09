import { useState } from "react";
import { QRCode } from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQRCode(input);
    setInput("");
  }

  return (
    <div className="flex flex-col gap-5 items-center p-[50px] bg-gray-100 my-[100px] w-[600px] m-auto">
      <h1 className="font-bold font-serif">QR code generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="enter your value"
          onChange={(e) => setInput(e.target.value)}
          className="px-5 py-2 border-s-black border-[2px]"
        />
      </div>
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQRCode}
        className="bg-gray-200 p-3"
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
