import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp= () => {
    const [categories, setCategories] = useState(['Kuroko No Basket']);
    
     const onAddCategory = (newCategory: string) => {

     if( categories.includes(newCategory) ) return;
     
     setCategories([ ...categories, newCategory])
    }

  return (
    <>
        <h1>Bienvenidos a Gif Expert</h1>
        
        <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ (event) => onAddCategory( event ) }
        />

        { 
          categories.map( (category) => (
                  <GifGrid key={ category } category={ category }/>
                )) 
        }
    </>
  )
}


