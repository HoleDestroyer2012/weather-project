import axios from "axios";

axios.post("http://localhost:5000/", {
	username: "sasha",
	age: "123",
}).then((res)=>console.log(res.data)).catch(()=>console.log("err"));

// import axios from "axios";

// let response = null;
// export const fetchWeather = async (inputPayload) => {
// 	return new Promise(async (resolve, reject) => {
// 		try {
// 			response = await axios.get(
// 				`https://openweathermap.org/data/2.5/find?q=${inputPayload}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`,
// 				{
// 					headers: {
// 						accept: "*/*",
// 						"accept-language":
// 							"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
// 						"sec-ch-ua":
// 							'"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
// 						"sec-ch-ua-mobile": "?0",
// 						"sec-ch-ua-platform": '"Windows"',
// 						"sec-fetch-dest": "empty",
// 						"sec-fetch-mode": "cors",
// 						"sec-fetch-site": "same-origin",
// 						cookie: "stick-footer-panel=true; _gid=GA1.2.1524241075.1692378423; october_session=eyJpdiI6IkxvR1hSaEV5NmxCbkZRZmRjZWxlZXc9PSIsInZhbHVlIjoiZHFDelFPXC9kOHoyazI2eEp3NTZlbWoyYUlsWXpYUHppZ0NxWWdLTGFTM1wvWXpJYnN0VG9XNEc3aE5lZGRTRVQ1WXN3SzNRUUtVMEZNeWg4QWdWb2Qyd2xHNGhuQWhnR0NBRXdlejlCWWlzSjJoODJnTEFNdThJbnljZGtPcXpOViIsIm1hYyI6ImZlNjI5MmI4NDBjZmQ2MGY1MDIwZDQxOGE0Njc4YWVmY2NhNTc4ODZkZjA3ODRjZWU3M2MyYjE3NTEyNGRkMzQifQ%3D%3D; units=metric; _ga_31TSX35RJT=GS1.1.1692389511.2.0.1692389511.60.0.0; _ga=GA1.2.1779519015.1692378423; _gat_gtag_UA_31601618_1=1; cityid=2643743",
// 						Referer: "https://openweathermap.org/",
// 						"Referrer-Policy": "strict-origin-when-cross-origin",
// 					},
// 				}
// 			);
// 		} catch (err) {
// 			response = null;
// 			console.log("err");
// 			reject("something went wrong");
// 		}
// 		if (response) {
// 			resolve(response.data.list[0]);
// 		}
// 	});
// };

// fetchWeather("moscow").then((res) => console.log(res));
