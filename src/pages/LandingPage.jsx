import { Box, Typography, IconButton } from "@mui/material";
import PopularProjectCard from "../components/PopularProjectCard";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import FeaturedTasker from '../components/FeaturedTasker';
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <Box>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",backgroundImage: "url(https://assets.taskrabbit.com/v3/assets/homepage/hero-img-11-16-desktop@2x.jpg)", height: "495px", backgroundRepeat: "no-repeat", backgroundPosition: "center top", backgroundSize: "cover", backgroundColor: "#f6f5f1", position: "relative"}}>
            <Box sx={{p: "30px", flexBasis: "664px", height: "300px", background: "white",  borderRadius: "5px"}}>
                <Box sx={{display: "flex", pt: "30px", pb: "30px", flexDirection: "column"}}>
                   
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h5">Get help. Gain happiness</Typography>
                    </Box>
                
                    
                    <Box sx={{flex: "20%", display: "flex", justifyContent: "center", alignItems: "center", mt: "40px"}}>
                        <Typography variant="subtitle">Just task.</Typography>
                    </Box>
                    <Box sx={{pt: "40px", flex: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "40px", gap: "20px"}}>
                        <Box sx={{flex: "60%"}}>
                            <Box sx={{display: "flex", border: "1px solid", borderRadius: "10px", height: "40px"}}>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                <InputBase placeholder='I need help with...' sx={{width: "100%"}}/>
                            </Box>
                            </Box>
                        
                        <Box sx={{flex: "20%", border: "1px solid #0d7a5f", backgroundColor: "#0d7a5f", color: "white", height: "40px", textAlign: "center", borderRadius: "10px"}}>
                            <Link to="/book" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <Typography sx={{p:"6px"}}>Get help today</Typography>
                            </Link>
                        </Box>
                        
                    </Box>
                    <Box sx={{display: "flex", gap: "20px", alignItems: "center", mt: "20px"}}>
                        <Box sx={{border: "1.5px solid #0d7a5f", color: "#0d7a5f", borderRadius: "7px"}}>
                            <Typography sx={{p: "5px"}}>Mounting</Typography>
                        </Box>
                        <Box sx={{border: "1.5px solid #0d7a5f", color: "#0d7a5f", borderRadius: "7px"}}>
                            <Typography sx={{p: "5px"}}>TV Mounting</Typography>
                            
                        </Box>
                        <Box sx={{border: "1.5px solid #0d7a5f", color: "#0d7a5f", borderRadius: "7px"}}>
                            <Typography sx={{p: "5px"}}>Furniture Assembly</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{p: "5px"}}>See More</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{pl: "7%", pr: "7%", mt: "70px"}}>
            <Typography variant="h5" >Popular projects in your area</Typography>
            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_33-ff031721fe1fd6feeb779c3f4bc64e6384106167f4bead18f1fabeec31c7a3ba.jpg"
                    task="Furniture Assembly"
                    min="53"
                    max="124"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_405-73a06ac4080d93824936820f5b00e83d48e58a1695c69270961ad2e8819a2eb4.jpg"
                    task="Mount a TV, art of shelves"
                    min="59"
                    max="118"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_6-56d6fa4bb3945b4fb95911ff2b1389e8973f1f7646ba1bf413f561a954b3c6b9.jpg"
                    task="Help moving"
                    min="57"
                    max="134"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_59-97f36ec5d917ec6299b04ba7c94f4ad041a62945fa9c44cbbdc6af48a3cdc42b.jpg"
                    task="Home Cleaning"
                    min="73"
                    max="154"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_69-ae088bb93a160d7c7479f9297e1a4b6cff75a01c3751b91232b04ebd4c703694.jpg"
                    task="Minor Plumbing Repairs"
                    min="57"
                    max="116"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_63-53a0834f2365d00e7517ed62ddcb344c6c27c9b076f76deb5b3707d2fe2b3f04.jpg"
                    task="Electrical Help"
                    min="63"
                    max="104"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_401-c3ed5c199aa212ee10bda1f06201e4d6676d91d958efb26c4f4722b1f4cd0a38.jpg"
                    task="Heavy Lifting"
                    min="43"
                    max="134"/>
                <PopularProjectCard 
                    image="https://assets.taskrabbit.com/v3/assets/web/homepage/components/popular_projects/desktop_113-8a2b4da5105b4a314f753304f2962ed7e1a1db5027353b5bac153cf90d397c53.jpg"
                    task="Yardword & Gardning"
                    min="50"
                    max="114"/>
            </Box>
        </Box>

        <Box sx={{mt: "50px", display: "flex", backgroundColor: "#f6f5f1"}}> 
            <Box sx={{flex: "50%"}}>

            </Box>
            <Box sx={{flex: "50%"}}>
                <img
                    src="https://assets.taskrabbit.com/v3/assets/homepage/tasker1-desktop.jpg"
                    alt="tasker1"
                    />
            </Box>
        </Box>

        <Box sx={{pl: "7%", pr: "7%", mt: "70px"}}>
            <Typography variant="h5" >Featured Taskers</Typography>
            <Box sx={{display: "flex", justifyContent: {xs: "center", sm: "center", md: "space-between", lg: "space-between"}, alignItems: {xs: "center", sm: "center", md: "flex-start"},flexDirection: {xs: "column", sm: "column", md: "row", lg: "row"}, gap: "20px", flexWrap: "wrap"}}>
                <FeaturedTasker 
                    name="Jeffery C."
                    image="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_200,w_200/v1536956935/rnvgjqb6sedpox1cxkd3.jpg"
                    review="99"
                    tasks="1098"/>
                <FeaturedTasker 
                    name="John K."
                    image="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_200,w_200/v1517529625/q19pyz80iljwc7dkr2id.jpg"
                    review="90"
                    tasks="382"/>
                <FeaturedTasker 
                    name="Rashid R."
                    image="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_200,w_200/v1486604592/baiyms34f3zbnhcme6jv.jpg"
                    review="96"
                    tasks="104"/>
                
            </Box>
        </Box>

        <Box sx={{mt: "50px", display: "flex", backgroundColor: "#f6f5f1"}}> 
            <Box sx={{flex: "50%"}}>
                <img
                    src="https://assets.taskrabbit.com/v3/assets/homepage/tasker2-desktop.jpg"
                    alt="tasker-2"
                    />
            </Box>
            <Box sx={{flex: "50%"}}>

            </Box>
            
        </Box>
    </Box>
    );
}

export default LandingPage;
