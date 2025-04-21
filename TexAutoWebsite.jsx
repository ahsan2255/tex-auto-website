import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TexAutoWebsite() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <header className="bg-black text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tex Auto</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Supplying Reliable Diesel Fuel Injection Parts</h2>
          <p className="text-lg mb-6">Delphi & Chinese-made components delivered globally</p>
          <Button className="text-lg px-6 py-3">Explore Products</Button>
        </div>
      </section>

      <section id="about" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">About Tex Auto</h3>
          <p className="text-gray-600">Tex Auto is a trusted name in the diesel fuel injection parts industry. We supply both original Delphi parts and reliable Chinese alternatives. Our focus is on quality, affordability, and worldwide customer satisfaction.</p>
        </div>
      </section>

      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Roller & Shoe', 'Cam Ring', 'Liner', 'Blades', 'Piston'].map((item, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{item}</h4>
                  <p>High-quality component designed for performance and durability.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Gallery</h3>
          <p className="mb-6 text-gray-600">A glimpse into our range of diesel parts and warehouse</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="camring.jpg" alt="Cam Ring" className="rounded-xl object-cover h-40 w-full" />
            <img src="roller_shoe.jpg" alt="Roller and Shoe" className="rounded-xl object-cover h-40 w-full" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Customer Testimonials</h3>
          <p className="italic text-gray-600">"Tex Auto has been our go-to supplier for years. Always dependable, always quality." – A satisfied client</p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="text" placeholder="Name" className="border p-3 rounded-md" />
            <input type="email" placeholder="Email" className="border p-3 rounded-md" />
            <textarea placeholder="Message" className="border p-3 rounded-md md:col-span-2" rows={4}></textarea>
            <Button className="md:col-span-2">Send Message</Button>
          </form>
          <p className="mt-4 text-gray-600">Or email us directly at <a href="mailto:info@texauto.com" className="text-blue-600 underline">info@texauto.com</a></p>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© {new Date().getFullYear()} Tex Auto. All rights reserved. | <a href="mailto:info@texauto.com" className="underline">info@texauto.com</a></p>
      </footer>
    </div>
  );
}
