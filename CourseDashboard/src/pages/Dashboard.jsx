import { Outlet } from "react-router-dom"
function Dashboard(){
    return (
        <>
        <h1>Dashboard</h1>
        <hr/>
        <Outlet/>
        </>
    )
}

export default Dashboard