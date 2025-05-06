import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
type props={
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void
}
const Link=({page , selectedPage , setSelectedPage}:props)=>{
    
    const lowerCasePage=page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
    
    
    return(
        <AnchorLink 
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() =>setSelectedPage(lowerCasePage)}
          >
            {page}
        </AnchorLink>
    )
}

export default Link;