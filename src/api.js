import axios from "axios";
import React from "react";
import Avatar from '@mui/material/Avatar';

const url = "http://localhost:8000/api";

function Get() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get(url).then((res) => {
            const data = res.data;
            setData(data);
            console.log(data);
        });
    }, []);



    return (
        <div>
            <h1>Contact</h1>
            <div>
                {data.map((item) => (
                    <div key={item._id} style={{
                        display: "inline-block",
                        borderRadius: "5px",
                        width: "100%",


                    }}>


                        <div style={styles.box_title}>
                            <div style={styles.box_avatar}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={item.avatar}
                                    sx={{ width: 56, height: 56 }}
                                    style={{ marginLeft: "20px", marginTop: "15px" }}
                                />
                                <label style={{ marginLeft: "14px", marginTop: "24px" }}>{item.name} </label>
                            </div>
                        </div>
                        <br />
                        <div style={styles.box_banner_template}>
                            <img src={item.banner} style={{ width: "100%" }} alt="imgchamps" />
                        </div>





                    </div>

                ))}
            </div>
        </div>
    )
}

const styles = {


    box_avatar: {
        display: "flex",
        flexDirection: "row",
    },

    box_banner_template: {
        width: "400px",
    },

}

export default Get;