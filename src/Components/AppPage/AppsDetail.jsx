import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AppsDetail = () => {
    const { userId } = useParams();
	const [userDetail, setUserDetail] = useState({});
console.log(userId)
	useEffect(() => {
		fetch(`http://localhost:8000/posts/${userId}`, {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setUserDetail(json);
			})
            .catch((err) => {
				setUserDetail("err",err);  
            });
	}, [userId]);
  return (
    <div >
    <h2 >{userDetail.about}</h2>
</div>
  )
}
