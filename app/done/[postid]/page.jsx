"use client"
import React, { useState } from "react";
import { Card } from "@nextui-org/react";
import NavBar from "@/components/home/Navbar";

const Home = () => {
    const [postId, setPostId] = useState("");
    const [error, setError] = useState("");

    const handleExportComments = () => {
        // Validar si el ID de la publicación tiene la estructura correcta
        const tiktokUrlRegex = /^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/;
        if (!tiktokUrlRegex.test(postId)) {
          setError("El ID de la publicación de TikTok no tiene el formato correcto.");
          return;
        }
        // Lógica para exportar comentarios a un archivo CSV
        console.log("Exportando comentarios para el ID de la publicación:", postId);
      };
    
      return (
        <>
          <NavBar />
          <div className="flex justify-center items-center h-screen">
            <Card className="w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-4">TikTok Export Comments</h1>
              <p className="text-gray-600 mb-4">
                Exporta fácilmente todos los comentarios de tus publicaciones de TikTok a un archivo CSV.
              </p>
              <input
                type="text"
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="https://www.tiktok.com/@username/video/postid"
                value={postId}
                onChange={(e) => {
                  setPostId(e.target.value);
                  setError("");
                }}
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleExportComments}
              >
                Exportar Comentarios
              </button>
            </Card>
          </div>
        </>
      );
    };
export default Home;
