import Image from "next/image";
async function requet() {
	
	try {
		// J'attend la fin de mon fetch et stoque le résultat en variable
		const result = await fetch("https://dev.to/api/articles");
    const decodedJSON = await result.json();
    console.log(decodedJSON);
		return decodedJSON;
    // Si mon fetch est OK, je continue ici
	} 
	catch (error) {
		// Si mon fetch échoue, j'arriverai ici directement
		console.error(error);
    return [];
	}

}
export default async function Home() {
  await  requet();
  return null;
}
