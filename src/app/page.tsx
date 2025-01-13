import CustomCard from "@/components/card";
import { GetBlogData } from "@/sanity/sanity.query"


export default async function Home(){
  const blogData=await  GetBlogData()
  console.log(blogData);
  
 return (
  <>
   {
          blogData.map((movie: any) => (
            <CustomCard name={movie.name} url={movie.imageURL} />
          ))
        }
  </>
 )
}