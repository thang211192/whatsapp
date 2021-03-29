import { Circle } from 'better-react-spinkit';
function Loading() {
    return (
        <center style={{display: "grid", placeItems:"center", height:'100vh'}}>
            <div>
                <img
                    src='https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png'
                    alt=''
                    style={{marginBottom: 10, objectFit: "contain"}}
                    height={200}
                    width={200}
                />

                <Circle color="#3CBC28" size={60}/>
            </div>
        </center>
    )
}

export default Loading


