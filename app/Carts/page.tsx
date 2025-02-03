"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function CustomizePage() {
  const { toast } = useToast();
  const [customization, setCustomization] = useState({
    text: "",
    font: "Arial",
    color: "#000000",
    size: 24,
    position: "center",
  });
  const router = useRouter(); // Initialize useRouter hook

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button at the Top */}
      <button
        onClick={() => router.back()} // Navigate back to the previous page
        className="absolute top-4 left-4 bg-gray-100 text-black p-3 rounded-full hover:bg-gray-700 transition-colors"
      >
        <FaArrowAltCircleLeft size={20} /> {/* Upward arrow icon */}
      </button>
      <br />
      <br />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <br />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Product</h1>
          <p className="text-lr text-muted-foreground mb-5">
            Our furniture collection is a blend of contemporary design,
            craftsmanship, and functionality, offering pieces that will
            transform any space into a stylish and comfortable environment .
            Furniture plays a fundamental role in shaping the functionality and
            aesthetics of our living and working spaces. It is more than just a
            functional item in our daily lives; furniture serves as an
            expression of style, comfort, and identity. Whether in a home,
            office, or commercial establishment, well-designed furniture brings
            together practicality, design, and emotional appeal to create an
            environment that is comfortable, welcoming, and conducive to the
            activities that take place within it. From the simplest chairs and
            tables to the most luxurious couches and armoires, the variety of
            furniture available today allows individuals to express their unique
            tastes and preferences while enhancing the usability of their
            spaces. One of the primary functions of furniture is to provide
            comfort and convenience. For instance, chairs, sofas, and beds are
            essential for resting, while desks and tables offer support for work
            and meals. As our lives become busier, the demand for ergonomic
            designs that support our physical well-being has risen. With the
            rise of remote work and the increase in sedentary activities,
            ergonomic furniture such as adjustable office chairs and desks have
            gained popularity, emphasizing good posture and overall health.
            Sofas and recliners, too, have evolved with a focus on relaxation,
            often incorporating features such as memory foam cushions, reclining
            mechanisms, and heat massage options. The development of
            multi-functional furniture, such as sofa beds and storage ottomans,
            also speaks to the need for space-saving solutions that can optimize
            smaller living spaces. Design-wise, furniture helps to define the
            character of a room or space. The choice of materials, colors, and
            shapes can dramatically alter the mood of a space. For example,
            wooden furniture evokes a sense of warmth and natural beauty, while
            metal and glass pieces are often associated with modernity and
            minimalism. Leather and velvet upholstery add a touch of luxury and
            sophistication, while bold patterns and colors can make a statement
            or set a theme. Furniture is also used to create focal points in a
            room; a well-placed accent chair or an eye-catching dining table can
            draw attention and tie the rest of the room together. In fact,
            furniture can act as the foundation of a design scheme, with other
            elements such as wall color, lighting, and decor being chosen to
            complement or contrast with the furniture.
          </p>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              color: customization.color,
              fontSize: `${customization.size}px`,
              fontFamily: customization.font,
            }}
          >
            {customization.text}
          </div>
        </div>

        {/* Customization Controls */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Customize Your Product</h2>
            <p className="text-gray-600 mb-6">
              Add your personal touch to create a unique design.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Text</label>
              <input
                type="text"
                value={customization.text}
                onChange={(e) =>
                  setCustomization({ ...customization, text: e.target.value })
                }
                placeholder="Enter your text"
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Font</label>
              <select
                value={customization.font}
                onChange={(e) =>
                  setCustomization({ ...customization, font: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Helvetica">Helvetica</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <input
                type="color"
                value={customization.color}
                onChange={(e) =>
                  setCustomization({ ...customization, color: e.target.value })
                }
                className="h-10 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <input
                type="range"
                min="12"
                max="60"
                value={customization.size}
                onChange={(e) =>
                  setCustomization({
                    ...customization,
                    size: parseInt(e.target.value),
                  })
                }
                className="w-full border p-2 rounded"
              />
              <div className="mt-1 text-sm text-gray-500">
                {customization.size}px
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Position</label>
              <select
                value={customization.position}
                onChange={(e) =>
                  setCustomization({
                    ...customization,
                    position: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              >
                <option value="top">Top</option>
                <option value="center">Center</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
            <br />

            {/* Add Products Button */}
            <Link
              href="/shop"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg text-center font-bold hover:bg-[#B88E2F] transition-colors mt-3"
            >
              Add Products
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />

      <main>
        <Features />
        <Footer />
      </main>
    </div>
  );
}
