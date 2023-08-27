import { MainPageContainer } from './mainPage.styles'
import HeaderContentComponent from "../../component/headerContent/HeaderContent.component";
import CollectionHostwayComponent from "../../component/collectionHostway/CollectionHostway.component";
import { useParams } from "react-router";


const MainPage = () =>{

    return(
        <MainPageContainer>
            <HeaderContentComponent />
            <CollectionHostwayComponent />
        </MainPageContainer>
    )
}


export  default MainPage;