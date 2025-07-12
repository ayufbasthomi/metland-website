import React from 'react';

export default function VirtualTour() {
  return (
    <section id="virtualtour" className="p-4">
    <h2 className="text-3xl font-bold text-center mb-10">Virtual Tour</h2>
        <div className="w-full max-w-7xl mx-auto h-[700px] shadow border rounded overflow-hidden">
            <iframe
            src="https://www.metlandcikarang.co.id/virtualtour/"
            width="100%"
            height= "100%" // height larger than container
            style={{ border: "none", marginTop: "0px" }}
            allowFullScreen
            title="Metland Virtual Tour"
            ></iframe>
        </div>
    </section>
  );
}