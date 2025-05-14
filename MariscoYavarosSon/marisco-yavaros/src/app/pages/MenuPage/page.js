import React from "react";
import { menuItems } from "@/data/MenuData";
import MenuList from "@/components/MenuList/MenuList";


function MenuPage(){
    return(
        <>
        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-12">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-serif font-bold text-blue-900 mb-4">Nuestro Menú</h1>
                <p className="text-gray-600">
                  Explora nuestra selección de mariscos frescos y platillos preparados por nuestros chefs expertos.
                </p>
              </div>
              <MenuList items={menuItems} />
          </div>
    </div>

        </>
    )
}

export default MenuPage;